import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import data from "../data"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Stock from './pages/Stock'
import { useFamilyContext } from './familyContext'

function App() {
  // const [count, setCount] = useState(0)
  // const data = useFamilyContext()

  return (

      <div>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/stocks" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks/:symbol" element={<Stock />} />
        </Routes>
      </div> 
  )
}

export default App
