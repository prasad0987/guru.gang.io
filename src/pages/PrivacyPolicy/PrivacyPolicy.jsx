import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <h2>Privacy Policy</h2>
        <p>Last updated: October 2025</p>
      </header>

      <section className="privacy-section">
        <h3>1. Information We Collect</h3>
        <p>
          We may collect personal information such as your name, email address,
          and payment details when you register, subscribe, or interact with our
          services. We also collect non-personal information such as browser
          type, device information, and usage patterns.
        </p>
      </section>

      <section className="privacy-section">
        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To process payments and manage subscriptions.</li>
          <li>To communicate with you about updates, offers, and support.</li>
          <li>To analyze usage and enhance user experience.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3>3. Sharing of Information</h3>
        <p>
          We do not sell or rent your personal data to third parties. We may
          share information with service providers to deliver our services or
          comply with legal obligations.
        </p>
      </section>

      <section className="privacy-section">
        <h3>4. Cookies & Tracking</h3>
        <p>
          We use cookies and similar technologies to remember your preferences,
          analyze site traffic, and enhance your experience. You can manage
          cookie settings via your browser.
        </p>
      </section>

      <section className="privacy-section">
        <h3>5. Data Security</h3>
        <p>
          We implement appropriate security measures to protect your data from
          unauthorized access, alteration, disclosure, or destruction. However,
          no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section className="privacy-section">
        <h3>6. Children's Privacy</h3>
        <p>
          Our services are not intended for children under 13. We do not knowingly
          collect personal data from children.
        </p>
      </section>

      <section className="privacy-section">
        <h3>7. Your Rights</h3>
        <ul>
          <li>Access and review the information we hold about you.</li>
          <li>Request correction or deletion of your personal data.</li>
          <li>Opt-out of marketing communications.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3>8. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Continued use of
          our services indicates your acceptance of any changes.
        </p>
      </section>

      <section className="privacy-section">
        <h3>9. Contact Us</h3>
        <p>
          For any questions regarding this Privacy Policy, contact us at{" "}
          <a href="mailto:support@gurubabu.com">support@gurubabu.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
