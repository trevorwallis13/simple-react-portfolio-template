import React from 'react'
import profile from '../../assets/profile.jpg'
import './about.scss'

const AboutSection = () => {
  return (
    <section className="about section section-alt-colors" id="about">
        <h2 className="section-header">About me</h2>
        <div className="inner">
          <div className="about-text">
            <p>Google Sheets was my gateway drug into tech. Before I’d even heard of JavaScript, I was building tools, calculators, gizmos, and gadgets (like this <a href="https://docs.google.com/spreadsheets/d/122xK6FUc5GK7mkftNWDbNx6NNJm9hR72ZPtjwVN372M/edit?usp=sharing">dice roller for DnD!</a>) in spreadsheets.</p>
            <p>So I fell down the next flight of steps into Google App Scripts, getting my first taste of JS. I became the “Spreadsheet Guy” at my company — not because of what I could do with spreadsheets, but because of what I could make spreadsheets do for everyone else. All it took was a little bit of code and a whole lot of imagination.</p>
            <p>But I quickly realized that you can only do so much in a spreadsheet — even with Google App Script backing you up. How much more could I do if I freed my JS knowledge from spreadsheet prison and into the real world?</p>
            <p>That epiphany led me to make a major career change — from content writer/spreadsheet guy to software engineer.</p>
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