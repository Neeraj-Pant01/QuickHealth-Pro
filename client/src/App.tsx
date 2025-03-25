import React from 'react'
import Navbar from './components/common/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/common/Footer'
import Emergency from './pages/Emergency'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import DoctorListPage from './pages/Appointments'
import AppointmentPage from './pages/SingleAppointment'

const App = () => {
  return (
    <div className=' text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/emergency' element={<Emergency />} />
        <Route path='/products' element={<Products />} />
        <Route path='/appointments' element={<DoctorListPage />} />
        <Route path='/appointments/:id' element={<AppointmentPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
