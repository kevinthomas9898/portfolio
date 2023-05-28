import React from "react";
import './WorkCardStyles.css';
import { NavLink } from 'react-router-dom';

import defaultImage from '../assets/project4.png';

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={defaultImage/*props.imgscr*/} alt="img" className="img" />
      <h1 className="project-title">{props.title}</h1>
      <div className="project-description">
        <p>
          {props.description}
        </p>
      </div>
      <div className="project-buttons">
        <NavLink to={props.demo} className="btn">
          Demo
        </NavLink>
        <NavLink to={props.download} className="btn">
          Download
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard;
