import React from 'react'
import Style from './NavBar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <header>
      <h3>Logo</h3>  
      <nav ref={navRef} >          
        <NavLink>option</NavLink>
        <NavLink>try</NavLink>
        <NavLink>try</NavLink>
        <NavLink>try</NavLink>
        <NavLink>try</NavLink>       
        <button onClick={showNavbar} className='nav-btn nav-close-btn'><FaTimes/></button>
    </nav>
    <button onClick={showNavbar} className='nav-btn'><FaBars/></button>
    </header>
    
  )
}
export default NavBar