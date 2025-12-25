import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const RECEIVER_EMAIL = "gurubabuvallam@gmail.com"; // your inbox/email in EmailJS template

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage(""); // clear previous message

    const senderEmail = form.current.user_email.value; // user's email from form
    console.log("Sender Email:", senderEmail);
    console.log("Receiver Email:", RECEIVER_EMAIL);

    emailjs
      .sendForm(
        "service_psz49cp",   // Your Service ID
        "template_u4tvlug",  // Your Template ID
        form.current,
        "KYcN1-awY_lSg1PHJ"  // Your Public Key
      )
      .then(
        (result) => {
          setStatusMessage(
            `✅ Message sent successfully from ${senderEmail} to ${RECEIVER_EMAIL}!`
          );
          console.log("EmailJS Success:", result.text);
          form.current.reset();
        },
        (error) => {
          setStatusMessage(
            `❌ Something went wrong sending from ${senderEmail} to ${RECEIVER_EMAIL}.`
          );
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Have a question or want to work together? Fill out the form below 👇</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            required
          />
        </div>

        <button type="submit" className="btn_sendmsg">
          Send Message
        </button>
      </form>

      {/* Status message */}
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default Contact;
