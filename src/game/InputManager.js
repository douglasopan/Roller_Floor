// InputManager.js - Processador de gestos Touch/Swipe, Teclado e Mouse com Input Buffering
export class InputManager {
  constructor(targetElement, onDirectionCallback) {
    this.targetElement = targetElement;
    this.onDirection = onDirectionCallback;
    this.startX = 0;
    this.startY = 0;
    this.isPointerDown = false;
    this.minSwipeDistance = 24; // Sensibilidade ideal em pixels
    this.hasSwiped = false;
    this.isEnabled = true;

    this.init();
  }

  init() {
    // Teclado (Desktop)
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));

    // Pointer Events unificados (Touch e Mouse)
    this.targetElement.addEventListener('pointerdown', (e) => this.handlePointerDown(e), { passive: false });
    window.addEventListener('pointermove', (e) => this.handlePointerMove(e), { passive: false });
    window.addEventListener('pointerup', (e) => this.handlePointerUp(e));
    window.addEventListener('pointercancel', (e) => this.handlePointerUp(e));

    // Previne scroll acidental da página no mobile
    this.targetElement.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    this.targetElement.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
  }

  setEnabled(enabled) {
    this.isEnabled = enabled;
  }

  handleKeyDown(e) {
    if (!this.isEnabled) return;

    let dir = null;
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        dir = 'UP';
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        dir = 'DOWN';
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        dir = 'LEFT';
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        dir = 'RIGHT';
        break;
    }

    if (dir) {
      e.preventDefault();
      this.onDirection(dir);
    }
  }

  handlePointerDown(e) {
    if (!this.isEnabled) return;
    this.isPointerDown = true;
    this.hasSwiped = false;
    this.startX = e.clientX;
    this.startY = e.clientY;
  }

  handlePointerMove(e) {
    if (!this.isPointerDown || this.hasSwiped || !this.isEnabled) return;

    const dx = e.clientX - this.startX;
    const dy = e.clientY - this.startY;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (absX >= this.minSwipeDistance || absY >= this.minSwipeDistance) {
      this.hasSwiped = true;
      e.preventDefault();

      if (absX > absY) {
        // Horizontal
        this.onDirection(dx > 0 ? 'RIGHT' : 'LEFT');
      } else {
        // Vertical
        this.onDirection(dy > 0 ? 'DOWN' : 'UP');
      }
    }
  }

  handlePointerUp(e) {
    this.isPointerDown = false;
    this.hasSwiped = false;
  }
}
