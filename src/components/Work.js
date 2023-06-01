import React from 'react'
import './WorkCardStyles.css'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData.json'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
        {WorkCardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={val.imgscr}
              title={val.title}
              description={val.description}
              demo={val.demo}
              download={val.download}
            />
          )
        })}
        </div>
    </div>
  )
}

export default Work