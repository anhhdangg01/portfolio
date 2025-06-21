import React from "react";
import '../styles/portfolio.css';
import Navigator from '../components/navigator.tsx';
import Me from '../components/me.tsx';
import Education from '../components/education.tsx';
import Experience from '../components/experience.tsx';
import Contact from '../components/contact.tsx';

function Portfolio() {
  return (
    <div className="Portfolio">
      <Navigator />
      <Me />
      <Education />
      <Experience />
      <Contact />
    </div>
  )
}

export default Portfolio;