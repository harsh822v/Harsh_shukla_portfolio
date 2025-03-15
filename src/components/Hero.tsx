
import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  useEffect(() => {
    // Initialize Lucide icons after component mounts
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);
  
  return (
    <section className="hero">
      <div className="bg-effects">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="fade-in" style={{ animationDelay: '300ms' }}>
            <p className="subtitle">Hello, I'm</p>
            <h1 className="title">Shukla Harsh Pravinbhai</h1>
            <h2 className="subtitle-role">Engineering Student</h2>
          </div>
          
          <p className="hero-description fade-in" style={{ animationDelay: '500ms' }}>
            I'm a student focused on Java, Python, and Android development seeking opportunities to apply my education in real-world scenarios.
          </p>
          
          <div className="hero-buttons fade-in" style={{ animationDelay: '700ms' }}>
            <a href="#contact" className="button primary-button">Get in touch</a>
            <a href="#about" className="button secondary-button">Learn more</a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <a href="#about" aria-label="Scroll down">
          <i data-lucide="chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
