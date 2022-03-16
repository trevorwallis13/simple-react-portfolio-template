import React from 'react'
import userData from '../../data/userData'
import './about.scss'

const AboutSection = () => {

  console.log(userData)
  return (
    <section className="about section section-alt-colors" id="about">
        <h2 className="section-header">About me</h2>
        <div className="inner">
          <div className="about-text">
           {userData.aboutStatement}
          </div>
          <div className="img-container">
            <div className="shadow-outline">
              <div className="about-img">
                <img src={process.env.PUBLIC_URL + userData.img} alt={userData.altText} />
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default AboutSection