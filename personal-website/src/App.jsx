import { useState } from 'react'
import './index.css'
import { Header } from './components/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/Footer'


function App() {
 
  return (
      <div className="mr-44 ml-32 pt-6">
        <Header />
        <Main />
        <Footer />
      </div>
  )
}

export default App
