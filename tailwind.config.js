/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'teko' : ['Teko', 'sans-serif']
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}