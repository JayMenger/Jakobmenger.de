/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          dark:   '#060D07',
          darker: '#040808',
          card:   '#0D1810',
          light:  '#F0F8F2',
        },
        accent: {
          primary: '#C9A84C',   // Gold
          light:   '#E8C87A',   // Light gold
          warm:    '#FFF8E7',
        },
        brg: {
          DEFAULT: '#0B4F28',   // British Racing Green
          mid:     '#0F6B35',
          light:   '#178C4A',
        },
        text: {
          muted: '#7A9B82',
          dark:  '#060D07',
        },
      },
      fontFamily: {
        headline: ['"Bebas Neue"', 'sans-serif'],
        body:     ['"Outfit"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        shimmer:      'shimmer 2.5s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 20px rgba(201, 168, 76, 0.4)' },
          '50%':      { textShadow: '0 0 60px rgba(201, 168, 76, 0.8), 0 0 100px rgba(201, 168, 76, 0.4)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },
    },
  },
  plugins: [],
};
