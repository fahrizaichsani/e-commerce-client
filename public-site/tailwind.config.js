/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color1: "#EEF5FF",
        color2: "#B4D4FF",
        color3: "#86B6F6",
        color4: "#176B87"
      },
      fontFamily:{
        sans: ['Graphik', 'sans-serif'],
      },
      backgroundColor: {
        'neutral': '#B4D4FF',
      },
      textColor: {
        'custom-color': '#176B87',
      },
      backgroundImage: {
        'background-login': "url('https://wallpaperbat.com/img/455725-clothes-wallpaper.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

