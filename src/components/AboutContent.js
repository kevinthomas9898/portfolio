import React from 'react'
import { Link } from 'react-router-dom'
import './AboutContent.css'
import React2 from '../assets/react2.webp'
import React1 from '../assets/react1.jpg'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            {/* about myself description as a react js developer */}
            <p>I'm a self-taught web developer with a passion for learning and creating. I'm currently working on a few projects to build my portfolio and gain experience. I'm looking for a position as a junior developer to start my career in the tech industry.</p>
            <Link to="/contact" className="btn">Contact Me</Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React2} alt="React 2" className="img" />
                </div>
                <div className="img-stack bottom">
                    <img src={React1} alt="React 1" className="img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent