import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import userData from '../../data/userData'

const ContactLinks = () => {
  return (
    <div className="link-icon-row">
        <a href={userData.github} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="connect-icon" /></a>
        <a href={userData.linkedin} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="connect-icon" /></a>
        <a href={userData.twitter} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="connect-icon"/></a>
        <a href={`mailto:${userData.email}`} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className="connect-icon" /></a>
    </div>
  )
}

export default ContactLinks