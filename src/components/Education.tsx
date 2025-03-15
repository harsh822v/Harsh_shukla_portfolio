
import React, { useEffect } from 'react';

const Education: React.FC = () => {
  useEffect(() => {
    // Initialize Lucide icons after component mounts
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);
  
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="timeline">
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          {/* Timeline entries */}
          <div className="timeline-entries">
            <div className="timeline-entry">
              {/* Timeline dot */}
              <div className="timeline-dot"></div>
              
              {/* Content */}
              <div className="timeline-content right">
                <div className="education-card">
                  <div className="education-header">
                    <h3 className="degree">Bachelor of Engineering (B.E.)</h3>
                    <div className="education-date">
                      <i data-lucide="calendar"></i>
                      <span>2023-2026</span>
                    </div>
                  </div>
                  
                  <div className="institution-info">
                    <i data-lucide="award"></i>
                    <h4 className="institution">Government Engineering College, Dahod (GTU)</h4>
                    <span className="location-separator">•</span>
                    <span className="location">Dahod, Gujarat</span>
                  </div>
                  
                  <p className="education-description">3rd Semester | CGPA: 7.22</p>
                </div>
              </div>
            </div>
            
            <div className="timeline-entry">
              {/* Timeline dot */}
              <div className="timeline-dot"></div>
              
              {/* Content */}
              <div className="timeline-content left">
                <div className="education-card">
                  <div className="education-header">
                    <h3 className="degree">Diploma in Engineering</h3>
                    <div className="education-date">
                      <i data-lucide="calendar"></i>
                      <span>Completed in 2023</span>
                    </div>
                  </div>
                  
                  <div className="institution-info">
                    <i data-lucide="award"></i>
                    <h4 className="institution">C.U. Shah Polytechnic College, Wadhwan (GTU)</h4>
                    <span className="location-separator">•</span>
                    <span className="location">Wadhwan, Gujarat</span>
                  </div>
                  
                  <p className="education-description">CGPA: 8.67</p>
                </div>
              </div>
            </div>
            
            <div className="timeline-entry">
              {/* Timeline dot */}
              <div className="timeline-dot"></div>
              
              {/* Content */}
              <div className="timeline-content right">
                <div className="education-card">
                  <div className="education-header">
                    <h3 className="degree">Secondary Education (10th)</h3>
                    <div className="education-date">
                      <i data-lucide="calendar"></i>
                      <span>2020</span>
                    </div>
                  </div>
                  
                  <div className="institution-info">
                    <i data-lucide="award"></i>
                    <h4 className="institution">Pragati School</h4>
                    <span className="location-separator">•</span>
                    <span className="location">Surendranagar, Gujarat</span>
                  </div>
                  
                  <p className="education-description">Grade: 72.78%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
