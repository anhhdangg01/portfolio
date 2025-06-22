import React from "react";
import '../styles/portfolio.css';
import Navigator from '../components/navigator.tsx';
import Home from '../components/home.tsx';
import Me from '../components/me.tsx';
import Education from '../components/education.tsx';
import Projects from '../components/projects.tsx';
import Experience from '../components/experience.tsx';
import Contact from '../components/contact.tsx';

function Portfolio() {
  return (
    <div className="portfolio">
      <Navigator />
      <Home />
      <Me />
      <Education />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default Portfolio;