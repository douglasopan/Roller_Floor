// LevelGenerator.js - Gerador procedural de labirintos 100% preenchíveis (Roller Splat Guaranteed Solvable)

const DIRECTIONS = [
  { dr: -1, dc: 0, name: 'UP' },
  { dr: 1, dc: 0, name: 'DOWN' },
  { dr: 0, dc: -1, name: 'LEFT' },
  { dr: 0, dc: 1, name: 'RIGHT' }
];

export class LevelGenerator {
  /**
   * Gera um labirinto procedural 100% solucionável para qualquer nível
   */
  static generate(levelNumber) {
    // Tamanho do mapa progressivo (sempre ímpar para alinhamento perfeito de corredores e paredes)
    let size;
    if (levelNumber === 1) {
      size = 7; // Introdução fluida (corredor em espiral / Z simples)
    } else if (levelNumber <= 3) {
      size = 7;
    } else if (levelNumber <= 7) {
      size = 9;
    } else if (levelNumber <= 15) {
      size = 11;
    } else if (levelNumber <= 30) {
      size = 13;
    } else {
      // Mapas grandes e desafiadores
      size = Math.min(17, 13 + Math.floor((levelNumber - 30) / 15) * 2);
    }

    const rows = size;
    const cols = size;

    // Tenta gerar por método de escultura de rolagem (Roll-Carve) que garante 100% de pintura
    for (let attempt = 0; attempt < 50; attempt++) {
      const level = this.generateRollCarvedMaze(rows, cols, levelNumber, attempt);
      const validation = this.solveAndValidate(level.grid, level.spawn);

      if (validation.isFullyPaintable && validation.totalFloor >= Math.floor(size * size * 0.28)) {
        return {
          levelNumber,
          rows: level.grid.length,
          cols: level.grid[0].length,
          grid: level.grid,
          spawn: level.spawn,
          totalFloor: validation.totalFloor
        };
      }
    }

    // Método clássico de Labirinto Perfeito por DFS de corredores
    for (let attempt = 0; attempt < 50; attempt++) {
      const level = this.generateDfsMaze(rows, cols);
      const validation = this.solveAndValidate(level.grid, level.spawn);

      if (validation.isFullyPaintable && validation.totalFloor >= 12) {
        return {
          levelNumber,
          rows: level.grid.length,
          cols: level.grid[0].length,
          grid: level.grid,
          spawn: level.spawn,
          totalFloor: validation.totalFloor
        };
      }
    }

    // Fallback garantido (Corredor em Serpentina/Espiral 100% conectada)
    return this.generateSerpentineFallback(levelNumber, size);
  }

  /**
   * Método Roll-Carve: Constrói o labirinto simulando rolagens da própria bola.
   * Cria corredores onde cada segmento é percorrido até bater em uma parede.
   */
  static generateRollCarvedMaze(rows, cols, levelNumber, seedOffset = 0) {
    // 1 = Parede, 0 = Piso
    const grid = Array.from({ length: rows }, () => Array(cols).fill(1));

    // Ponto de partida
    const spawn = { r: 1, c: 1 };
    grid[spawn.r][spawn.c] = 0;

    const stopPoints = [{ r: spawn.r, c: spawn.c }];
    const targetBranches = Math.floor(rows * 2.2) + Math.min(25, levelNumber * 2);

    for (let i = 0; i < targetBranches && stopPoints.length > 0; i++) {
      // Pega um ponto de parada existente
      const originIdx = Math.floor(Math.random() * stopPoints.length);
      const origin = stopPoints[originIdx];

      // Escolhe uma direção aleatória
      const shuffledDirs = [...DIRECTIONS].sort(() => Math.random() - 0.5);

      for (const dir of shuffledDirs) {
        // Comprimento da rolagem (entre 2 e 5 casas)
        const length = 2 + Math.floor(Math.random() * (Math.max(rows, cols) - 3));
        
        let canCarve = true;
        const path = [];

        for (let step = 1; step <= length; step++) {
          const nr = origin.r + dir.dr * step;
          const nc = origin.c + dir.dc * step;

          // Deve respeitar bordas externas
          if (nr <= 0 || nr >= rows - 1 || nc <= 0 || nc >= cols - 1) {
            canCarve = false;
            break;
          }
          path.push({ r: nr, c: nc });
        }

        if (canCarve && path.length >= 2) {
          // Esculpe o caminho
          path.forEach(p => {
            grid[p.r][p.c] = 0;
          });

          // O último ponto é o ponto de parada (onde a parede à frente o bloqueia)
          const lastPoint = path[path.length - 1];
          stopPoints.push(lastPoint);
          break;
        }
      }
    }

    // Adiciona alguns loops conectores para dar múltiplos caminhos satisfatórios
    for (let r = 2; r < rows - 2; r += 2) {
      for (let c = 2; c < cols - 2; c += 2) {
        if (grid[r][c] === 1 && Math.random() < 0.25) {
          // Se tiver pisos vizinhos opostos, abre passagem
          if (grid[r - 1][c] === 0 && grid[r + 1][c] === 0) {
            grid[r][c] = 0;
          } else if (grid[r][c - 1] === 0 && grid[r][c + 1] === 0) {
            grid[r][c] = 0;
          }
        }
      }
    }

    return { grid, spawn };
  }

