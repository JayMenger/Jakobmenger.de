/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          dark:   '#050C18',   // deep navy-black
          darker: '#030810',
          card:   '#0C1629',   // dark navy card
          light:  '#EEF2FF',   // light blue-tinted
        },
        accent: {
          primary: '#C9A84C',   // Gold
          light:   '#E8C87A',   // Light gold
          warm:    '#FFF8E7',
        },
        navy: {
          DEFAULT: '#081F5B',   // Deep navy (brand color)
          mid:     '#1A3A7A',
          light:   '#2563EB',
        },
        text: {
          muted: '#7A92B5',
          dark:  '#050C18',
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
        float:        'float 6s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
};
