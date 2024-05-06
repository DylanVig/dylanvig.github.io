import './Pages.css'
import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar.js'
import Footer from '../components/Footer/Footer.js'
import Intro from '../components/Intro/Intro.js'

export default function Home() {

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
        <center
          style={{
            opacity: loaded,
            transition: "opacity 800ms ease-in",
            filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Intro />
        </center>
        <center
          style={{
            opacity: loaded,
            transition: "opacity 1200ms ease-in",
            filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Footer />
        </center>
      </div>
    );
}