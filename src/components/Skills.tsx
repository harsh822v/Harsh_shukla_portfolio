
import React from 'react';
import { cn } from '@/lib/utils';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">Programming Languages</h3>
            <div className="skills-list">
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">Java</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-progress language-bg">
                  <div className="skill-progress-bar language-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">Python</span>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-progress language-bg">
                  <div className="skill-progress-bar language-fill" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">Development Tools</h3>
            <div className="skills-list">
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">Android Studio</span>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-progress tools-bg">
                  <div className="skill-progress-bar tools-fill" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">XAMPP</span>
                  <span className="skill-percentage">70%</span>
                </div>
                <div className="skill-progress tools-bg">
                  <div className="skill-progress-bar tools-fill" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">Data Science</h3>
            <div className="skills-list">
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">Pandas</span>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-progress datascience-bg">
                  <div className="skill-progress-bar datascience-fill" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">NumPy</span>
                  <span className="skill-percentage">70%</span>
                </div>
                <div className="skill-progress datascience-bg">
                  <div className="skill-progress-bar datascience-fill" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">Matplotlib</span>
                  <span className="skill-percentage">65%</span>
                </div>
                <div className="skill-progress datascience-bg">
                  <div className="skill-progress-bar datascience-fill" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">Database</h3>
            <div className="skills-list">
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">Database Management</span>
                  <span className="skill-percentage">70%</span>
                </div>
                <div className="skill-progress database-bg">
                  <div className="skill-progress-bar database-fill" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
