/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'nature': "url('/public/assets/nature.avif')",
        'bg': "url('/public/assets/bg.webp')",
        'bgblue': "url('/public/assets/bgblue.webp')",
      },
      backgroundColor:{
        'dark-100':'#1b1c1e',
        'dark-200':'#131517',
        'dark-300':'#141316',
      },
    },
  },
  plugins: [],
}

