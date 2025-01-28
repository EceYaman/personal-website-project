import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='mx-20 my-5'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
