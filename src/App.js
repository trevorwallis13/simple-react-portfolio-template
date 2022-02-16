import {useState} from 'react';
import './styles/app.scss'
import HeroSection from './components/hero/HeroSection'
import AboutSection from './components/about/AboutSection'
import ProjectsSection from './components/projects/ProjectsSection'
import ContactSection from './components/contact/ContactSection'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div className="App">
      <main className="content">
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
