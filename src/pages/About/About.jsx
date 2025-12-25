import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Me</h1>
        <p>
          {/*I’m a passionate <strong>Java Full Stack Developer</strong> dedicated to
          helping students and professionals grow in their careers with practical
          knowledge, real-world projects, and interview support.*/}
          I am an IT professional with a strong foundation in Cloud Computing, DevOps, and IT Infrastructure.
          My technical skill set includes hands-on knowledge of AWS and Azure cloud services, DevOps tools, 
          Linux and Windows administration, and networking fundamentals.
        </p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-card">
          <h2>Who I Am</h2>
          <p>
            {/*With experience in <b>Java, Spring Boot, Hibernate, MySQL, React.js,
            and Full Stack Development</b>, I’ve worked on multiple projects
            that solve real problems. I also mentor students and professionals
            preparing for IT jobs, guiding them with hands-on coding, system
            design, and interview skills.*/}
            I work with AWS services such as EC2, IAM, VPC, S3, CloudWatch, Auto Scaling, Load Balancers, and Route 53, along with Azure Virtual Machines, Virtual Networks, and Load Balancers. In the DevOps domain, I use tools like Git, GitHub, Jenkins, Maven, Docker, Tomcat, Ansible, Terraform, and CI/CD pipelines to support automation and application deployment.
            I also have strong skills in Linux and Windows Server, Active Directory, VMware, networking (LAN, DNS, DHCP, IP addressing), and monitoring server rooms and IT assets. My database and collaboration tools include MySQL, SQL, Jira, and Office 365 administration.
          </p>
        </div>

        <div className="about-card">
          <h2>What I Do</h2>
          <ul>
           {/* <li>🚀 Teach **Java & Full Stack Development** step by step.</li>
            <li>🎯 Provide **Interview & Job Support** with mock sessions.</li>
            <li>✍️ Share knowledge through **blogs, videos & tutorials**.</li>
            <li>💡 Help build **real-world projects** to boost portfolios.</li> */}
            <li>☁️ Build and manage cloud infrastructure using AWS and Azure services.</li>
            <li>⚙️ Implement DevOps practices with tools like Jenkins, Docker, and Ansible.</li>
            <li>🖥️ Administer Linux and Windows servers, ensuring system reliability.</li>
            <li>🌐 Manage networking components and IT infrastructure for optimal performance.</li>

          </ul>
        </div>

        <div className="about-card">
          <h2>My Mission</h2>
          <p>
            {/*To empower students and working professionals by providing 
            <b>practical, industry-level learning</b> that builds confidence 
            and helps them land the right opportunities.*/}
            To continuously enhance my expertise in cloud computing, DevOps, and IT infrastructure,
            while contributing to innovative projects that drive efficiency and reliability in IT environments.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Want to Learn & Grow With Me?</h2>
        <p>
          {/*Join my journey — explore my courses, read my blogs, or connect with me
          for career guidance and interview preparation.*/}
          Feel free to reach out if you’re interested in collaborating on cloud or DevOps projects, or if you have any questions about my experience and skills.
        </p>
        <a href="/contact" className="btn">Get in Touch</a>
      </section>
    </div>
  );
};

export default About;
