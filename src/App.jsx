import React from 'react'
import Header from './assets/components/Header'
import Home from './assets/components/Home'
import Values from './assets/components/Values'
import Doctors from './assets/components/Doctors'
import Footer from './assets/components/Footer'
import Booking from './assets/components/Booking'
import { Route, Routes } from 'react-router-dom'
import Departments from './assets/components/Department'
import Updates from './assets/components/Updates'
import Message from './assets/components/Message'
import Who from './assets/components/Who'
import Subfooter from './assets/components/Subfooter'
import Footer2 from './assets/components/Footer2'

// import departmentsData from './departmentsData.json'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        
        <Route path={'/'} element={<Home />} />
        <Route path='/about' element={<Who />} />
        <Route path='/departments' element={<Departments />} />
        <Route path={'/values'} element={<Values />} />
        <Route path={'/doctors'} element={<Doctors />} />
        <Route path='/appointment' element={<Booking />} />
        
      </Routes>
      
      <Values />
      <Departments />
      <Doctors />
      <Updates />
      <Message />
      <Who />
      <Booking />
      <Footer2 />
      <Subfooter/>
      <Footer />
    </div>
  )
}

export default App;
