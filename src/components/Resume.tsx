
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Download, Eye, ChevronRight, Calendar } from 'lucide-react';

interface ResumeItemProps {
  title: string;
  company: string;
  date: string;
  description: string[];
}

interface ResumeVersionProps {
  title: string;
  date: string;
  fileName: string;
  previewUrl: string;
}

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'versions'>('experience');
  
  const experienceItems: ResumeItemProps[] = [
    {
      title: "Senior Front-End Developer",
      company: "Tech Innovations Inc.",
      date: "Jan 2020 - Present",
      description: [
        "Lead a team of 5 developers to build and maintain multiple React applications.",
        "Implemented state management patterns that improved application performance by 40%.",
        "Collaborated with UX/UI designers to create responsive, accessible, and visually appealing interfaces.",
        "Mentored junior developers and conducted code reviews to ensure quality and consistent coding standards."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Web Solutions LLC",
      date: "Mar 2017 - Dec 2019",
      description: [
        "Developed and maintained RESTful APIs using Node.js and Express.",
        "Built responsive front-end interfaces with React and integrated them with backend services.",
        "Implemented authentication and authorization systems using JWT.",
        "Optimized database queries resulting in 30% faster load times."
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Digital Creations",
      date: "Jun 2016 - Aug 2016",
      description: [
        "Assisted in the development of responsive websites using HTML, CSS, and JavaScript.",
        "Designed and implemented UI components following the company's design system.",
        "Collaborated with the marketing team to optimize websites for search engines.",
        "Participated in daily stand-up meetings and sprint planning sessions."
      ]
    }
  ];

  const resumeVersions: ResumeVersionProps[] = [
    {
      title: "Latest Resume - Tech Focus",
      date: "Oct 2023",
      fileName: "john_doe_resume_tech_2023.pdf",
      previewUrl: "#"
    },
    {
      title: "Design-Oriented Resume",
      date: "Jul 2023",
      fileName: "john_doe_resume_design_2023.pdf",
      previewUrl: "#"
    },
    {
      title: "Full Stack Developer Resume",
      date: "Mar 2023",
      fileName: "john_doe_resume_fullstack_2023.pdf",
      previewUrl: "#"
    },
    {
      title: "Frontend Specialist Resume",
      date: "Dec 2022",
      fileName: "john_doe_resume_frontend_2022.pdf",
      previewUrl: "#"
    }
  ];

  return (
    <AnimatedSection id="resume" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Resume</h2>
        
        <div className="mt-8">
          {/* Tabs */}
          <div className="flex border-b border-border mb-6">
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors relative ${activeTab === 'experience' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
              {activeTab === 'experience' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors relative ${activeTab === 'versions' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setActiveTab('versions')}
            >
              Resume Versions
              {activeTab === 'versions' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
          </div>
          
          {/* Tab content */}
          {activeTab === 'experience' ? (
            <div className="space-y-6">
              {experienceItems.map((item) => (
                <ExperienceItem key={item.title} {...item} />
              ))}
              
              <div className="flex justify-center mt-8">
                <a 
                  href="#" 
                  className="flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-all font-medium"
                >
                  <Download size={16} className="mr-2" />
                  Download Full Resume
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {resumeVersions.map((version) => (
                <ResumeVersion key={version.title} {...version} />
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

const ExperienceItem: React.FC<ResumeItemProps> = ({ title, company, date, description }) => {
  return (
    <div className="glass rounded-xl p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <div className="flex items-center text-sm text-muted-foreground mt-1 md:mt-0">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
      </div>
      
      <h4 className="text-base font-medium text-muted-foreground mb-4">{company}</h4>
      
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex">
            <ChevronRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ResumeVersion: React.FC<ResumeVersionProps> = ({ title, date, fileName, previewUrl }) => {
  return (
    <div className="glass rounded-xl p-4 flex items-center justify-between">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
      
      <div className="flex items-center space-x-3">
        <a 
          href={previewUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <Eye size={16} className="mr-1" />
          <span>Preview</span>
        </a>
        
        <a 
          href={`#${fileName}`} 
          className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <Download size={16} className="mr-1" />
          <span>Download</span>
        </a>
      </div>
    </div>
  );
};

export default Resume;
