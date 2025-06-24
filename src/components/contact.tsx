import React, { useState } from 'react';
import '../styles/contact.css';
import linkedin_icon from '../assets/linkedin_icon.png';
import github_icon from '../assets/github_icon.png';


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("danqanh008@gmail.com")

  const sendEmail = (event) => {
    // send email
  }

  const copyToClipboard = (text: string) => {
    const result = navigator.clipboard.writeText(text);
    setStatus("Copied!")
    setTimeout(() => {
      setStatus("danqanh008@gmail.com")
    }, 2000);
  }

  return (
    <div className="contact">
      <h1>Contact me!</h1>
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
      <div className="info">
        <div className="email" onClick={() => {copyToClipboard("danqanh008@gmail.com")}}>
          {status}
        </div>
        <div className="links">
          <a href="https://www.linkedin.com/in/anh-dang-080b3a24a/">
            <img src={linkedin_icon} />
          </a>
          <a href="https://github.com/anhhdangg01">
            <img src={github_icon} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;