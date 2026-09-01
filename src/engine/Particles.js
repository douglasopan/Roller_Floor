// Particles.js - Sistema de partículas 3D para respingos de tinta, faíscas de impacto e confetes
import * as THREE from 'three';
import confetti from 'canvas-confetti';

export class ParticleSystem {
  constructor() {
    this.group = new THREE.Group();
    this.particles = [];
  }

  /**
   * Respingos de tinta ao passar por um novo bloco
   */
  emitPaintSplatter(position, colorHex, count = 10) {
    const geo = new THREE.SphereGeometry(0.06, 8, 8);
    const mat = new THREE.MeshBasicMaterial({ color: colorHex });

    for (let i = 0; i < count; i++) {
      const p = new THREE.Mesh(geo, mat);
      p.position.copy(position);
      p.position.y += 0.05;

      const angle = Math.random() * Math.PI * 2;
      const speed = 0.8 + Math.random() * 1.6;
      const vx = Math.cos(angle) * speed;
      const vz = Math.sin(angle) * speed;
      const vy = 1.2 + Math.random() * 2.0;

      this.group.add(p);
      this.particles.push({
        mesh: p,
        velocity: new THREE.Vector3(vx, vy, vz),
        gravity: 9.8,
        life: 1.0,
        decay: 2.2 + Math.random() * 1.5,
        scale: 1.0
      });
    }
  }

  /**
   * Faíscas / poeira de impacto ao colidir com a parede
   */
  emitWallImpactSparks(position, normalDir, count = 12) {
    const geo = new THREE.BoxGeometry(0.05, 0.05, 0.05);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < count; i++) {
      const p = new THREE.Mesh(geo, mat);
      p.position.copy(position);

      // Espalha na direção oposta ao impacto
      const spreadX = (Math.random() - 0.5) * 2;
      const spreadZ = (Math.random() - 0.5) * 2;
      const vx = -normalDir.x * 2.5 + spreadX;
      const vz = -normalDir.z * 2.5 + spreadZ;
      const vy = 1.5 + Math.random() * 2.2;

      this.group.add(p);
      this.particles.push({
        mesh: p,
        velocity: new THREE.Vector3(vx, vy, vz),
        gravity: 12.0,
        life: 1.0,
        decay: 3.5,
        scale: 1.0
      });
    }
  }

  /**
   * Celebração de vitória com explosão de confetes na tela
   */
  triggerVictoryCelebration(colors = ['#ff3366', '#00e5ff', '#ff9f1c', '#10b981', '#ffffff']) {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  update(delta) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= p.decay * delta;

      if (p.life <= 0) {
        this.group.remove(p.mesh);
        if (p.mesh.geometry) p.mesh.geometry.dispose();
        if (p.mesh.material) p.mesh.material.dispose();
        this.particles.splice(i, 1);
        continue;
      }

      // Aplica velocidade e gravidade
      p.velocity.y -= p.gravity * delta;
      p.mesh.position.addScaledVector(p.velocity, delta);

      // Se bater no chão, para de cair
      if (p.mesh.position.y < 0.05) {
        p.mesh.position.y = 0.05;
        p.velocity.x *= 0.5;
        p.velocity.z *= 0.5;
      }

      // Diminui escala suavemente
      const scale = Math.max(0.001, p.life);
      p.mesh.scale.set(scale, scale, scale);
    }
  }

  clear() {
    for (const p of this.particles) {
      this.group.remove(p.mesh);
      if (p.mesh.geometry) p.mesh.geometry.dispose();
      if (p.mesh.material) p.mesh.material.dispose();
    }
    this.particles = [];
  }
}
