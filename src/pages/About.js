import './Pages.css'
import { useState, useEffect } from 'react'
import React from 'react'
import NavBar from '../components/NavBar/NavBar.js'
import Footer from '../components/Footer/Footer.js'

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
      <center style={{
            opacity: loaded,
            transition: "opacity 800ms ease-in",
            filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5)",
          }}>
        <h3 style={{ fontSize: '23px', width: '50%'}}>My name is Dylan Vig, and I am from New York, NY. Throughout my academic career, I have done a lot of exploring in terms of finding what type of career paths interest me, such as Mechanical Engineering, Business/Finance, and Marketing/Sales. While I've had many valuable experiences, my mind eventually settled on Computer Science, as it provides limitless opportunities and gives me the ability to turn my creative ideas into tangible products. Additionally, I want to build software that has a real impact on the world, trying to help make others' day just a little bit easier, one step at a time. Aside from coding, my hobbies include hanging out with friends, solving puzzles, and balloon twisting!</h3>
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