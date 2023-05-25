import React from 'react'
import './HeroImageStyles.css'
import IntroImage from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img src={IntroImage} alt="Intro Image" className="into-img" />
        </div>
        <div className="content">
          <p>HI, I'M A FREELANCER.</p>
          <h1>REACT DEVELOPER</h1>
          <div>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImage