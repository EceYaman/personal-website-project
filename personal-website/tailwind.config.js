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
        linkBlue:'#0077b5' , 

        bgDark:"#252128",
        bgDark2: "#141414",

        primary2:"#cbc4f3",
        primaryDark2:"#b7aaff",

        textLight2:"#f4f4f4",
        textDark2:"#aebccf",

        logoLight2: '#8f88ff', 
        logoDark2: '#4731d3', 

        bgGray2: '#3a3a3a', 
        successGreen2: '#17d18b',
        linkBlue2:'#0ba6f6' ,
      },

      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },

      screens: {
        sm: '480px',   
        lg: '767px',   
        xl: '1280px',
      },
      
    },
  },
  plugins: [],
}