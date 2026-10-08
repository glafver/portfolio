/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        display: ['"Archivo Black"', 'Montserrat', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#be806e',
          dark: '#a46858',
          light: '#d3a18e',
        },
      },
    },
  },
  plugins: [],
}
