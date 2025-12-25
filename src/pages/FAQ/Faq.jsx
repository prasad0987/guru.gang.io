import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "What is V GURU?",
    answer:
      "V GURU is a platform to kickstart your tech journey with tutorials, coding challenges, and career resources."
  },
  {
    question: "Is V GURU free to use?",
    answer:
      "Yes! You can access free tutorials and resources. We also offer premium plans for advanced courses and mentorship."
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach out via our Contact page or email us at support@gurubabu.com."
  },
  {
    question: "Can I contribute content?",
    answer:
      "Absolutely! We welcome developers to share tutorials, articles, and open-source contributions with the community."
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes, upon completing certain structured learning paths, we provide verified certificates."
  },
  // ---------------- Services Related ----------------
  {
    question: "What Online Courses & Training do you offer?",
    answer:
      "We provide step-by-step learning in Java, Full Stack Development, and more, with hands-on projects designed for real-world application."
  },
  {
    question: "Do you provide Interview & Job Support?",
    answer:
      "Yes! We offer resume guidance, mock interviews, and real-world career tips to help you land your dream job."
  },
  {
    question: "What is covered in Full Stack Development training?",
    answer:
      "Our Full Stack Development program includes building real projects using Java, Spring Boot, React.js, databases, and modern DevOps tools for a strong portfolio."
  },
  {
    question: "Do you share knowledge outside the platform?",
    answer:
      "Yes, we regularly publish Tech Blogs and YouTube tutorials to help students and developers learn faster and stay updated."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
