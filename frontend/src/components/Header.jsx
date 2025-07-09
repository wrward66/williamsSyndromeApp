import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          {/* Left side (Home) */}
          <div className="left-side">
            <Link to="/" className="home-link">
              Williams Syndrome
            </Link>
          </div>

          {/* Right side (Navigation) */}
          <nav className="nav">
            <Link to="/" className="home-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
