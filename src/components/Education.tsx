
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Award, Calendar } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
}

const Education: React.FC = () => {
  const educationItems: EducationItemProps[] = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      duration: "2017 - 2019",
      location: "Stanford, CA",
      description: "Specialized in Artificial Intelligence and Human-Computer Interaction. Completed thesis on adaptive user interfaces for mobile applications.",
      achievements: [
        "Graduated with distinction",
        "Published research on user interface design patterns",
        "Teaching assistant for Introduction to Web Development"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Massachusetts Institute of Technology",
      duration: "2013 - 2017",
      location: "Cambridge, MA",
      description: "Focused on software engineering and web development. Participated in multiple hackathons and coding competitions.",
      achievements: [
        "Dean's List all semesters",
        "President of the Web Development Club",
        "Winner of the Annual Coding Competition"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Tech Prep Academy",
      duration: "2009 - 2013",
      location: "San Francisco, CA",
      description: "Advanced placement courses in Mathematics, Computer Science, and Physics.",
      achievements: [
        "Valedictorian",
        "Founded the school's first coding club",
        "State finalist in Mathematics Olympiad"
      ]
    }
  ];

  return (
    <AnimatedSection id="education">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-8 relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-0.5"></div>
          
          {/* Timeline entries */}
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <EducationItem 
                key={item.degree} 
                {...item} 
                isRight={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const EducationItem: React.FC<EducationItemProps & { isRight: boolean }> = ({
  degree,
  institution,
  duration,
  location,
  description,
  achievements,
  isRight
}) => {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute top-0 left-4 w-4 h-4 rounded-full bg-primary md:left-1/2 md:-ml-2"></div>
      
      {/* Content */}
      <div className={`ml-12 md:w-5/12 md:ml-0 md:${isRight ? 'mr-auto pr-12' : 'ml-auto pl-12'}`}>
        <div className="glass rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-medium">{degree}</h3>
            <div className="flex items-center text-sm text-muted-foreground mt-1 md:mt-0">
              <Calendar size={14} className="mr-1" />
              <span>{duration}</span>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <Award size={16} className="text-primary mr-2" />
            <h4 className="text-base font-medium">{institution}</h4>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{location}</span>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
          
          {achievements && achievements.length > 0 && (
            <div>
              <h5 className="text-sm font-medium mb-2">Key Achievements:</h5>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
