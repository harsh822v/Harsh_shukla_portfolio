
import React, { useEffect } from 'react';

const Projects: React.FC = () => {
  useEffect(() => {
    // Initialize Lucide icons after component mounts
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);
  
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" alt="Career Paths Application" />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">Career Paths Application</h3>
              <p className="project-description">
                Developed an application aimed at guiding students in their post-10th and diploma in engineering educational
                decisions. The application helps students identify suitable fields, colleges, or schools based on their interests
                and test scores.
              </p>
              
              <div className="project-tags">
                <span className="project-tag">Java</span>
                <span className="project-tag">Android Studio</span>
                <span className="project-tag">XAMPP</span>
              </div>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Career Guidance: Provides tailored suggestions to help students choose fields aligned with their interests.</li>
                  <li>Educational Videos: Offers informational videos about various career options and their benefits.</li>
                  <li>Quiz-Based Recommendations: Based on a quiz that gauges student interests, the application recommends relevant schools, colleges, and courses.</li>
                </ul>
                <p>
                  This project addresses a common problem faced by students who lack guidance in making informed career
                  decisions, helping them avoid choices that might limit future opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
