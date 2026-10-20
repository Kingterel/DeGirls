/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — authentic Artmee luxury colors
        green: {
          DEFAULT: '#721C37',
          50: '#FAF0F3',
          100: '#F3E1E7',
          200: '#E4BAC7',
          300: '#CF8EA2',
          400: '#B05975',
          500: '#8E2849',
          600: '#721C37',
          700: '#5A142A',
          800: '#420D1D',
          900: '#2A0611',
        },
        cream: {
          DEFAULT: '#FAF6F0',
          50: '#FDFCFB',
          100: '#FAF6F0',
          200: '#F4ECE1',
          300: '#EAE1D3',
          400: '#DAD0C0',
          500: '#C4B9A7',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#D4B87A',
          dark: '#9E7B3A',
        },
        charcoal: {
          DEFAULT: '#262223',
          50: '#F8F6F6',
          100: '#ECE8E9',
          200: '#D5CFD1',
          300: '#B2A9AB',
          400: '#736B6E',
          500: '#4A4345',
          600: '#3A3436',
          700: '#262223',
          800: '#1A1718',
        },
        // Brand palette
        brand: {
          burgundy: '#721C37',
          midnight: '#4A0E20',
          wine: '#521226',
          plum: '#521226',
          gold: '#C6A15B',
          goldLight: '#D4B87A',
          blush: '#FAF0F3',
          beige: '#FAF6F0',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
