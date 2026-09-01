// AudioManager.js - Sintetizador de áudio procedural via Web Audio API (Zero arquivos externos)
export class AudioManager {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('roller_floor_muted') === 'true';
    this.rollingOsc = null;
    this.rollingGain = null;
    this.isRolling = false;
    this.currentPaintTone = 0;
    this.lastPaintTime = 0;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    } catch (e) {
      console.warn('Web Audio API não suportada neste navegador', e);
    }
  }

  ensureContext() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('roller_floor_muted', this.isMuted ? 'true' : 'false');
    if (this.isMuted) {
      this.stopRollingSound();
    }
    return this.isMuted;
  }

  playUiClick() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playTilePaint(progressPercent = 0) {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = Date.now();
    if (now - this.lastPaintTime > 600) {
      this.currentPaintTone = 0;
    }
    this.lastPaintTime = now;

    // Escala pentatônica brilhante subindo conforme pinta
    const baseFreqs = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00];
    const freqIdx = Math.min(
      Math.floor(progressPercent * baseFreqs.length),
      baseFreqs.length - 1
    );
    const freq = baseFreqs[freqIdx] || 440;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq * 1.5, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq, this.ctx.currentTime + 0.08);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2500, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.16, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.09);
  }

  playWallHit() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    // Impacto metálico satisfatório
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  startRollingSound() {
    if (this.isMuted || this.isRolling) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      this.isRolling = true;
      this.rollingOsc = this.ctx.createOscillator();
      this.rollingGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      this.rollingOsc.type = 'triangle';
      this.rollingOsc.frequency.setValueAtTime(95, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      this.rollingGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.rollingGain.gain.linearRampToValueAtTime(0.1, this.ctx.currentTime + 0.05);

      this.rollingOsc.connect(filter);
      filter.connect(this.rollingGain);
      this.rollingGain.connect(this.ctx.destination);

      this.rollingOsc.start();
    } catch (e) {
      // safe fallback
    }
  }

  stopRollingSound() {
    if (!this.isRolling) return;
    this.isRolling = false;
    if (this.rollingGain && this.ctx) {
      try {
        this.rollingGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
        setTimeout(() => {
          if (this.rollingOsc) {
            try { this.rollingOsc.stop(); } catch (e) {}
            this.rollingOsc.disconnect();
            this.rollingOsc = null;
          }
        }, 60);
      } catch (e) {
        this.rollingOsc = null;
      }
    }
  }

  playVictoryFanfare() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [
      { f: 523.25, d: 0.1, delay: 0 },      // C5
      { f: 659.25, d: 0.1, delay: 0.1 },    // E5
      { f: 783.99, d: 0.12, delay: 0.2 },   // G5
      { f: 1046.50, d: 0.45, delay: 0.32 }  // C6 (Triumph)
    ];

    notes.forEach(n => {
      setTimeout(() => {
        if (!this.ctx || this.isMuted) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + n.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + n.d);
      }, n.delay * 1000);
    });
  }
}
