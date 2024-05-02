import React, { useRef } from "react";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser'
import "./ContactForm.css"

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [button, setButton] = useState('button1');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_9gqjvsf';
    const templateId = 'template_8dc50uw';
    const publicKey = 'Mn6aGYFmvAvhgFiuN';

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
    .then((result) => {
      console.log(result.text);
      reset();
    }, (error) => {
      console.log(error.text);
    });
  }

  function reset() {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <div className="contact">
      <form className="--form-control --card" ref={form} onSubmit={sendEmail}>
        <div className="horizontal-inputs">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="vertical-inputs">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <center>
          <button className={button}>Send</button>
        </center>
      </form>
    </div>
  );
}
