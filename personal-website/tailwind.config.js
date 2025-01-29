/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4338ca', 
        primaryDark: '#3730a3', 

        textLight: '#777777', 
        textDark: '#1f2937',

        logoLight: '#eeebff', 
        logoDark: '#7b61ff', 

        backgroundGray: '#f9f9f9', 
        highlightYellow: '#ffe86e', 
        alertRed: '#af0c48', 
        successGreen: '#00ab6b', 
      },

      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      }
      
    },
  },
  plugins: [],
}