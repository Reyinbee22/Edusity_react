import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/dark_arrow.png'

const Hero = () => {
  return (
    

<div className="hero container">
    <div className="hero-text">
        <h1> We Ensure beter education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='btn'> Explore More <img src={dark_arrow} alt="" /></button>
    
</div>
    </div>
  )
}

export default Hero