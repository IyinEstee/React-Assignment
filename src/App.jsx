import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Signup/>
    </div>
    // <Routes>
    //   <Route path="/homepage" element={<Homepage/>}/>
    //   <Route path="/login" element={<Login/>}/>
    //   <Route path="/signup" element={<Signup/>}/>
    // </Routes>

  )
}

export default App;
