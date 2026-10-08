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
        display: ['"Space Grotesk"', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
