/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#CCCCFF',
        secondary: '#A3A3CC',
        accent: '#5C5C99',
        dark: '#292966',
        deepdark: '#0B2E33',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, var(--color-deepdark) 0%, var(--color-dark) 100%)',
      },
    },
  },
  plugins: [],
};