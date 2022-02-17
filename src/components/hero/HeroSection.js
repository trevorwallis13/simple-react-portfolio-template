import React from 'react';
import { Button } from 'react-bootstrap'
import ContactLinks from './ContactLinks'
import './hero.scss'


const HeroSection = () => {
  return (
    <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Trevor Wallis</h1>
            <h2>Front-End Engineer</h2>
            <p>I build tools that <span className="highlight">simplify</span> life and work</p>
          </div>
          <ContactLinks />
          <div className="hero-buttons">
            <Button href="#projects" variant="outline-secondary">projects</Button>
            <Button href="about" variant="outline-secondary">about me</Button>
            <Button href="/docs/trevor-wallis-resume.pdf" variant="outline-secondary">resume</Button>
          </div>
        </div>
    </section>
  )
}

export default HeroSection