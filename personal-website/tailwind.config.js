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

        bgGray: '#f9f9f9', 
        highlightYellow: '#ffe86e', 
        alertRed: '#af0c48', 
        successGreen: '#00ab6b', 

        bgDark:"#252128",
        bgDark2: "#141414",

        primary2:"#e1e1ff",
        primaryDark2:"#b7aaff",

        textLight2:"#ffffff",
        textDark2:"#aebccf",

        logoLight2: '#8f88ff', 
        logoDark2: '#4731d3', 

        bgGray2: '#3a3a3a', 
        
      },

      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      }
      
    },
  },
  plugins: [],
}