import React, { useState,useEffect } from 'react'
import  './Navbar.css';
import logo from '../../Assets/logo.png';


const Navbar = () => {

  const [sticky, setSticky]= useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky (true) : setSticky (false); 
   })
  },[]);
  
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
<img src={logo} className="logo" alt="logo" />
<ul>
    <li>Home</li>
    <li> Program</li>
    <li> About US</li>
    <li> Campus</li>
    <li> Testimonials</li>
    <li> <button className='btn'>Contact US </button></li>
    
</ul>
    </nav>
  )
}

export default Navbar