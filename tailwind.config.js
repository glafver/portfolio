/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        forum: ['Forum', 'serif'],
        mons: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}

