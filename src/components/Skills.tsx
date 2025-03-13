
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { Code, Database, Wrench, Laptop } from 'lucide-react';

interface SkillItemProps {
  name: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        "Java",
        "Python (Data Science libraries: Pandas, NumPy, Matplotlib)",
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
        "Tailwind CSS"
      ]
    },
    {
      name: "Development Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        "VS Code",
        "Android Studio",
        "GitHub",
        "Git",
        "PlantUML"
      ]
    },
    {
      name: "Database Management",
      icon: <Database className="h-6 w-6" />,
      skills: [
        "Server database management with XAMPP",
        "MongoDB",
        "SQL",
        "Firebase"
      ]
    },
    {
      name: "Certificates",
      icon: <Laptop className="h-6 w-6" />,
      skills: [
        "Project Expo - 2023 under SSIP (06/2023)",
        "C.U.Shah Polytechnic, Surendranagar 609",
        "Other certificates (2)"
      ]
    }
  ];

  return (
    <AnimatedSection id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.name}
              name={category.name} 
              skills={category.skills}
              icon={category.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const SkillCategory: React.FC<{
  name: string;
  skills: string[];
  icon: React.ReactNode;
  delay?: number;
}> = ({ name, skills, icon, delay = 0 }) => {
  return (
    <div 
      className="glass rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
        {icon}
        {name}
      </h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <SkillItem 
            key={skill} 
            name={skill}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};

const SkillItem: React.FC<SkillItemProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-md transition-all duration-200 hover:bg-secondary/50">
      <span className="text-primary/70 text-sm">•</span>
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default Skills;
