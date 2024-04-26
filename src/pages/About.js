import './Pages.css'
import React from 'react'
import NavBar from '../components/NavBar/NavBar.js'
import Footer from '../components/Footer/Footer.js'
import Experience from '../components/Experience/Experience.js'

export default function About() {
    return (
        <div className='projects-page'>
            <center><NavBar /></center>
            <h1>About</h1>
            <Experience />
            <Footer />
        </div>
    )
}