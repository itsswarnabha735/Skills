import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surface hierarchy - warm cream palette (matching dashboard)
        surface: {
          base: '#F5F3EF',      // Main background - warm cream
          raised: '#FFFFFF',    // Cards, panels
          sunken: '#EDEAE4',    // Inset areas, inputs
          hover: '#E8E5DF',     // Hover states
        },
        // Ink hierarchy - warm grays
        ink: {
          primary: '#1C1917',   // Headings, primary text
          secondary: '#44403C', // Body text
          muted: '#78716C',     // Secondary info
          faint: '#A8A29E',     // Disabled, hints
        },
        // Stroke colors
        stroke: {
          subtle: '#E7E5E4',
          hover: '#D6D3D1',
          active: '#A8A29E',
        },
        // Accent - warm amber/orange
        accent: {
          primary: '#D97706',   // Primary actions (amber)
          hover: '#B45309',
          muted: '#FED7AA',
          subtle: 'rgba(217, 119, 6, 0.08)',
        },
        // Butter - the brand color (inside joke: smooth as butter)
        butter: {
          DEFAULT: '#F6C744',   // Golden butter yellow
          dark: '#D4A012',      // Darker butter for hover/text
          light: '#FBE38A',     // Light butter for backgrounds
        },
        // Status
        status: {
          live: '#22C55E',
        },
      },
      fontFamily: {
        display: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-lg': ['5rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'panel': '0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}

export default config
