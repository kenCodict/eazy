import { useState } from 'react'
import reactLogo from './assets/react.svg'
import rounded from './assets/rounded.svg'
import rounded2 from './assets/rounded2.svg'
import dash from './assets/dashSample.svg'
import bg from './assets/phonebg.svg'
import phone from './assets/phone.svg'
import wavebg from './assets/wavebg.svg'
import dashazi from './assets/dashazi.svg'
import './App.css'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router'
import Home from './Pages/Home/Index'
import HomePage from './Pages/Home/HomePage'
import Individual from './Pages/Home/Individual'
import Business from './Pages/Home/Business'
import SetYourPayRoll from './Pages/Home/SetYourPayRoll'
import Pricing from './Pages/Home/Pricing'
import Login from './Pages/Home/Login'
import Register from './Pages/Home/Register'
import Dashboard from './Pages/Dashboard/Dashboard'
function App() {

  return (
  <>
<Router>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<HomePage />} />
          <Route path="individual" element={<Individual />} />
          <Route path="business" element={<Business />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="setyourpayroll" element={<SetYourPayRoll />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
