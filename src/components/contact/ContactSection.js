import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Button from 'react-bootstrap/Button'
import './contact.scss'
import userData from '../../data/userData'

const ContactSection = () => {
  return (
    <IconContext.Provider value={{size: "1.7em", color: "#F1F4EE"}}>
      <div className="contact section section-alt-colors" id="contact">
        <h2 className="section-header">Get in touch</h2>
        <div className="contact-container">
            <div className="contact-item">
              <FaEnvelope />
              <p>{userData.email}</p>
            </div>
            <Button href={`mailto:${userData.email}`} variant="outline-secondary" className="alt-btn alt-btn-color">say hello</Button>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default ContactSection