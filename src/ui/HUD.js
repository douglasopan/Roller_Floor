// HUD.js - Interface de Usuário moderna, Glassmorphism, Modais e Controle de Eventos
export class HUD {
  constructor({ onRestart, onNextLevel, onToggleAudio, onOpenLeaderboard, onSelectDirection }) {
    this.onRestart = onRestart;
    this.onNextLevel = onNextLevel;
    this.onToggleAudio = onToggleAudio;
    this.onOpenLeaderboard = onOpenLeaderboard;
    this.onSelectDirection = onSelectDirection;

    // Elementos DOM
    this.levelBadge = document.getElementById('hud-level-badge');
    this.movesCount = document.getElementById('hud-moves-count');
    this.percentText = document.getElementById('hud-percent-text');
    this.progressBarFill = document.getElementById('hud-progress-fill');
    this.audioBtn = document.getElementById('btn-audio-toggle');
    this.restartBtn = document.getElementById('btn-restart');
    this.leaderboardBtn = document.getElementById('btn-leaderboard');
    this.infoBtn = document.getElementById('btn-info');

    // Modais
    this.victoryModal = document.getElementById('modal-victory');
    this.victoryStars = document.getElementById('victory-stars');
    this.victoryLevel = document.getElementById('victory-level');
    this.victoryMoves = document.getElementById('victory-moves');
    this.btnNextLevel = document.getElementById('btn-next-level');

    this.leaderboardModal = document.getElementById('modal-leaderboard');
    this.leaderboardList = document.getElementById('leaderboard-list');
    this.playerNameInput = document.getElementById('player-name-input');
    this.avatarPicker = document.getElementById('avatar-picker');
    this.btnCloseLeaderboard = document.getElementById('btn-close-leaderboard');

    this.infoModal = document.getElementById('modal-info');
    this.btnCloseInfo = document.getElementById('btn-close-info');

    this.initEvents();
  }

  initEvents() {
    this.restartBtn.addEventListener('click', () => this.onRestart());
    this.audioBtn.addEventListener('click', () => this.onToggleAudio());
    this.leaderboardBtn.addEventListener('click', () => this.onOpenLeaderboard());
    this.infoBtn.addEventListener('click', () => this.toggleInfoModal(true));
    this.btnCloseInfo.addEventListener('click', () => this.toggleInfoModal(false));
    this.btnCloseLeaderboard.addEventListener('click', () => this.toggleLeaderboardModal(false));
    this.btnNextLevel.addEventListener('click', () => {
      this.toggleVictoryModal(false);
      this.onNextLevel();
    });

    // D-Pad virtual (opcional para acessibilidade)
    const dpadButtons = document.querySelectorAll('.dpad-btn');
    dpadButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dir = btn.dataset.dir;
        if (dir && this.onSelectDirection) {
          this.onSelectDirection(dir);
        }
      });
    });
  }

  updateState(state) {
    if (this.levelBadge) {
      this.levelBadge.textContent = `NÍVEL ${state.level}`;
    }
    if (this.movesCount) {
      this.movesCount.textContent = `${state.moves}`;
    }
    if (this.percentText) {
      this.percentText.textContent = `${state.percent}%`;
    }
    if (this.progressBarFill) {
      this.progressBarFill.style.width = `${state.percent}%`;
      if (state.theme) {
        this.progressBarFill.style.backgroundColor = state.theme.paintCss;
        this.progressBarFill.style.boxShadow = `0 0 12px ${state.theme.paintGlow}`;
      }
    }
  }

  updateAudioButton(isMuted) {
    if (this.audioBtn) {
      this.audioBtn.innerHTML = isMuted
        ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>'
        : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
    }
  }

  showVictory({ level, moves, stars, theme }) {
    this.victoryLevel.textContent = `Nível ${level} Completo!`;
    this.victoryMoves.textContent = `${moves} movimentos`;

    // Renderiza estrelas animadas
    this.victoryStars.innerHTML = '';
    for (let i = 1; i <= 3; i++) {
      const star = document.createElement('span');
      star.className = `star-icon ${i <= stars ? 'active' : 'inactive'}`;
      star.textContent = '★';
      this.victoryStars.appendChild(star);
    }

    if (this.btnNextLevel && theme) {
      this.btnNextLevel.style.backgroundColor = theme.paintCss;
      this.btnNextLevel.style.boxShadow = `0 4px 20px ${theme.paintGlow}`;
    }

    this.toggleVictoryModal(true);
  }

  toggleVictoryModal(show) {
    if (this.victoryModal) {
      this.victoryModal.classList.toggle('active', show);
    }
  }

  toggleLeaderboardModal(show) {
    if (this.leaderboardModal) {
      this.leaderboardModal.classList.toggle('active', show);
    }
  }

  toggleInfoModal(show) {
    if (this.infoModal) {
      this.infoModal.classList.toggle('active', show);
    }
  }

  renderLeaderboard(leaderboardManager) {
    const scores = leaderboardManager.getTopScores();
    const profile = leaderboardManager.profile;
    const avatars = leaderboardManager.getAvatars();

    // Atualiza campo de nome
    if (this.playerNameInput) {
      this.playerNameInput.value = profile.name;
      this.playerNameInput.onchange = () => {
        profile.name = this.playerNameInput.value.trim() || 'Jogador';
        leaderboardManager.saveProfile(profile);
        this.renderLeaderboard(leaderboardManager);
      };
    }

    // Atualiza seletor de avatares
    if (this.avatarPicker) {
      this.avatarPicker.innerHTML = '';
      avatars.forEach(av => {
        const btn = document.createElement('button');
        btn.className = `avatar-choice-btn ${profile.avatar === av ? 'selected' : ''}`;
        btn.textContent = av;
        btn.onclick = () => {
          profile.avatar = av;
          leaderboardManager.saveProfile(profile);
          this.renderLeaderboard(leaderboardManager);
        };
        this.avatarPicker.appendChild(btn);
      });
    }

    // Renderiza tabela
    if (this.leaderboardList) {
      this.leaderboardList.innerHTML = '';

      scores.forEach(item => {
        const row = document.createElement('div');
        row.className = `leaderboard-item ${item.isCurrentPlayer ? 'is-player' : ''}`;

        const rankBadge = item.rank === 1 ? '🥇' : item.rank === 2 ? '🥈' : item.rank === 3 ? '🥉' : `#${item.rank}`;

        row.innerHTML = `
          <div class="lb-rank">${rankBadge}</div>
          <div class="lb-avatar">${item.avatar || '⚡'}</div>
          <div class="lb-info">
            <div class="lb-name">${item.name} ${item.isCurrentPlayer ? '<span class="lb-you-tag">VOCÊ</span>' : ''}</div>
            <div class="lb-stats">Nível ${item.level} • ${item.moves || 0} mov.</div>
          </div>
          <div class="lb-stars">★ ${item.stars || 0}</div>
        `;
        this.leaderboardList.appendChild(row);
      });
    }
  }
}
