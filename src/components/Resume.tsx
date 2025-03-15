
import React, { useState, useEffect } from 'react';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  
  useEffect(() => {
    // Initialize Lucide icons after component mounts
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-container">
          {/* Tabs */}
          <div className="resume-tabs">
            <button 
              className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`} 
              data-tab="experience"
              onClick={() => handleTabClick('experience')}
            >
              Experience
            </button>
            <button 
              className={`tab-button ${activeTab === 'versions' ? 'active' : ''}`} 
              data-tab="versions"
              onClick={() => handleTabClick('versions')}
            >
              Resume Versions
            </button>
          </div>
          
          {/* Tab content */}
          <div 
            className={`tab-content ${activeTab === 'experience' ? '' : 'hidden'}`} 
            id="experience-tab"
          >
            <div className="experience-items">
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="job-title">Android Developer (Project)</h3>
                  <div className="experience-date">
                    <i data-lucide="calendar"></i>
                    <span>2023</span>
                  </div>
                </div>
                
                <h4 className="company-name">Career Paths Application</h4>
                
                <ul className="experience-description">
                  <li>
                    <i data-lucide="chevron-right"></i>
                    <span>Developed an Android application for career guidance using Java.</span>
                  </li>
                  <li>
                    <i data-lucide="chevron-right"></i>
                    <span>Implemented database functionality using XAMPP.</span>
                  </li>
                  <li>
                    <i data-lucide="chevron-right"></i>
                    <span>Created an interactive quiz system to gauge student interests.</span>
                  </li>
                  <li>
                    <i data-lucide="chevron-right"></i>
                    <span>Integrated educational video resources within the application.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="download-resume">
              <a href="Resume.pdf" className="button primary-button" download="Resume.pdf">
                <i data-lucide="download"></i>
                Download Full Resume
              </a>
            </div>
          </div>
          
          <div 
            className={`tab-content ${activeTab === 'versions' ? '' : 'hidden'}`} 
            id="versions-tab"
          >
            <div className="resume-versions">
              <div className="version-card">
                <div>
                  <h3 className="version-title">Latest Resume</h3>
                  <p className="version-date">Oct 2023</p>
                </div>
                
                <div className="version-actions">
                  <a href="#" className="version-link">
                    <i data-lucide="eye"></i>
                    <span>Preview</span>
                  </a>
                  
                  <a href="#" className="version-link">
                    <i data-lucide="download"></i>
                    <span>Download</span>
                  </a>
                </div>
              </div>
              
              <div className="version-card">
                <div>
                  <h3 className="version-title">Technical Resume</h3>
                  <p className="version-date">Aug 2023</p>
                </div>
                
                <div className="version-actions">
                  <a href="#" className="version-link">
                    <i data-lucide="eye"></i>
                    <span>Preview</span>
                  </a>
                  
                  <a href="#" className="version-link">
                    <i data-lucide="download"></i>
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
