// Leaderboard.js - Gerenciador de Ranking, Perfis e Recordes
const STORAGE_KEY_PROFILE = 'roller_floor_profile';
const STORAGE_KEY_SCORES = 'roller_floor_leaderboard';

const DEFAULT_AVATARS = ['⚡', '🎨', '🚀', '⭐', '🔥', '👑', '💎', '🎮', '🐯', '🎯'];

const DEFAULT_GLOBAL_LEADERBOARD = [
  { rank: 1, name: 'SplatMaster_BR', avatar: '👑', level: 142, moves: 1240, stars: 420 },
  { rank: 2, name: 'NeonRoller', avatar: '⚡', level: 118, moves: 1090, stars: 350 },
  { rank: 3, name: 'PixelPainter', avatar: '🎨', level: 95, moves: 920, stars: 280 },
  { rank: 4, name: 'Speedy_99', avatar: '🚀', level: 84, moves: 810, stars: 245 },
  { rank: 5, name: 'CyberSphere', avatar: '💎', level: 72, moves: 750, stars: 210 },
  { rank: 6, name: 'AstroBall', avatar: '⭐', level: 65, moves: 690, stars: 190 },
  { rank: 7, name: 'Lucas_Games', avatar: '🎮', level: 54, moves: 580, stars: 160 },
  { rank: 8, name: 'MatrixRoller', avatar: '🔥', level: 43, moves: 460, stars: 125 },
  { rank: 9, name: 'MazeRunner', avatar: '🐯', level: 36, moves: 390, stars: 105 },
  { rank: 10, name: 'ColorSplash', avatar: '🎯', level: 28, moves: 310, stars: 80 }
];

export class LeaderboardManager {
  constructor() {
    this.profile = this.loadProfile();
    this.scores = this.loadScores();
  }

  loadProfile() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (data) return JSON.parse(data);
    } catch (e) {}

    // Perfil padrão
    const randomNum = Math.floor(100 + Math.random() * 900);
    const newProfile = {
      name: `Jogador_${randomNum}`,
      avatar: DEFAULT_AVATARS[Math.floor(Math.random() * DEFAULT_AVATARS.length)],
      highestLevel: 1,
      totalMoves: 0,
      totalStars: 0,
      levelsCompleted: 0
    };
    this.saveProfile(newProfile);
    return newProfile;
  }

  saveProfile(profile) {
    this.profile = profile;
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
  }

  loadScores() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_SCORES);
      if (data) return JSON.parse(data);
    } catch (e) {}

    localStorage.setItem(STORAGE_KEY_SCORES, JSON.stringify(DEFAULT_GLOBAL_LEADERBOARD));
    return [...DEFAULT_GLOBAL_LEADERBOARD];
  }

  saveScores(scores) {
    this.scores = scores;
    localStorage.setItem(STORAGE_KEY_SCORES, JSON.stringify(scores));
  }

  recordLevelComplete(levelNumber, moves, stars) {
    this.profile.totalMoves += moves;
    this.profile.totalStars += stars;
    this.profile.levelsCompleted += 1;
    if (levelNumber >= this.profile.highestLevel) {
      this.profile.highestLevel = levelNumber + 1;
    }
    this.saveProfile(this.profile);

    // Atualiza pontuação do jogador no Leaderboard
    this.syncPlayerScore();
  }

  syncPlayerScore() {
    let list = [...this.scores];
    
    // Remove registro antigo do jogador se houver
    list = list.filter(item => item.name !== this.profile.name);

    // Insere perfil atual
    list.push({
      name: this.profile.name,
      avatar: this.profile.avatar,
      level: this.profile.highestLevel,
      moves: this.profile.totalMoves,
      stars: this.profile.totalStars,
      isCurrentPlayer: true
    });

    // Ordena por nível decrescente e menor número de movimentos
    list.sort((a, b) => {
      if (b.level !== a.level) return b.level - a.level;
      return a.moves - b.moves;
    });

    // Atualiza ranks
    list.forEach((item, index) => {
      item.rank = index + 1;
    });

    this.saveScores(list);
  }

  getTopScores(limit = 15) {
    this.syncPlayerScore();
    return this.scores.slice(0, limit);
  }

  getPlayerRank() {
    this.syncPlayerScore();
    const found = this.scores.find(item => item.name === this.profile.name);
    return found ? found.rank : this.scores.length;
  }

  getAvatars() {
    return DEFAULT_AVATARS;
  }
}
