import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/Footer'
import { DataContextProvider } from './contexts/DataContext'

function App() {
  return (
    <DataContextProvider>
      <div className='mx-20 my-5'>
        <Header />
        <Main />
        <Footer />
      </div>
    </DataContextProvider>
  )
}

export default App
