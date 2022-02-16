import React from 'react'
import Project from './Project'
import { projectData } from '../../data/project-data'
import TechStackIcon from './TechStackIcon'

const ProjectsSection = () => {

  const projects = projectData.map((project, index) => {

    const {name, img, altText, description, liveLink, githubLink, techStack } = project;
   
    const techStackComponents = techStack.map((item, index) => {
      return <TechStackIcon key={index} name={item.name} icon={item.icon}/>
  })

    return <Project 
              key={index}
              name={name} 
              img={img} 
              altText={altText} 
              description={description}
              liveLink={liveLink}
              githubLink={githubLink}
              techStackComponents={techStackComponents}
            />
  })

  return (
    <section className="projects section" id="projects">
      <h2 className="section-header">Projects</h2>
      <div className="projects-container">
        {projects}
      </div>
    </section>
  )
}

export default ProjectsSection