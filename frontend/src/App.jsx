// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'

import Dashboard from "./components/Dashboard";
import Stock from "./components/Stock/Home";
import Invoice from "./components/Invoice/Invoice";
import Admin from "./components/Admin/Home";
import Khata from "./components/Khata/Home";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/invoice/*" element={<Invoice />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/khata" element={<Khata />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
