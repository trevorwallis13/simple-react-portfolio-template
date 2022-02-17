import React from 'react'
import profile from '../../assets/profile.jpg'
import './about.scss'

const AboutSection = () => {
  return (
    <section className="about section section-alt-colors" id="about">
        <h2 className="section-header">About me</h2>
        <div className="inner">
          <div className="about-text">
            <p>Google Sheets was my gateway drug into tech. Before I’d even heard of JavaScript, I was building tools, calculators, gizmos, and gadgets in spreadsheets. But Sheets' native functions can only do so much, so I learned App Script as well -- giving my first taste of JavaScript.</p>
            <p>I became the “Spreadsheet Guy” at my company — not because of what I could do with spreadsheets, but because of what I could make spreadsheets do for everyone else. All it took was a little bit of code and a whole lot of imagination.</p>
            <p>But that led to an epiphany: How much more could I do if I freed my JS knowledge from spreadsheet prison and into the real world?</p>
            <p>This realization completed my transformation from content writer/spreadsheet guy to software engineer. Today, I build helpful tools with JavaScript, HTML, CSS, Sass, React, Node, Express, and PostgreSQL.</p>
          </div>
          <div className="img-container">
            <div className="shadow-outline">
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