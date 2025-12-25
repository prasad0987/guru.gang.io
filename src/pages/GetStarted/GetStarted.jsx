import React from "react";
import "./GetStarted.css";
// import heroImage from "../assets/hero1.png"; // optional hero image

const GetStarted = () => {
  return (
    <div className="getstarted-page">
      {/* Hero Section */}
      <section className="getstarted-hero">
        <div className="hero-content">
          <h1>Quick Start Your IT Journey with Guru Today!</h1>
          <p>
            {/*Learn Java, Full Stack Development, and boost your career with
            hands-on projects, interview support, and real-world guidance.*/}
            Quick start your Project in Cloud Computing, DevOps, and IT Infrastructure with practical learning, real projects, and expert guidance.
          </p>
          <a href="/contact" className="btn">Get Started Now</a>
        </div>
        <div className="hero-image">
          {/* <img src={heroImage} alt="Hero Illustration" /> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="getstarted-features">
        <h2>What You Will Get</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Step-by-Step Project Guidance</h3>
            {/* <p>Learn Java and Full Stack development from basics to advanced projects.</p> */}  
            <p>Guidance on developing projects using modern technologies, focusing on best practices and real-world applications.</p>
          </div>
          <div className="feature-card">
            <h3>Project Documentation</h3>
            {/* <p>Guidance on creating comprehensive project documentation and reports.</p> */}
            <p>Assistance with real-world projects, including architecture design, coding help, and deployment strategies.</p>
          </div>
          <div className="feature-card">
            {/* <h3>Real Projects</h3> */}
            <h3>Cloud Projects</h3>
            {/* <p>Build hands-on projects to showcase in your portfolio and gain experience.</p> */}
            <p>Helping you build and showcase real-world projects using modern technologies to strengthen your portfolio.</p>
          </div>
          <div className="feature-card">
            {/* <h3>Blogs & Tutorials</h3> */}
            <h3>Github Projects</h3>
           { /*<p>Access curated blogs, YouTube tutorials, and learning resources.</p> */}
            <p>Providing expert guidance on your projects, from planning and design to implementation and deployment.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="getstarted-cta">
        <h2>Ready to Take the Next Step?</h2>
        <a href="/contact" className="btn">Join Now</a>
      </section>
    </div>
  );
};

export default GetStarted;
