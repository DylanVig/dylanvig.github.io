import './Pages.css'
import React from 'react'
import NavBar from '../components/NavBar/NavBar.js'
import Footer from '../components/Footer/Footer.js'

export default function About() {
    return (
        <div className='projects-page'>
            <NavBar />
            <h1>About</h1>
            <Footer />
        </div>
    )
}