import { useState } from 'react'
import './index.css'
import { Header } from './components/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/Footer'
import { useDarkMode } from './contexts/ThemeContext'


function App() {
  const { darkMode} = useDarkMode();

  return (
    <div className={darkMode ? "bg-bgDark pr-44 pl-32 pt-6 pb-28 w-full absolute" : "mr-44 ml-32 pt-6"}>
        <Header />
        <Main />
        <Footer />
      </div>
  )
}

export default App
