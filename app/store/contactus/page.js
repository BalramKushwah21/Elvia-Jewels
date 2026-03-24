"use client";
import "./contact.css";
import React from "react";

const ContactPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 💎");
  };

  return (
    <div className='body'>
      
      <div className='container'>
        {/* LEFT SIDE */}
        <div className='left'>
          <div className='overlay'></div>

          <div className='leftContent'>
            <h1 className='title'>Contact Us</h1>

            <p className='text'>
              We’d love to hear from you! Please reach out with any questions,
              comments, or to schedule a consultation.
            </p>

            <p>📞 +91 9876543210</p>
            <p>📧 jewellery@email.com</p>
            <p>📍 Bhopal, India</p>

           <p>
              🕒 Monday – Saturday: 9:00 AM – 7:00 PM
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='right'>
          <h2 className='heading'
          >Get in Touch</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required className='input' />
            <input type="email" placeholder="Your Email" required className='input' />
            <input type="text" placeholder="Subject" className='input' />
            <textarea placeholder="Message"className='textarea'></textarea>

            <button type="submit" className='button'>
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
