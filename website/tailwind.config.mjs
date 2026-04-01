/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          dark:   '#040E06',
          darker: '#020A04',
          card:   '#061108',
          light:  '#F0F8F2',
        },
        accent: {
          primary: '#C9A84C',   // Gold
          light:   '#E8C87A',   // Light gold
          warm:    '#F0F8F2',
        },
        brg: {
          DEFAULT: '#004225',   // British Racing Green
          mid:     '#005A30',
          light:   '#007A40',
        },
        text: {
          muted: '#8BAA90',
          dark:  '#040E06',
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
