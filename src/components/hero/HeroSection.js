import React from 'react';
import { Button } from 'react-bootstrap'
import ContactLinks from './ContactLinks'
import './hero.scss'
import userData from '../../data/userData';


const HeroSection = () => {
  return (
    <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{userData.name}</h1>
            <h2>{userData.subTitle}</h2>
            {userData.summaryStatement}
          </div>
          <ContactLinks />
          <div className="hero-buttons">
            <Button href="#projects" variant="outline-secondary">projects</Button>
            <Button href="#about" variant="outline-secondary">about me</Button>
            <Button href={userData.resumeLink} variant="outline-secondary">resume</Button>
          </div>
        </div>
    </section>
  )
}

export default HeroSection