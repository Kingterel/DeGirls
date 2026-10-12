/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing palette
        green: {
          DEFAULT: '#1B4332',
          50: '#F0F7F4',
          100: '#D6EDE3',
          200: '#ADDEC7',
          300: '#74C69D',
          400: '#40A870',
          500: '#2D6A4F',
          600: '#1B4332',
          700: '#143328',
          800: '#0D2219',
          900: '#06110D',
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
          DEFAULT: '#B8960C',
          light: '#D4AE0E',
          dark: '#8B7009',
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
