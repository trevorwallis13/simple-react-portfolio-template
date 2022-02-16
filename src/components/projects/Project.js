import Button from 'react-bootstrap/Button'
import './projects.scss'
import { IconContext } from 'react-icons'

const Project = ({name, img, altText, description, liveLink, githubLink, techStackComponents}) => {

    return (
        <IconContext.Provider value={{size: "1.7em", color: "#40353A"}}>
            <div className="project">
                <h3 className="project-title"><span className="highlight">{name}</span></h3>
                <div className="project-img-container">
                    <a href={liveLink}>
                        <img src={img} alt={altText} className="project-img" />
                    </a>
                </div>
                <div className="project-content">
                    <div className="tech-used-icons">
                        {techStackComponents}
                    </div>
                    {description}
                    <div className="project-btns-container">
                        <Button variant="outline-secondary" href={liveLink} className='project-btn'>View Live</Button>
                        <Button variant="outline-secondary" href={githubLink} className='project-btn'>Github</Button>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
  }
  
  export default Project