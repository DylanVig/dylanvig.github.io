import React from "react";
import { useState, useEffect } from "react";
import "./ContactForm.css"

export default function ContactForm() {
  const [name, setName] = React.useState("");
  const [button, setButton] = useState('button1');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <section>
      <div className="contact">
        <form className="--form-control --card">
          <div className="horizontal-inputs">
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="email" placeholder="Email" required />
          </div>
          <div className="vertical-inputs">
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" cols="30" rows="10" placeholder="Message" required/>
          </div>
          <center><button className={button}>Send</button></center>
        </form>
      </div>
    </section>
  );
}
