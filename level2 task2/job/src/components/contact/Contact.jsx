
import React, { useState } from 'react';
import './contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';
const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_3hnhv7h';
    const templateId = 'template_jhedtxt';
    const publicKey = '-M1zMy6n_AH5gVDIA';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'JobBoard',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success('Email sent successfully!', {
          position: 'top-right',
          autoClose: 3000, // Close the notification after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        toast.error(`Error sending email: ${error}`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  return (
    <div>

      <div className="contact-page">
        <div><h2 style={{ color: "black" }}><i class="fa-brands fa-waze"></i>Send Us Your Query</h2>
          <p>Let's Know about Your Query </p>
        </div>
        <div className="user-query">
          {/* <h2 style={{color:"black"}}>Send Us Your Query</h2> */}
          <form onSubmit={handleSubmit} className='emailForm'>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              cols="10"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
            <button type="submit">Send Email</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
