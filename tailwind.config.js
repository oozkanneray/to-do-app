/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        bgColor:"#DAF5FF",
        secondColor:"#e6f5fa"
      }
    },
  },
  plugins: [],
}