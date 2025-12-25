import React, { useState, useRef } from "react";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa"; 
import vg_logo from "../asserts/vg_logo.png";
import emailjs from "@emailjs/browser";
import "../Footer.css";

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin />
    </a>
    <a href="https://www.instagram.com/vguru_tech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FaInstagram />
    </a>
    <a href="https://www.youtube.com/@V_Guru" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <FaYoutube />
    </a>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef();
  const handleSubscribe = (e) => {
    e.preventDefault();
    setStatusMessage("");

    const subscriberEmail = formRef.current.subscriber_email.value;

    // Set a custom message for newsletter request
    formRef.current.message.value = `New Newsletter Request from: ${subscriberEmail}`;

    emailjs
      .sendForm(
        "service_psz49cp",     // Your Service ID
        "template_u4tvlug",    // Your Template ID
        formRef.current,
        "KYcN1-awY_lSg1PHJ"    // Your Public Key
      )
      .then(
        () => {
          setStatusMessage(`Subscribed successfully: ${subscriberEmail}`);
          setEmail("");
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setStatusMessage("Subscription failed. Try again.");
        }
      );
  };

  return (
    <footer className="main-footer">
      <div className="footer-content-container">
        {/* Branding */}
        <div className="footer-column footer-brand">
          <img src={vg_logo} alt="Guru Logo" className="footer-logo" />
          <p className="footer-tagline">Kickstart Your Tech Journey Today!</p>
          <SocialLinks />
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/help-center">Help Center</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest tech news.</p>
          <form ref={formRef} className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              name="subscriber_email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input type="hidden" name="message" />
            <button type="submit" className="btn-subscribe">Subscribe</button>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Gurubabu. All rights reserved.</p>
        <p><a href="/privacy">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
