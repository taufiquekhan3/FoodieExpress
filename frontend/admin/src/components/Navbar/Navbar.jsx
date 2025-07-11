import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img src={assets.logo} alt="" />
        <img src={assets.profile_icon} alt="" />
        
      </div>
    </div>
  )
}

export default Navbar
