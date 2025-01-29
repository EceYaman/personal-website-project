import { useState } from 'react'
import './index.css'
import { Header } from './components/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/Footer'
import { DataContextProvider } from './contexts/DataContext'

function App() {
  return (
    <DataContextProvider>
      <div className='mr-44 ml-32 mt-6'>
        <Header />
        <Main />
        <Footer />
      </div>
    </DataContextProvider>
  )
}

export default App
