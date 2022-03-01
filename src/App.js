import React, {useState, useEffect} from 'react'
import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'

const getStorageTheme = () => {
  let theme = 'light-theme'
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

const App = () => {
  const [theme, setTheme] = useState(getStorageTheme())

  const toggleTheme = () => {
    if(theme === 'light-theme') {
      setTheme('dark-theme')
    } 
    else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  )
}

export default App
