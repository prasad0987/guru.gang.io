import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "₹0",
      period: "/month",
      features: [
        "Access to free tutorials",
        "Basic coding challenges",
        "Community support",
        "Tech blogs & YouTube content"
      ],
      button: "Get Started"
    },
    {
      name: "Pro Plan",
      price: "₹499",
      period: "/month",
      features: [
        "Everything in Free",
        "Step-by-step Java & Full Stack courses",
        "Hands-on projects",
        "Priority email support",
        "Exclusive interview tips"
      ],
      button: "Upgrade to Pro"
    },
    {
      name: "Premium Plan",
      price: "₹999",
      period: "/month",
      features: [
        "Everything in Pro",
        "1-on-1 mentorship",
        "Mock interviews",
        "Resume & career guidance",
        "Certificate on course completion"
      ],
      button: "Go Premium"
    }
  ];

  return (
    <div className="pricing-page">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <p className="pricing-subtitle">Kickstart your tech journey with the right plan for you.</p>

      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="price">
              {plan.price}
              <span>{plan.period}</span>
            </p>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-btn">{plan.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
