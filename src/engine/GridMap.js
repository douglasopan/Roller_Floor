// GridMap.js - Malha 3D do labirinto (Pisos pintáveis, Paredes estilizadas e Animação de Pintura)
import * as THREE from 'three';

export class GridMap {
  constructor(cellSize = 1.0) {
    this.cellSize = cellSize;
    this.group = new THREE.Group();
    this.floorTiles = new Map(); // key "r,c" -> { mesh, isPainted, popScale, initialY }
    this.wallMeshes = [];
    this.levelData = null;
    this.theme = null;
    this.offsetX = 0;
    this.offsetZ = 0;
  }

  build(levelData, theme) {
    this.clear();
    this.levelData = levelData;
    this.theme = theme;

    const rows = levelData.rows;
    const cols = levelData.cols;

    // Centraliza o labirinto na origem (0, 0, 0)
    this.offsetX = -((cols - 1) * this.cellSize) / 2;
    this.offsetZ = -((rows - 1) * this.cellSize) / 2;

    // Geometria das paredes com chanfro estilizado
    const wallGeo = new THREE.BoxGeometry(this.cellSize * 0.98, 0.75, this.cellSize * 0.98);
    const wallTopGeo = new THREE.BoxGeometry(this.cellSize * 0.88, 0.1, this.cellSize * 0.88);

    const wallMaterial = new THREE.MeshStandardMaterial({
      color: theme.wallColor,
      roughness: 0.5,
      metalness: 0.2
    });

    const wallTopMaterial = new THREE.MeshStandardMaterial({
      color: theme.wallTopColor,
      roughness: 0.3,
      metalness: 0.3
    });

    // Geometria dos pisos com pequenas ranhuras
    const floorGeo = new THREE.BoxGeometry(this.cellSize * 0.94, 0.2, this.cellSize * 0.94);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * this.cellSize + this.offsetX;
        const z = r * this.cellSize + this.offsetZ;
        const isWall = levelData.grid[r][c] === 1;

        if (isWall) {
          // Parede 3D
          const wallGroup = new THREE.Group();
          
          const wallMesh = new THREE.Mesh(wallGeo, wallMaterial);
          wallMesh.position.set(x, 0.375, z);
          wallMesh.castShadow = true;
          wallMesh.receiveShadow = true;
          
          const wallTop = new THREE.Mesh(wallTopGeo, wallTopMaterial);
          wallTop.position.set(x, 0.75, z);
          
          wallGroup.add(wallMesh);
          wallGroup.add(wallTop);
          
          this.group.add(wallGroup);
          this.wallMeshes.push(wallGroup);
        } else {
          // Piso pintável
          const floorMat = new THREE.MeshStandardMaterial({
            color: theme.unpaintedFloor,
            roughness: 0.6,
            metalness: 0.05
          });

          const floorMesh = new THREE.Mesh(floorGeo, floorMat);
          floorMesh.position.set(x, -0.1, z);
          floorMesh.receiveShadow = true;
          floorMesh.castShadow = false;

          this.group.add(floorMesh);

          this.floorTiles.set(`${r},${c}`, {
            r,
            c,
            mesh: floorMesh,
            material: floorMat,
            isPainted: false,
            popScale: 1.0,
            paintProgress: 0,
            x,
            z
          });
        }
      }
    }

    // Base de apoio sob o tabuleiro
    const baseGeo = new THREE.BoxGeometry(
      cols * this.cellSize + 0.5,
      0.3,
      rows * this.cellSize + 0.5
    );
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0b0d14,
      roughness: 0.9
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.set(0, -0.25, 0);
    this.group.add(baseMesh);

    return this.group;
  }

  paintTile(r, c) {
    const key = `${r},${c}`;
    const tile = this.floorTiles.get(key);
    if (!tile) return false;

    const wasPainted = tile.isPainted;
    if (!tile.isPainted) {
      tile.isPainted = true;
      tile.popScale = 1.16; // Efeito de pop ao pintar
      tile.material.color.setHex(this.theme.paintColor);
      tile.material.roughness = 0.2; // Brilho molhado de tinta fresca
      tile.material.metalness = 0.15;
    }
    return !wasPainted;
  }

  getTileWorldPos(r, c) {
    const x = c * this.cellSize + this.offsetX;
    const z = r * this.cellSize + this.offsetZ;
    return new THREE.Vector3(x, 0, z);
  }

  isWall(r, c) {
    if (!this.levelData) return true;
    if (r < 0 || r >= this.levelData.rows || c < 0 || c >= this.levelData.cols) {
      return true;
    }
    return this.levelData.grid[r][c] === 1;
  }

  update(delta) {
    // Animação de pop e retorno elástico dos pisos pintados
    for (const tile of this.floorTiles.values()) {
      if (tile.popScale > 1.0) {
        tile.popScale += (1.0 - tile.popScale) * Math.min(1.0, delta * 14);
        tile.mesh.scale.set(tile.popScale, tile.popScale, tile.popScale);
      }
    }
  }

  clear() {
    while (this.group.children.length > 0) {
      const obj = this.group.children[0];
      this.group.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    }
    this.floorTiles.clear();
    this.wallMeshes = [];
  }
}
