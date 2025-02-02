import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button>Stock</button>
      <button>Invoice</button>
      <button>Admin</button>
      <button>Khata</button>
      
    </>
  )
}

export default App
