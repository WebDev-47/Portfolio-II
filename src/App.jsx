import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
// import Footer from './Components/Footer'
import ConnectMe from './Components/ConnectMe'

const App = () => {
  return (
    <div className='bg-black sm:px[5vw] lg:[9vw]'>
    
    <Navbar/>
     <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/connectMe' element={<ConnectMe/>} />
      
     </Routes>
     {/* <Footer/> */}
  
    </div>
  )
}

export default App