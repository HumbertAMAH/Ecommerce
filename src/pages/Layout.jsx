import React  from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import Cart from './Cart'
import Home from './Home';
import Contact from './Contact';
import About from './About.jsx';




function Layout() {

  return (
     <div>
      <Header/>
      <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path='/login' element={<Login />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
    </Routes>
     <Footer/>
     </div>
  )
}

export default Layout