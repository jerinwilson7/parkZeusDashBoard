/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green-30': 'rgba(53, 153, 66, 0.2)',
        'btn-blue': 'rgba(0,86,145,1)',
        'main-bg':'rgba(239,246,249,1)'
        
      }
    },
  },
  plugins: [],
}
