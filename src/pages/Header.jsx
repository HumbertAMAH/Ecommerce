import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/Fichier 2.png'
import '../css/navbar.css'

function Header() {

    const  navRef = useRef();
    const showNavbar = ()=> {
        navRef.current.classList.toggle("responsive_nav");
    };
  return (
    <header>
            <div className='logo'><img className='image' src={logo}alt="" /></div>
            <div className='hamburger' onClick={showNavbar} >
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <nav className='nav-bar' ref={navRef}>
                <ul>
                   <Link to="/login" className='link active' >Log In</Link>
                   <Link to="/signup" className='link' >Sign Up</Link>
                   <Link to="/cart" className='link' >Panier</Link>
                </ul>
            </nav>
    </header>
  )
}

export default Header