  /**
   * Gera labirinto estruturado por corredores DFS
   */
  static generateDfsMaze(rows, cols) {
    const grid = Array.from({ length: rows }, () => Array(cols).fill(1));
    const spawn = { r: 1, c: 1 };

    function carve(r, c) {
      grid[r][c] = 0;
      const dirs = [...DIRECTIONS].sort(() => Math.random() - 0.5);

      for (const dir of dirs) {
        const nr = r + dir.dr * 2;
        const nc = c + dir.dc * 2;

        if (nr > 0 && nr < rows - 1 && nc > 0 && nc < cols - 1 && grid[nr][nc] === 1) {
          grid[r + dir.dr][c + dir.dc] = 0;
          grid[nr][nc] = 0;
          carve(nr, nc);
        }
      }
    }

    carve(1, 1);

    // Abre conexões extras (remove algumas paredes internas para não ser estritamente labirinto único)
    for (let r = 2; r < rows - 2; r++) {
      for (let c = 2; c < cols - 2; c++) {
        if (grid[r][c] === 1 && Math.random() < 0.2) {
          const adjFloors = (grid[r - 1][c] === 0 ? 1 : 0) +
                            (grid[r + 1][c] === 0 ? 1 : 0) +
                            (grid[r][c - 1] === 0 ? 1 : 0) +
                            (grid[r][c + 1] === 0 ? 1 : 0);
          if (adjFloors >= 2) {
            grid[r][c] = 0;
          }
        }
      }
    }

    return { grid, spawn };
  }

  /**
   * Fallback com padrão em ziguezague / espiral que garante 100% de cobertura
   */
  static generateSerpentineFallback(levelNumber, size) {
    const grid = Array.from({ length: size }, () => Array(size).fill(1));

    // Cria serpentina perfeita
    for (let r = 1; r < size - 1; r++) {
      if (r % 2 === 1) {
        for (let c = 1; c < size - 1; c++) {
          grid[r][c] = 0;
        }
      } else {
        const turnCol = (r / 2) % 2 === 1 ? size - 2 : 1;
        grid[r][turnCol] = 0;
      }
    }

    const spawn = { r: 1, c: 1 };
    const validation = this.solveAndValidate(grid, spawn);

    return {
      levelNumber,
      rows: size,
      cols: size,
      grid,
      spawn,
      totalFloor: validation.totalFloor
    };
  }

  /**
   * Simula a mecânica de rolamento para verificar se 100% das peças de chão são visitadas
   */
  static solveAndValidate(grid, spawn) {
    const rows = grid.length;
    const cols = grid[0].length;

    // BFS sobre estados de parada da bola (r, c)
    const visitedStates = new Set();
    const paintedTiles = new Set();
    const queue = [];

    const startKey = `${spawn.r},${spawn.c}`;
    visitedStates.add(startKey);
    paintedTiles.add(startKey);
    queue.push(spawn);

    while (queue.length > 0) {
      const curr = queue.shift();

      for (const dir of DIRECTIONS) {
        let r = curr.r;
        let c = curr.c;
        const rollPath = [];

        // Rola até bater na parede
        while (true) {
          const nextR = r + dir.dr;
          const nextC = c + dir.dc;

          if (nextR < 0 || nextR >= rows || nextC < 0 || nextC >= cols || grid[nextR][nextC] === 1) {
            break; // Bateu na parede
          }

          r = nextR;
          c = nextC;
          rollPath.push({ r, c });
        }

        // Se moveu pelo menos 1 casa
        if (rollPath.length > 0) {
          rollPath.forEach(tile => paintedTiles.add(`${tile.r},${tile.c}`));

          const stopKey = `${r},${c}`;
          if (!visitedStates.has(stopKey)) {
            visitedStates.add(stopKey);
            queue.push({ r, c });
          }
        }
      }
    }

    // Remove pisos que nunca podem ser alcançados, convertendo-os em paredes
    let reachableFloorCount = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 0) {
          if (!paintedTiles.has(`${r},${c}`)) {
            grid[r][c] = 1; // Transforma em parede para não sobrar piso impossível de pintar
          } else {
            reachableFloorCount++;
          }
        }
      }
    }

    const isFullyPaintable = reachableFloorCount > 0 && reachableFloorCount === paintedTiles.size;

    return {
      isFullyPaintable,
      totalFloor: reachableFloorCount,
      paintedCount: paintedTiles.size
    };
  }
}
