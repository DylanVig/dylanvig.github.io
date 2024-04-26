import "./Pages.css";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar.js";
import Footer from "../components/Footer/Footer.js";
import ContactForm from "../components/ContactForm/ContactForm.js"

export default function Contact() {
  const [loaded, setLoaded] = useState(0);
  const [loaded2, setLoaded2] = useState(0);

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
        <h1
          style={{
            opacity: loaded,
            transition: "opacity 400ms ease-in",
            filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          Contact
        </h1>
      </center>
      <center
        style={{
          opacity: loaded,
          transition: "opacity 800ms ease-in",
          filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        <ContactForm />
      </center>
      <Footer />
    </div>
  );
}
