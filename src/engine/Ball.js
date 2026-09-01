// Ball.js - Entidade da Bola de Metal Cromada com Física de Rolagem e Squash & Stretch
import * as THREE from 'three';

export class Ball {
  constructor(radius = 0.42) {
    this.radius = radius;
    this.mesh = null;
    this.innerMesh = null;
    this.gridPosition = { r: 0, c: 0 };
    this.targetWorldPos = new THREE.Vector3();
    this.currentWorldPos = new THREE.Vector3();
    this.isMoving = false;
    
    // Squash & Stretch
    this.squashVector = new THREE.Vector3(1, 1, 1);
    this.squashVelocity = new THREE.Vector3(0, 0, 0);

    this.createMesh();
  }

  createMesh() {
    const group = new THREE.Group();

    // Geometria da bola com alta resolução
    const geometry = new THREE.SphereGeometry(this.radius, 32, 32);

    // Material metálico cromado ultra-brilhante
    const material = new THREE.MeshStandardMaterial({
      color: 0xe6eef8,
      metalness: 0.92,
      roughness: 0.12,
      envMapIntensity: 1.5
    });

    this.innerMesh = new THREE.Mesh(geometry, material);
    this.innerMesh.castShadow = true;
    this.innerMesh.receiveShadow = false;
    this.innerMesh.position.y = this.radius;

    // Sombra projetada suave abaixo da bola
    const shadowGeo = new THREE.CircleGeometry(this.radius * 0.9, 24);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.35
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = 0.02;

    group.add(shadowMesh);
    group.add(this.innerMesh);

    this.mesh = group;
  }

  setGridPosition(r, c, cellSize = 1, offsetX = 0, offsetZ = 0) {
    this.gridPosition = { r, c };
    const x = c * cellSize + offsetX;
    const z = r * cellSize + offsetZ;
    this.currentWorldPos.set(x, 0, z);
    this.targetWorldPos.copy(this.currentWorldPos);
    this.mesh.position.copy(this.currentWorldPos);
  }

  /**
   * Aplica efeito de impacto elástico (squash & stretch) na colisão com a parede
   */
  triggerWallImpact(dirVector) {
    // Se bateu na direção Z (cima/baixo), achata em Z e expande em X/Y
    if (Math.abs(dirVector.z) > 0.5) {
      this.squashVector.set(1.22, 1.15, 0.72);
    } else if (Math.abs(dirVector.x) > 0.5) {
      this.squashVector.set(0.72, 1.15, 1.22);
    }
  }

  /**
   * Atualiza a rotação física e animação de squash a cada frame
   */
  update(delta, moveDelta) {
    // Rotação da bola conforme se desloca no chão
    if (moveDelta && moveDelta.lengthSq() > 0.00001) {
      const distance = moveDelta.length();
      const angle = distance / this.radius;
      
      // Eixo de rotação perpendicular à direção de movimento
      const moveDir = moveDelta.clone().normalize();
      const rotationAxis = new THREE.Vector3(moveDir.z, 0, -moveDir.x).normalize();
      
      this.innerMesh.rotateOnWorldAxis(rotationAxis, angle);
    }

    // Animação suave de retorno elástico do Squash & Stretch
    this.squashVector.x += (1.0 - this.squashVector.x) * Math.min(1.0, delta * 18);
    this.squashVector.y += (1.0 - this.squashVector.y) * Math.min(1.0, delta * 18);
    this.squashVector.z += (1.0 - this.squashVector.z) * Math.min(1.0, delta * 18);

    this.innerMesh.scale.copy(this.squashVector);
  }
}
