import {useState} from 'react';
import './styles/app.scss'
import Header from './components/header/Header'
import HeroSection from './components/hero/HeroSection'
import AboutSection from './components/about/AboutSection'
import ProjectsSection from './components/projects/ProjectsSection'
import ContactSection from './components/contact/ContactSection'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <main className="App">
      <Header/>
      <div className="content container">
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
      </div>
      <Footer/>
    </main>
  );
}

export default App;
