import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>just trying</h1>
      <img src={viteLogo} className="logo" alt="Vite logo" />


      <img src={reactLogo} className="logo react" alt="React logo" />

      <Cards/>
      
    </>
  )
}

export default App
