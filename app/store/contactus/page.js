"use client";
import React from "react";

const ContactPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 💎");
  };

  return (
    <div style={styles.body}>
      {}
      <div style={styles.container}>

        {/* LEFT SIDE */}
        <div style={styles.left}>
          <div style={styles.overlay}></div>

          <div style={styles.leftContent}>
            <h1 style={styles.title}>Contact Us</h1>

            <p style={styles.text}>
              We’d love to hear from you! Please reach out with any questions,
              comments, or to schedule a consultation.
            </p>

            <p>📞 +91 9876543210</p>
            <p>📧 jewellery@email.com</p>
            <p>📍 Bhopal, India</p>

            <p style={{ marginTop: "20px" }}>
              🕒 Monday – Saturday: 9:00 AM – 7:00 PM
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.right}>
          <h2 style={styles.heading}>Get in Touch</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required style={styles.input} />
            <input type="email" placeholder="Your Email" required style={styles.input} />
            <input type="text" placeholder="Subject" style={styles.input} />
            <textarea placeholder="Message" style={styles.textarea}></textarea>

            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
const styles = {
  body: {
    margin: 0,
    fontFamily: "Segoe UI, sans-serif",
    background: "#e9e6e2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  container: {
    width: "1100px",
    display: "flex",
    background: "#f7f4f0",
    borderRadius: "25px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },

  left: {
  width: "50%",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "50px",
  color: "white",
  position: "relative",
},
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(212, 175, 55, 0.4)",
  },

  leftContent: {
    position: "relative",
    zIndex: 2,
  },

  title: {
    fontSize: "50px",
    fontWeight: "300",
    marginBottom: "20px",
  },

  text: {
    lineHeight: "1.7",
    marginBottom: "20px",
  },

  right: {
    width: "50%",
    padding: "50px",
  },

  heading: {
    textAlign: "center",
    fontSize: "35px",
    marginBottom: "30px",
    color: "#6b5b4b",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    background: "#eee",
    fontSize: "18px",
  },

  textarea: {
  width: "100%",
  height: "160px",     
  padding: "18px",     
  borderRadius: "14px",
  border: "1px solid #d6d3ce",
  background: "#efefef",
  marginBottom: "18px",
  fontSize: "20px",    
  fontFamily: "Segoe UI",
},
  button: {
    display: "block",
    margin: "20px auto",
    padding: "12px 35px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(45deg,#b89658,#e3c78b)",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};