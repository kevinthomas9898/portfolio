import React from 'react'
import './FooterStyles.css'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome className="icon"/>
                    <div>
                        <p>Vadodara</p>
                        <p>Gujarat, India</p>
                    </div>
                </div>
                <div className="phone">
                    <FaPhone className="icon"/>
                    <h4>8849270375</h4>
                </div>
                <div className="email">
                    <FaMailBulk className="icon"/>
                    <h4>kevinthomas9898@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>I am a React JS developer with a passion for learning and creating new things. I have completed my Bachelor of Computer Application from Charusat University. I am a self-taught developer and I love to learn new things. I am a quick learner and I am always looking out for good opportunities.</p>
                <div className="social">
                    <FaLinkedin className="icon"/>
                    <FaInstagram className="icon"/>
                    <FaGithub className="icon"/>
                </div>
            </div>
            <div class="bottom-footer">
                <p className='moving-text'>All Rights Reserved &copy; 2023</p>
                <p className='moving-text'> Designed By <span> Kevin Thomas</span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer