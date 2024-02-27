import React, { useState } from "react";
import "./Navbar.css"; // import CSS file for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? "active" : ""}`}></div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Gallery
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Contact
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
