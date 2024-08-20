import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter  as Router, Routes, Route} from "react-router-dom";
import AdminLogin from './pages/admin_pages/AdminLogin';
import Homepage from './pages/common_pages/Homepage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
       <Routes>
          <Route path="/" element = {<Homepage />}></Route>
          <Route path="/home" element = {<Homepage />}></Route>
          <Route path="/homepage" element = {<Homepage />}></Route>
          <Route path="/admin-login" element = {<AdminLogin />}></Route>
       </Routes>
    </Router>
  )
}

export default App
