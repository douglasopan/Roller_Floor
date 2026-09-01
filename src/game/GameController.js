// GameController.js - Núcleo de lógica do jogo, física de rolagem, pintura e transições de fase
import * as THREE from 'three';
import { LevelGenerator } from './LevelGenerator.js';
import { getThemeForLevel } from '../ui/Themes.js';

const DIR_MAP = {
  UP: { dr: -1, dc: 0, vec: new THREE.Vector3(0, 0, -1) },
  DOWN: { dr: 1, dc: 0, vec: new THREE.Vector3(0, 0, 1) },
  LEFT: { dr: 0, dc: -1, vec: new THREE.Vector3(-1, 0, 0) },
  RIGHT: { dr: 0, dc: 1, vec: new THREE.Vector3(1, 0, 0) }
};

export class GameController {
  constructor({ renderer, ball, gridMap, particles, audio, leaderboard, onStateChange }) {
    this.renderer = renderer;
    this.ball = ball;
    this.gridMap = gridMap;
    this.particles = particles;
    this.audio = audio;
    this.leaderboard = leaderboard;
    this.onStateChange = onStateChange;

    this.currentLevel = 1;
    this.levelData = null;
    this.theme = null;
    this.paintedCount = 0;
    this.totalFloorCount = 0;
    this.moves = 0;
    this.moveHistory = []; // Para suporte a Desfazer (Undo)
    this.isRolling = false;
    this.queuedDirection = null;
    this.isVictory = false;
    this.rollSpeed = 22.0; // Velocidade fluida de rolagem (unidades/segundo)

    // Caminho da rolagem atual
    this.rollPath = [];
    this.currentPathIndex = 0;
    this.pathSegmentProgress = 0;
  }

  loadLevel(levelNumber) {
    this.currentLevel = levelNumber;
    this.levelData = LevelGenerator.generate(levelNumber);
    this.theme = getThemeForLevel(levelNumber);
    this.moves = 0;
    this.moveHistory = [];
    this.isRolling = false;
    this.queuedDirection = null;
    this.isVictory = false;
    this.rollPath = [];

    // Constrói malha 3D
    this.gridMap.build(this.levelData, this.theme);
    this.renderer.setTheme(this.theme);
    this.renderer.fitToGrid(this.levelData.rows, this.levelData.cols);

    // Posiciona a bola no spawn
    const spawn = this.levelData.spawn;
    this.ball.setGridPosition(
      spawn.r,
      spawn.c,
      this.gridMap.cellSize,
      this.gridMap.offsetX,
      this.gridMap.offsetZ
    );

    // Pinta o piso inicial do spawn
    this.paintedCount = 0;
    this.totalFloorCount = this.levelData.totalFloor;
    this.paintAt(spawn.r, spawn.c, false);

    this.notifyState();
  }

  handleInput(direction) {
    if (this.isVictory) return;

    if (this.isRolling) {
      // Bufferiza o próximo movimento para controle instantâneo e responsivo
      this.queuedDirection = direction;
      return;
    }

    this.executeRoll(direction);
  }

  executeRoll(direction) {
    const dirInfo = DIR_MAP[direction];
    if (!dirInfo) return;

    const startR = this.ball.gridPosition.r;
    const startC = this.ball.gridPosition.c;

    // Calcula todas as casas atravessadas até a colisão
    const path = [];
    let r = startR;
    let c = startC;

    while (true) {
      const nextR = r + dirInfo.dr;
      const nextC = c + dirInfo.dc;

      if (this.gridMap.isWall(nextR, nextC)) {
        break;
      }

      r = nextR;
      c = nextC;
      path.push({
        r,
        c,
        worldPos: this.gridMap.getTileWorldPos(r, c)
      });
    }

    // Se houver pelo menos 1 casa para mover
    if (path.length > 0) {
      // Salva histórico para Undo
      this.moveHistory.push({
        from: { r: startR, c: startC },
        paintedBefore: this.paintedCount
      });

      this.moves++;
      this.isRolling = true;
      this.rollDirection = dirInfo;
      this.rollPath = path;
      this.currentPathIndex = 0;
      this.pathSegmentProgress = 0;
      
      this.audio.startRollingSound();
      this.notifyState();
    }
  }

