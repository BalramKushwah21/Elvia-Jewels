import "./contact.css";

export default function ContactPage() {
  return (
    <div className="container">

      <div className="glass-card">

        {/* LEFT */}
        <div className="left">
          <h1 className="heading">Contact Us</h1>

          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your e-mail" />
          <textarea placeholder="Your message"></textarea>

          <button>Send</button>
        </div>

        {/* RIGHT */}
        <div className="right">
          <h1 className="heading">Get in Touch</h1>

          <p className="desc">
            We’d love to hear from you! Please reach out with any questions,
            comments, or to schedule a consultation.
          </p>

          <div className="info">
            <p>📞 +91 9876543210</p>
            <p>📧 elviajewels@email.com</p>
            <p>📍 Bhopal, India</p>
            <p>🕒 Monday – Saturday: 9:00 AM – 7:00 PM</p>
          </div>
        </div>

      </div>

    </div>
  );
}