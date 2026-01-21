import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Фоны
        'dark-primary': '#0D0D1A',
        'dark-secondary': '#1A1A2E',
        'dark-card': '#16162A',
        'light-bg': '#F0F0F8',

        // Акценты
        'accent-purple': '#7C3AED',
        'accent-purple-light': '#A78BFA',
        'accent-cyan': '#22D3EE',
        'accent-pink': '#EC4899',

        // Текст
        'text-gray': '#9CA3AF',
        'text-muted': '#6B7280',
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        'glow-purple': '0 0 40px rgba(124, 58, 237, 0.4)',
        'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.3)',
        'glow-purple-sm': '0 0 20px rgba(124, 58, 237, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 12px 40px rgba(124, 58, 237, 0.15)',
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
        'gradient-hero': 'linear-gradient(180deg, #0D0D1A 0%, #1A1A2E 100%)',
        'gradient-card': 'linear-gradient(180deg, #16162A 0%, #1A1A2E 100%)',
        'gradient-line': 'linear-gradient(90deg, #22D3EE 0%, #7C3AED 50%, #EC4899 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
