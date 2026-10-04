import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceId = "service_9gqjvsf";
    const templateId = "template_8dc50uw";
    const publicKey = "Mn6aGYFmvAvhgFiuN";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setStatus("Message sent. I'll get back to you soon.");
      },
      () => {
        setStatus("Something went wrong sending that. Email drv36@cornell.edu instead.");
      }
    );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="contact-row">
        <label>
          Name
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <label>
        Subject
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows="8"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <div className="contact-submit">
        <button className="btn btn-primary" type="submit">
          Send
        </button>
        {status ? <p className="contact-status">{status}</p> : null}
      </div>
    </form>
  );
}
