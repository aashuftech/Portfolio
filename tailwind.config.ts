import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#090A0F',
          light: '#FAFAFC',
        },
        surface: {
          DEFAULT: '#11131C',
          light: '#FFFFFF',
          elevated: '#171A26',
        },
        brand: {
          indigo: '#6366F1',
          cyan: '#06B6D4',
          emerald: '#10B981',
          violet: '#8B5CF6',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          highlight: 'rgba(99, 102, 241, 0.35)',
        },
      },
      fontFamily: {
        display: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        baumans: ['"Baumans"', 'cursive', 'sans-serif'],
        train: ['"Train One"', 'cursive', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        'glass-glow': '0 0 35px -5px rgba(99, 102, 241, 0.12)',
        'cyan-glow': '0 0 30px -5px rgba(6, 182, 212, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
