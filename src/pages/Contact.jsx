import "./Contact.css";
import { FaUser, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
 <div className="contact-page">
  <div className="contact-container">
    <span className="contact-badge">Contact Us</span>

    <h1 className="font-bold">Let's Get In Touch.</h1>

    <p className="contact-text">
      Or just reach out manually to us at{" "}
      <a href="mailto:contact@rentroo.com">contact@rentroo.com</a>
    </p>

    <form className="contact-form">
      <div className="form-group">
        <label>Full Name</label>
        <div className="input-box">
          <FaUser className="input-icon" />
          <input type="text" placeholder="Enter your full name" />
        </div>
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <div className="input-box">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Enter your email address" />
        </div>
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea
          rows="3"
          placeholder="Enter your message"
        ></textarea>
      </div>

      <button className="submit-btn">
        Submit Form →
      </button>
    </form>
  </div>
</div>
  );
};

export default Contact;