/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — replaces all green usages site-wide
        green: {
          DEFAULT: '#7A1F3D',
          50: '#F9F0F3',
          100: '#F0D6DF',
          200: '#DFA8BB',
          300: '#C97A96',
          400: '#A84D6F',
          500: '#8E2E52',
          600: '#7A1F3D',
          700: '#5E1730',
          800: '#421024',
          900: '#260917',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          50: '#FDFCFA',
          100: '#FAF7F2',
          200: '#F2EBE0',
          300: '#E8E0D5',
          400: '#D9CFC2',
          500: '#C4B8A8',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#D4B87A',
          dark: '#9E7B3A',
        },
        charcoal: {
          DEFAULT: '#1C1C1C',
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#C5C5C5',
          300: '#9E9E9E',
          400: '#767676',
          500: '#4D4D4D',
          600: '#333333',
          700: '#1C1C1C',
          800: '#0F0F0F',
        },
        // Brand palette
        brand: {
          burgundy: '#7A1F3D',
          plum: '#76508A',
          gold: '#C6A15B',
          beige: '#E8DDD0',
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
