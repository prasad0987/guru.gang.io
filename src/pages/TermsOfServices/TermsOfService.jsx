import React from "react";
import "./TermsOfService.css";

const TermsOfService = () => {
  return (
    <div className="terms-page">
      <header className="terms-header">
        <h2>Terms of Service</h2>
        <p>Last updated: October 2025</p>
      </header>

      <section className="terms-section">
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing or using Gurubabu, you agree to comply with and be bound
          by these Terms of Service. If you do not agree, you should not use our
          services.
        </p>
      </section>

      <section className="terms-section">
        <h3>2. Services Provided</h3>
        <p>
          Gurubabu provides educational resources, coding tutorials, interview
          preparation, and career support. Some services are free, while others
          may require a paid subscription.
        </p>
      </section>

      <section className="terms-section">
        <h3>3. User Accounts</h3>
        <ul>
          <li>You must provide accurate and complete information.</li>
          <li>You are responsible for maintaining your account security.</li>
          <li>
            Gurubabu reserves the right to suspend or terminate accounts that
            violate our policies.
          </li>
        </ul>
      </section>

      <section className="terms-section">
        <h3>4. Payments & Subscriptions</h3>
        <p>
          Premium courses and mentorship services may require payment. All fees
          are non-refundable unless otherwise stated. Subscription terms will be
          clearly outlined at checkout.
        </p>
      </section>

      <section className="terms-section">
        <h3>5. Intellectual Property</h3>
        <p>
          All content, including text, videos, graphics, and logos, are the
          property of Gurubabu. Users may not reproduce, distribute, or create
          derivative works without prior written consent.
        </p>
      </section>

      <section className="terms-section">
        <h3>6. Prohibited Activities</h3>
        <ul>
          <li>Misusing the platform or engaging in fraudulent activity.</li>
          <li>Sharing login details with unauthorized users.</li>
          <li>
            Attempting to reverse-engineer, hack, or disrupt the platform.
          </li>
        </ul>
      </section>

      <section className="terms-section">
        <h3>7. Limitation of Liability</h3>
        <p>
          Gurubabu is not liable for indirect, incidental, or consequential
          damages arising from the use of our services. We provide content “as
          is” without warranties of any kind.
        </p>
      </section>

      <section className="terms-section">
        <h3>8. Changes to Terms</h3>
        <p>
          We may update these Terms of Service at any time. Continued use of the
          platform after updates indicates acceptance of the revised terms.
        </p>
      </section>

      <section className="terms-section">
        <h3>9. Contact Us</h3>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto:support@gurubabu.com">support@gurubabu.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
