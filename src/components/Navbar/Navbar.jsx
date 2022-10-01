import React, { useState } from "react";
// css styling
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const onClick = () => {
    setNav((prevState) => !prevState);
  };
  return (
    <nav className="navbar">
      <div className="brand-title">Brand Name</div>

      <a
        href="#"
        className={`toggle-button ${nav ? "active" : ""}`}
        onClick={onClick}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>

      <div className={`navbar-links ${nav ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
