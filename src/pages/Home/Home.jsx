import React from "react";
import "./Home.css"; 
import heroImage from "../../asserts/hero2.png"; 

const Home = () => {
  return (
    <div className="home-page">

      {/* ---------- HERO SECTION ---------- */}
      <section className="hero">
        <div className="hero-text">
          <h1>Hi, I’m Guru Prasad </h1>
          <p>
            <strong>AWS Cloud Engineer | DevOps Enthusiast | IT Infrastructure Professional</strong>
            <br />
            
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn">Explore My Services</a>
            <a href="https://github.com/prasad0987" target="_blank" rel="noreferrer" className="btn btn-outline">
              Visit My GitHub
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Developer Illustration" />
        </div>
      </section>

{/* ---------- ABOUT SECTION ---------- */}
<section className="about" id="about">
  <h2>About Me</h2>
  <p>
    I am an aspiring AWS Cloud Engineer with hands-on knowledge of core AWS services such as EC2, IAM, VPC, S3, CloudWatch, and basic cloud security concepts. I am focused on building scalable, reliable, and cost-effective cloud solutions while continuously improving my cloud architecture skills.<br />
    Alongside cloud learning, I am developing strong DevOps skills, including Docker, Jenkins, CI/CD pipelines, Git, and basic automation concepts. I am passionate about streamlining deployments, improving system reliability, and supporting modern DevOps workflows.<br />
    I also bring solid experience in IT Infrastructure, with a strong background in Linux and Windows administration, Active Directory, networking, system troubleshooting, and end-user support. This foundation helps me understand real-world production environments and bridge traditional infrastructure with cloud and DevOps practices.<br />
    Overall, I am dedicated to continuous learning and growth in cloud computing and DevOps, aiming to contribute effectively to modern IT teams and projects.
  </p>
</section>

      {/* ---------- SERVICES SECTION ---------- */}
      <section className="services" id="services">
        <><h2>My Services</h2><div className="service-cards">
          <div className="service-card">
            <h3>AWS Cloud</h3>
            <p>EC2, IAM, VPC, S3, CloudWatch, CloudFormation, CodeCommit, CodeBuild, CodeDeploy, CodePipeline, Loadbalancer, AutoScaling</p>
          </div>
          <div className="service-card">
            <h3>DevOps</h3>
            <p>Git, Maven, Tomcat, Jenkins, CI/CD, Docker, Kubernetes, Ansible, Terraform, Monitoring</p>
          </div>
          <div className="service-card">
            <h3>IT Infra </h3>
            <p>Linux, Windows, Active Directory, Networking, Troubleshooting, End-user Support</p>
          </div>
          <div className="service-card">
            <h3>Code Languages</h3>
            <p>Java, JavaScript, SQL, HTML, CSS</p>
          </div>
        </div></>
      </section>

      {/* ---------- YOUTUBE / COMMUNITY SECTION ---------- */}
      <section className="youtube" id="youtube">
        <><h2>Join My IT Community</h2><p>
          I regularly update and document my projects with detailed walkthroughs on my GitHub account.
          <strong> GitHub account </strong>
        </p><a href="https://github.com/prasad0987" target="_blank" rel="noreferrer" className="btn">
            Visit My GitHub
          </a></>
      </section>

      {/* ---------- CALL TO ACTION ---------- */}
      <section className="cta-footer">
        <h2>Let’s Grow Together 🚀</h2>
        <p>We build robust IT projects using modern cloud and DevOps practices.</p>
        <a href="/contact" className="btn">Contact Me</a>
      </section>

    </div>
  );
};

export default Home;
