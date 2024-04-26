import './Pages.css'
import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar.js'
import Footer from '../components/Footer/Footer.js'
import Skills from '../components/Skills/Skills.js'

export default function Home() {

    const [loaded, setLoaded] = useState(0); 

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(1), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='home-intro'>
            <center><NavBar /></center>
            <h1 >Hey</h1>
            <h2>I'm Dylan,</h2>
            <h2>an Aspiring Software Engineer</h2>
            <Footer />
        </div>
    )
}