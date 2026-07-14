import React from 'react'
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Home from "./pages/Home"
import MyBooking from "./pages/MyBooking"
import Listing from "./pages/Listing"
import {Routes ,Route} from "react-router-dom"
import Navbar from "./componets/Navbar"
import CarDetails from "./pages/CarDetail"


const App = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/car/:id" element={<CarDetails/>} />
        <Route path="/my-bookings" element={<MyBooking/>} />
      </Routes>
    </div>
    
  )
}

export default App