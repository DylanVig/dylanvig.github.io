import './Pages.css'
import { useState, useEffect } from 'react'
import React from 'react'
import NavBar from '../components/NavBar/NavBar.js'
import Footer from '../components/Footer/Footer.js'
import Experience from '../components/Experience/Experience.js'

export default function About() {
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(1), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="projects-page">
      <center>
        <NavBar />
      </center>
      <center>
        <h1
          style={{
            opacity: loaded,
            transition: "opacity 400ms ease-in",
            filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          About
        </h1>
      </center>
      <div style={{
            opacity: loaded,
            transition: "opacity 800ms ease-in",
            filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5)",
          }}>
            <center>
        <h1>Experience</h1>
        </center>
      <Experience />
      </div>
      <Footer />
    </div>
  );
}