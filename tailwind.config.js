/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'custom-cream': "#FDF9F9",
      'custom-cream2': "#FDF9F4",
      'custom-green': "#009B9A",
      'custom-yellow': "#F9BC60",
      'custom-blue': "#5271FF",
      'custom-white': "#F5F5F5",
      'custom-gray': "#F0F0F0",
    }
    },
    fontFamily:{
      main : ["Nunito", "Poppins"],
    },
    
  },
  plugins: [
    
  ],
}
