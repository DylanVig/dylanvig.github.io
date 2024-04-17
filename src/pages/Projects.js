import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar.js';
import ProjectSlider from '../components/ProjectSlider/ProjectSlider.js';
import '../components/ProjectSlider/ProjectSlider.css';
import './Pages.css';
import Footer from '../components/Footer/Footer.js';
import ProgrammingLanguages from '../components/ProgrammingLanguages/ProgrammingLanguages.js';

export default function Projects() {
    const [loaded, setLoaded] = useState(0); 

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(1), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
      <div className="projects-page">
        <NavBar />
        <center>
          <h1 style={{ opacity: loaded, transition: "opacity 200ms ease-in", filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5)' }}>
            Projects
          </h1>
        </center>
        <ProjectSlider style={{ opacity: loaded, transition: "opacity 800ms ease-in", filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5)' }}/>
        <center>
          <h1 style={{ opacity: loaded, transition: "opacity 1000ms ease-in", filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5)' }}>Programming Tools</h1>
          <ProgrammingLanguages />
        </center>
        <Footer />
      </div>
    );
}
