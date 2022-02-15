import React from 'react'
import profile from '../../assets/profile.jpg'
import './about.scss'

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content container">
        <h2>About me</h2>
        <div className="inner">
          <div className="about-text">
            <p>Hello! My name's Trevor and I build tools that simplify life and work.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus provident molestias aliquam voluptatem. Reprehenderit, temporibus! Sint voluptatum voluptate libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dignissimos similique. Possimus exercitationem in quia animi hic corrupti aut natus.</p>
          </div>
          <div className="img-container">
            <div className="about-img">
              <img src={profile} alt="Trevor Wallis headshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection