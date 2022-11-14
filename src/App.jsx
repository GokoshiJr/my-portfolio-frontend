import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'

function App() {
  return (
    <div className="app">
        <Navbar />
        <Header />
        
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default App
