import React from 'react'
import Header from './assets/components/Header'
import Home from './assets/components/Home'
import Values from './assets/components/Values'
import Doctors from './assets/components/Doctors'
import Footer from './assets/components/Footer'
import Booking from './assets/components/Booking'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        
        {/* <Route path={'/'} element={<><Header /> <Home /> </>} />
        <Route path={'/values'} element={<Values />} />
        <Route path={'/docotrs'} element={<Doctors />} />
        <Route path='/booking' element={<Booking />} /> */}
        
      </Routes>
      <Header />
      <Home />
      <Values />
      <Doctors />
      <Booking />
      <Footer />
    </div>
  )
}

export default App
