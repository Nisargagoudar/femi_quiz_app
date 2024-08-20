import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter  as Router, Routes, Route} from "react-router-dom";
import AdminLogin from './pages/admin_pages/AdminLogin';
import Homepage from './pages/common_pages/Homepage';
import About from "./pages/common_pages/About";
import Contact from "./pages/common_pages/Contact";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
       <Routes>
          <Route path="/" element = {<Homepage />}></Route>
          <Route path="/home" element = {<Homepage />}></Route>
          <Route path="/homepage" element = {<Homepage />}></Route>
          <Route path="/about" element = {<About />}></Route>
          <Route path="/contact" element = {<Contact />}></Route>
          <Route path="/admin-login" element = {<AdminLogin />}></Route>
       </Routes>
    </Router>
  )
}

export default App
