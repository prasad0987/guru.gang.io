import React, { useState } from "react";
import "./HelpCenter.css";

const helpCategories = [
  {
    id: 1,
    title: "Getting Started",
    description: "Learn how to create an account, explore courses, and start learning.",
    articles: [
      "How to sign up for Gurubabu?",
      "Navigating the dashboard",
      "Starting your first course"
    ]
  },
  {
    id: 2,
    title: "Account & Profile",
    description: "Manage your account settings, profile details, and preferences.",
    articles: [
      "How to reset your password?",
      "Updating profile information",
      "Deleting your account"
    ]
  },
  {
    id: 3,
    title: "Billing & Subscription",
    description: "Understand pricing, subscription plans, and payment methods.",
    articles: [
      "How do I subscribe to premium?",
      "Accepted payment methods",
      "Refund and cancellation policy"
    ]
  },
  {
    id: 4,
    title: "Technical Support",
    description: "Troubleshoot technical issues and contact support.",
    articles: [
      "Troubleshooting login issues",
      "Fixing video playback problems",
      "Contacting Gurubabu support"
    ]
  }
];

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = helpCategories.map((cat) => ({
    ...cat,
    articles: cat.articles.filter((article) =>
      article.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  return (
    <div className="help-center">
      <header className="help-header">
        <h2>Help Center</h2>
        <p>Find answers to your questions or contact our support team.</p>

        <input
          type="text"
          placeholder="Search for help..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="help-search"
        />
      </header>

      <div className="help-categories">
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="help-card">
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
            <ul>
              {cat.articles.length > 0 ? (
                cat.articles.map((article, i) => (
                  <li key={i}>
                    <a href="./">{article}</a>
                  </li>
                ))
              ) : (
                <li className="no-results">No articles found</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
