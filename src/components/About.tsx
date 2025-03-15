
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">About Me</h2>
          
          <div className="space-y-6 mt-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a passionate developer and designer with a focus on creating user-centered digital experiences. 
              With over 5 years of experience in the tech industry, I specialize in building responsive web applications
              that combine beautiful design with efficient functionality.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90">
              My objective is to leverage cutting-edge technologies to solve complex problems and create
              intuitive interfaces that delight users. I believe in the power of clean code, thoughtful design,
              and continuous learning to build solutions that make a positive impact.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source
              projects, or enjoying the outdoors. I'm always open to discussing new ideas and collaboration
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
