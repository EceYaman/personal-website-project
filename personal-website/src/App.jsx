import { useState } from 'react'
import './index.css'
import { Header } from './components/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/Footer'
import { useDarkMode } from './contexts/ThemeContext'


function App() {
  const { darkMode} = useDarkMode();

  return (
    <div>
      <div className={`w-full pt-6 sm:px-4 sm:pb-16 lg:px-12 lg:pb-20 xl:pr-44 xl:pl-32 xl:pb-28 ${darkMode ? "bg-bgDark" : "bg-white"}`}>
        <Header />
        <Main />
      </div>
       <Footer />
    </div>
  )
}

export default App
