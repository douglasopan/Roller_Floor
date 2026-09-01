// main.js - Inicialização principal do Roller Floor 3D
import { Renderer3D } from './engine/Renderer3D.js';
import { Ball } from './engine/Ball.js';
import { GridMap } from './engine/GridMap.js';
import { ParticleSystem } from './engine/Particles.js';
import { AudioManager } from './engine/AudioManager.js';
import { LeaderboardManager } from './ui/Leaderboard.js';
import { HUD } from './ui/HUD.js';
import { InputManager } from './game/InputManager.js';
import { GameController } from './game/GameController.js';

window.addEventListener('DOMContentLoaded', () => {
  const canvasContainer = document.getElementById('canvas-container');
  const tutorialHint = document.getElementById('tutorial-hint');

  // Inicializa Subsistemas de Engine
  const renderer = new Renderer3D(canvasContainer);
  const ball = new Ball(0.44);
  const gridMap = new GridMap(1.0);
  const particles = new ParticleSystem();
  const audio = new AudioManager();
  const leaderboard = new LeaderboardManager();

  // Adiciona malhas à cena Three.js
  renderer.scene.add(gridMap.group);
  renderer.scene.add(ball.mesh);
  renderer.scene.add(particles.group);

  // Inicializa HUD
  let gameController = null;

  const hud = new HUD({
    onRestart: () => {
      audio.playUiClick();
      if (gameController) gameController.restartLevel();
    },
    onNextLevel: () => {
      audio.playUiClick();
      if (gameController) gameController.nextLevel();
    },
    onToggleAudio: () => {
      const isMuted = audio.toggleMute();
      hud.updateAudioButton(isMuted);
    },
    onOpenLeaderboard: () => {
      audio.playUiClick();
      hud.renderLeaderboard(leaderboard);
      hud.toggleLeaderboardModal(true);
    },
    onSelectDirection: (dir) => {
      if (gameController) gameController.handleInput(dir);
    }
  });

  hud.updateAudioButton(audio.isMuted);

  // Inicializa GameController
  gameController = new GameController({
    renderer,
    ball,
    gridMap,
    particles,
    audio,
    leaderboard,
    onStateChange: (state) => {
      hud.updateState(state);
      if (state.level > 1 && tutorialHint) {
        tutorialHint.style.display = 'none';
      }
    }
  });

  gameController.onVictoryCallback = (victoryData) => {
    hud.showVictory(victoryData);
  };

  // Inicializa InputManager
  new InputManager(canvasContainer, (direction) => {
    audio.ensureContext();
    gameController.handleInput(direction);
  });

  // Carrega nível inicial
  const savedLevel = leaderboard.profile.highestLevel || 1;
  gameController.loadLevel(savedLevel);

  // Game Loop com Delta Time
  let lastTime = performance.now();

  function animate(currentTime) {
    requestAnimationFrame(animate);

    const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
    lastTime = currentTime;

    // Atualiza física e lógica
    gameController.update(delta);
    gridMap.update(delta);
    particles.update(delta);
    renderer.update(delta, ball.mesh.position);

    // Renderiza cena Three.js
    renderer.render();
  }

  requestAnimationFrame(animate);
});
