import React, { useState } from "react";
import { Link } from "react-router-dom";
import vg_logo from "../asserts/vg_logo.png";
import "../Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      {/* Logo */}
      <div className="logo">
        <img src={vg_logo} alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-items">
      {/* Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </div>
      {/* Button */}
      <Link to="/get-started" className="btn">Get Started</Link>
    </nav>
  );
};

export default Navbar;
