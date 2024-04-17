import './Pages.css'
import React from 'react'
import NavBar from '../components/NavBar/NavBar.js'
import Footer from '../components/Footer/Footer.js'

export default function Contact() {
    return (
      <div className="projects-page">
        <NavBar />
        <center>
          <h1>Contact</h1>
        </center>
        <Footer />
      </div>
    );
}