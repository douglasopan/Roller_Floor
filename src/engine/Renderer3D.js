// Renderer3D.js - Configuração do Three.js (Câmera Isométrica, Iluminação e Efeito de Câmera Shake)
import * as THREE from 'three';

export class Renderer3D {
  constructor(canvasContainer) {
    this.container = canvasContainer;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.ballLight = null;
    this.dirLight = null;
    this.ambientLight = null;
    
    // Câmera Shake
    this.shakeIntensity = 0;
    this.shakeDecay = 8.0;
    this.cameraBasePos = new THREE.Vector3();
    this.cameraTarget = new THREE.Vector3(0, 0, 0);

    this.init();
  }

  init() {
    this.scene = new THREE.Scene();

    // Configuração do Renderizador WebGL
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.container.appendChild(this.renderer.domElement);

    // Câmera Isométrica / Ortográfica
    this.setupCamera();

    // Iluminação
    this.setupLighting();

    // Evento de redimensionamento
    window.addEventListener('resize', () => this.onWindowResize());
  }

  setupCamera() {
    const aspect = this.container.clientWidth / this.container.clientHeight;
    const frustumSize = 10;

    this.camera = new THREE.OrthographicCamera(
      (-frustumSize * aspect) / 2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      100
    );

    // Ângulo Isométrico clássico (estilo Roller Splat)
    // Câmera inclinada a ~55 graus de cima para baixo
    this.cameraBasePos.set(0, 15, 12);
    this.camera.position.copy(this.cameraBasePos);
    this.camera.lookAt(0, 0, 0);
  }

  setupLighting() {
    // Luz ambiente suave
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    this.scene.add(this.ambientLight);

    // Luz direcional principal para sombras e relevo
    this.dirLight = new THREE.DirectionalLight(0xffffff, 1.3);
    this.dirLight.position.set(10, 20, 12);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 1024;
    this.dirLight.shadow.mapSize.height = 1024;
    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 40;
    this.dirLight.shadow.camera.left = -12;
    this.dirLight.shadow.camera.right = 12;
    this.dirLight.shadow.camera.top = 12;
    this.dirLight.shadow.camera.bottom = -12;
    this.dirLight.shadow.bias = -0.001;
    this.scene.add(this.dirLight);

    // Luz secundária para preenchimento de cor
    const fillLight = new THREE.DirectionalLight(0x88bbff, 0.4);
    fillLight.position.set(-10, 15, -8);
    this.scene.add(fillLight);

    // Ponto de luz que acompanha a bola de metal para realçar o brilho
    this.ballLight = new THREE.PointLight(0xffffff, 0.8, 6);
    this.ballLight.position.set(0, 1.5, 0);
    this.scene.add(this.ballLight);
  }

  setTheme(theme) {
    if (this.scene) {
      this.scene.background = new THREE.Color(theme.bgGradient[0]);
    }
  }

  fitToGrid(rows, cols) {
    const aspect = this.container.clientWidth / this.container.clientHeight;
    const maxDim = Math.max(rows, cols);
    
    // Adiciona margem agradável ao redor do labirinto
    const padding = 2.4;
    const neededWidth = (cols + padding);
    const neededHeight = (rows + padding) * 1.25;

    let frustumSize;
    if (aspect < 1.0) {
      // Dispositivo Mobile / Retrato: calcula baseado na largura
      frustumSize = Math.max(neededHeight, neededWidth / aspect);
    } else {
      // Desktop / Paisagem
      frustumSize = Math.max(neededHeight, neededWidth / aspect);
    }

    this.camera.left = (-frustumSize * aspect) / 2;
    this.camera.right = (frustumSize * aspect) / 2;
    this.camera.top = frustumSize / 2;
    this.camera.bottom = -frustumSize / 2;
    this.camera.updateProjectionMatrix();

    // Recalcula sombras
    if (this.dirLight) {
      const d = frustumSize / 1.5;
      this.dirLight.shadow.camera.left = -d;
      this.dirLight.shadow.camera.right = d;
      this.dirLight.shadow.camera.top = d;
      this.dirLight.shadow.camera.bottom = -d;
      this.dirLight.shadow.camera.updateProjectionMatrix();
    }
  }

  triggerCameraShake(intensity = 0.15) {
    this.shakeIntensity = intensity;
  }

  update(delta, ballPos) {
    // Atualiza luz da bola
    if (ballPos && this.ballLight) {
      this.ballLight.position.set(ballPos.x, 1.2, ballPos.z);
    }

    // Aplica Camera Shake
    if (this.shakeIntensity > 0.001) {
      const offsetX = (Math.random() - 0.5) * this.shakeIntensity;
      const offsetZ = (Math.random() - 0.5) * this.shakeIntensity;
      this.camera.position.set(
        this.cameraBasePos.x + offsetX,
        this.cameraBasePos.y,
        this.cameraBasePos.z + offsetZ
      );
      this.shakeIntensity -= this.shakeDecay * delta * this.shakeIntensity;
    } else {
      this.camera.position.copy(this.cameraBasePos);
      this.shakeIntensity = 0;
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    const aspect = width / height;

    const frustumHeight = this.camera.top - this.camera.bottom;
    this.camera.left = (-frustumHeight * aspect) / 2;
    this.camera.right = (frustumHeight * aspect) / 2;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}
