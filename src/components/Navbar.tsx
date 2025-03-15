
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    // Initialize Lucide icons for navbar after component mounts
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <header className="navbar">
      <div className="container">
        <a href="#" className="logo">Harsh Portfolio</a>

        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="mobile-menu-button" aria-label="Toggle menu" onClick={toggleMobileMenu}>
          <i data-lucide="menu"></i>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-container">
          <a href="#about" className="mobile-menu-item" onClick={closeMobileMenu}>About</a>
          <a href="#skills" className="mobile-menu-item" onClick={closeMobileMenu}>Skills</a>
          <a href="#projects" className="mobile-menu-item" onClick={closeMobileMenu}>Projects</a>
          <a href="#education" className="mobile-menu-item" onClick={closeMobileMenu}>Education</a>
          <a href="#resume" className="mobile-menu-item" onClick={closeMobileMenu}>Resume</a>
          <a href="#contact" className="mobile-menu-item" onClick={closeMobileMenu}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
