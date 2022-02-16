import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactLinks = () => {
  return (
    <div className="link-icon-row">
        <a href="https://github.com/trevorwallis13" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="connect-icon" /></a>
        <a href="https://www.linkedin.com/in/trevorwallis13" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="connect-icon" /></a>
        <a href="https://www.twitter.com/trevorwallis13" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="connect-icon"/></a>
        <a href="mailto: trevor@walliscreative.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className="connect-icon" /></a>
    </div>
  )
}

export default ContactLinks