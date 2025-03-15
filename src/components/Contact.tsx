
import React, { useEffect } from 'react';

const Contact: React.FC = () => {
  useEffect(() => {
    // Initialize Lucide icons after component mounts
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);
  
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <p className="contact-description">
            Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, opportunities, or just to connect.
          </p>
          
          <div className="social-links">
            <a href="mailto:harsh206090307117@gmail.com" className="social-link">
              <i data-lucide="mail"></i>
              <span>Email</span>
            </a>
            <a href="https://github.com/harsh822v" target="_blank" className="social-link">
              <i data-lucide="github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/harsh-shukla-3230a4325/" target="_blank" className="social-link">
              <i data-lucide="linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div className="contact-form-container">
            <h3 className="form-title">Send me a message</h3>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="button primary-button submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
