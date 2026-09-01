// Themes.js - Paletas de cores vibrantes e modernas para cada nível
export const COLOR_THEMES = [
  {
    id: 'neon-coral',
    name: 'Neon Coral',
    paintColor: 0xff3366,
    paintCss: '#ff3366',
    paintGlow: 'rgba(255, 51, 102, 0.4)',
    wallColor: 0x1e2238,
    wallTopColor: 0x2b3152,
    unpaintedFloor: 0xf1f3f9,
    bgGradient: ['#141727', '#0d0e19']
  },
  {
    id: 'cyber-cyan',
    name: 'Cyber Cyan',
    paintColor: 0x00e5ff,
    paintCss: '#00e5ff',
    paintGlow: 'rgba(0, 229, 255, 0.4)',
    wallColor: 0x162436,
    wallTopColor: 0x213752,
    unpaintedFloor: 0xf0f5fa,
    bgGradient: ['#0f172a', '#080d19']
  },
  {
    id: 'electric-violet',
    name: 'Electric Violet',
    paintColor: 0x9d4edd,
    paintCss: '#9d4edd',
    paintGlow: 'rgba(157, 78, 221, 0.4)',
    wallColor: 0x221a36,
    wallTopColor: 0x352854,
    unpaintedFloor: 0xf5f2fb,
    bgGradient: ['#191228', '#0e0a17']
  },
  {
    id: 'lime-splash',
    name: 'Lime Splash',
    paintColor: 0x10b981,
    paintCss: '#10b981',
    paintGlow: 'rgba(16, 185, 129, 0.4)',
    wallColor: 0x192b23,
    wallTopColor: 0x264236,
    unpaintedFloor: 0xf0fdf4,
    bgGradient: ['#0f2017', '#08130e']
  },
  {
    id: 'mango-burst',
    name: 'Mango Burst',
    paintColor: 0xff9f1c,
    paintCss: '#ff9f1c',
    paintGlow: 'rgba(255, 159, 28, 0.4)',
    wallColor: 0x2e2316,
    wallTopColor: 0x483623,
    unpaintedFloor: 0xfffcf7,
    bgGradient: ['#21160b', '#130d06']
  },
  {
    id: 'bubblegum-pink',
    name: 'Bubblegum Pink',
    paintColor: 0xf72585,
    paintCss: '#f72585',
    paintGlow: 'rgba(247, 37, 133, 0.4)',
    wallColor: 0x2d172e,
    wallTopColor: 0x452346,
    unpaintedFloor: 0xfdf2f8,
    bgGradient: ['#1f0d20', '#120713']
  },
  {
    id: 'royal-azure',
    name: 'Royal Azure',
    paintColor: 0x3a86ff,
    paintCss: '#3a86ff',
    paintGlow: 'rgba(58, 134, 255, 0.4)',
    wallColor: 0x17223b,
    wallTopColor: 0x24355c,
    unpaintedFloor: 0xf1f6fe,
    bgGradient: ['#0e172e', '#070c1b']
  },
  {
    id: 'sunset-amber',
    name: 'Sunset Amber',
    paintColor: 0xff5400,
    paintCss: '#ff5400',
    paintGlow: 'rgba(255, 84, 0, 0.4)',
    wallColor: 0x2c1b17,
    wallTopColor: 0x462b25,
    unpaintedFloor: 0xfff5f2,
    bgGradient: ['#1d100d', '#100806']
  }
];

export function getThemeForLevel(levelNumber) {
  const index = (levelNumber - 1) % COLOR_THEMES.length;
  return COLOR_THEMES[index];
}
