import React from 'react'

const TechStackIcon = ({icon, name}) => {
  return (
    <div className="tech-stack-icon-container">
        {icon}
        <h4>{name}</h4>
    </div>
  )
}

export default TechStackIcon