  paintAt(r, c, playSound = true) {
    const newlyPainted = this.gridMap.paintTile(r, c);
    if (newlyPainted) {
      this.paintedCount++;
      const progress = this.paintedCount / this.totalFloorCount;
      
      if (playSound) {
        this.audio.playTilePaint(progress);
      }

      const worldPos = this.gridMap.getTileWorldPos(r, c);
      this.particles.emitPaintSplatter(worldPos, this.theme.paintColor, 8);
    }
  }

  update(delta) {
    if (!this.isRolling) return;

    if (this.currentPathIndex < this.rollPath.length) {
      const targetStep = this.rollPath[this.currentPathIndex];
      const targetPos = targetStep.worldPos;
      
      const currentPos = this.ball.mesh.position;
      const dist = currentPos.distanceTo(targetPos);
      const stepDist = this.rollSpeed * delta;

      if (dist <= stepDist) {
        // Chegou ao ladrilho
        const moveDelta = targetPos.clone().sub(currentPos);
        currentPos.copy(targetPos);
        this.ball.update(delta, moveDelta);

        // Pinta o ladrilho
        this.paintAt(targetStep.r, targetStep.c, true);
        this.ball.gridPosition = { r: targetStep.r, c: targetStep.c };

        this.currentPathIndex++;

        // Verifica se completou o trajeto todo
        if (this.currentPathIndex >= this.rollPath.length) {
          this.finishRoll();
        }
      } else {
        // Move em direção ao ponto
        const moveDir = targetPos.clone().sub(currentPos).normalize();
        const moveDelta = moveDir.multiplyScalar(stepDist);
        currentPos.add(moveDelta);
        this.ball.update(delta, moveDelta);
      }
    } else {
      this.finishRoll();
    }
  }

  finishRoll() {
    this.isRolling = false;
    this.audio.stopRollingSound();

    // Efeitos de impacto na parede
    if (this.rollDirection) {
      this.ball.triggerWallImpact(this.rollDirection.vec);
      this.audio.playWallHit();
      this.renderer.triggerCameraShake(0.12);
      
      const ballPos = this.ball.mesh.position;
      this.particles.emitWallImpactSparks(ballPos, this.rollDirection.vec, 10);
    }

    this.notifyState();

    // Checa condição de vitória (100% pintado)
    if (this.paintedCount >= this.totalFloorCount && !this.isVictory) {
      this.triggerVictory();
      return;
    }

    // Se havia um comando bufferizado, executa imediatamente!
    if (this.queuedDirection) {
      const nextDir = this.queuedDirection;
      this.queuedDirection = null;
      this.executeRoll(nextDir);
    }
  }

  triggerVictory() {
    this.isVictory = true;
    this.audio.playVictoryFanfare();
    this.particles.triggerVictoryCelebration([
      this.theme.paintCss,
      '#ffffff',
      '#ffd700',
      '#00e5ff'
    ]);

    // Calcula estrelas (1 a 3)
    const stars = this.calculateStars();

    // Grava no Leaderboard
    this.leaderboard.recordLevelComplete(this.currentLevel, this.moves, stars);

    if (this.onVictoryCallback) {
      this.onVictoryCallback({
        level: this.currentLevel,
        moves: this.moves,
        stars,
        theme: this.theme
      });
    }
  }

  calculateStars() {
    // Estimativa de par para o número de jogadas
    const parMoves = Math.max(4, Math.floor(this.totalFloorCount / 3.2));
    if (this.moves <= parMoves) return 3;
    if (this.moves <= parMoves * 1.5) return 2;
    return 1;
  }

  restartLevel() {
    this.loadLevel(this.currentLevel);
  }

  nextLevel() {
    this.loadLevel(this.currentLevel + 1);
  }

  notifyState() {
    if (this.onStateChange) {
      const percent = this.totalFloorCount > 0 
        ? Math.min(100, Math.round((this.paintedCount / this.totalFloorCount) * 100))
        : 0;

      this.onStateChange({
        level: this.currentLevel,
        moves: this.moves,
        paintedCount: this.paintedCount,
        totalFloorCount: this.totalFloorCount,
        percent,
        theme: this.theme,
        isVictory: this.isVictory
      });
    }
  }
}
