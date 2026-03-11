/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enterprise Design Inspired Colors
        primary: {
          DEFAULT: '#008b96',
          hover: '#007680',
          light: '#b2eef2',
          dark: '#005d64',
          soft: '#e0f7f9',
        },
        accent: {
          DEFAULT: '#0093c7',
          light: '#82cfff',
          dark: '#0072a3',
        },
        // Carbon Gray Scale - Using 'carbon' prefix to avoid conflicts
        carbon: {
          10: '#fafafa',
          20: '#f4f4f4',
          30: '#e0e0e0',
          40: '#c6c6c6',
          50: '#a8a8a8',
          60: '#8d8d8d',
          70: '#6f6f6f',
          80: '#525252',
          90: '#393939',
          100: '#262626',
        },
        // Semantic Colors
        navy: {
          DEFAULT: '#161616',
          light: '#262626',
          dark: '#0b0b0b',
        },
        slate: {
          DEFAULT: '#525252',
          light: '#6f6f6f',
          dark: '#393939',
        },
        success: '#198038',
        warning: '#f1c21b',
        error: '#da1e28',
        info: '#0093c7',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '300' }],
        'h1': ['3.75rem', { lineHeight: '1.11', letterSpacing: '-0.02em', fontWeight: '300' }],
        'h2': ['2.5rem', { lineHeight: '1.17', letterSpacing: '-0.02em', fontWeight: '300' }],
        'h3': ['1.75rem', { lineHeight: '1.25', fontWeight: '400' }],
        'h4': ['1.375rem', { lineHeight: '1.25', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.5' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.33' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        'content': '1584px',
        'prose': '720px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'strong': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'elevated': '0 12px 40px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      transitionDuration: {
        'fast': '70ms',
        'base': '150ms',
        'slow': '300ms',
        'slower': '500ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
