import './Pages.css'
import React from 'react'
import NavBar from '../components/NavBar/NavBar.js'
import Footer from '../components/Footer/Footer.js'
import Skills from '../components/Skills/Skills.js'

export default function Home() {
    return (
        <div className='home-intro'>
            <NavBar />
            <h1 >Hey</h1>
            <h2>I'm Dylan,</h2>
            <h2>an Aspiring Software Engineer</h2>
            <Skills />
            <Footer />
        </div>
    )
}