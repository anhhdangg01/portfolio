import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event) => {
    // send email
  }

  return (
    <div className="contact">
      <h1>Write me a message!</h1>
      <form>
        <label>Name
          <input
            type="text"
            value={name}
            onChange={(n) => setName(n.target.value)}
          />
        </label>

        <label>Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>Message
          <textarea value={message}
            onChange={(m) => setMessage(m.target.value)}
          />
        </label>

        <button onSubmit={sendEmail}>
          <label>Send</label>
        </button>
      </form>
    </div>
  )
}

export default Contact;