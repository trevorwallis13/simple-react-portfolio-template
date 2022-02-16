import React from 'react';
import { Button } from 'react-bootstrap'
import ContactLinks from './ContactLinks'


const HeroSection = () => {
  return (
    <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Trevor Wallis</h1>
            <h2>Front-End Engineer</h2>
          </div>
          <ContactLinks />
          <div className="hero-buttons">
            <Button variant="outline-secondary">projects</Button>
            <Button variant="outline-secondary">about me</Button>
            <Button variant="outline-secondary">resume</Button>
          </div>
        </div>
    </section>
  )
}

export default HeroSection