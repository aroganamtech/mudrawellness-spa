/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#183D32',
          dark: '#0F2921',
          darker: '#0A1C16',
          light: '#235244',
          subtle: '#14332A',
        },
        sage: {
          DEFAULT: '#A8B89A',
          light: '#C7D3BC',
          dark: '#7D8F6F',
          subtle: '#EBF0E6',
        },
        cream: {
          DEFAULT: '#F7F3EB',
          light: '#FBF9F5',
          dark: '#EDE7D8',
          accent: '#E6DECC',
        },
        gold: {
          DEFAULT: '#C5A46D',
          light: '#DEC190',
          dark: '#A68449',
          glow: '#F0D5A3',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(24, 61, 50, 0.12)',
        'luxury-gold': '0 12px 30px -10px rgba(197, 164, 109, 0.35)',
        'glow-gold': '0 0 25px rgba(197, 164, 109, 0.45)',
      }
    },
  },
  plugins: [],
}
