import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import Signup from './Signup'
import Cart from './Cart'
import Home from './Home';;


function Layout() {
  return (
     <div>
      <Header/>
      <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/cart' element={<Cart />} />
    </Routes>
     <Footer/>
     </div>

  )
}

export default Layout