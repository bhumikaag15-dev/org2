/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f7',
          100: '#fed7e2',
          200: '#fbb6ce',
          500: '#ed64a6',
        },
        dustyRose: '#d98880',
        softPeach: '#fbeee6',
        warmCream: '#faf5ef',
        deepPlum: '#4a1525',
        sageGreen: '#829b88',
        mutedMauve: '#9b7b8e',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}