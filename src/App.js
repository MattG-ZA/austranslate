import React, { useRef, useEffect } from 'react'
import './App.css'
import Input from './components/input/Input'

function App() {
  const appEl = useRef(null)

  useEffect(() => {
    appEl.current.style.setProperty('--background', 'linear-gradient(45deg, #bc2046, #113a93)')
  }, [])

  const changeBackground = (flip) => {
    flip
    ? appEl.current.style.setProperty('--background', 'linear-gradient(45deg, green, yellow)')
    : appEl.current.style.setProperty('--background', 'linear-gradient(45deg, #bc2046, #113a93)')
  }

  return (
    <div ref={appEl} className="App">
      <Input changeBackground={changeBackground} />
    </div>
  )
}

export default App
