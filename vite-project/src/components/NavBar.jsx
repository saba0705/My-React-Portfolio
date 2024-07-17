import React from 'react';
import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import { Link, useLocation } from 'react-router-dom';

import '../styles/NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Your useEffect logic here
  }, []); // Empty dependency array means it runs once on mount

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="#home" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#portfolio" className="nav-links">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;


