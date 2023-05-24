import React from 'react';
import './Hero2Styles.css';
import Intro2 from '../assets/intro-3.jpg';

const Hero2Image = (props) => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={Intro2} alt="Intro Image" className="into-img" />
      </div>
      <div className="content">
        <h1>{props.heading}</h1>
        <h3>{props.text}</h3>
      </div>
    </div>
  );
};

export default Hero2Image;
