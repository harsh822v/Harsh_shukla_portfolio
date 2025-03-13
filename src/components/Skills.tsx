
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';

interface SkillProps {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "Tailwind CSS", level: 75 },
      ]
    },
    {
      name: "Development Tools",
      skills: [
        { name: "Android Studio", level: 75 },
        { name: "Github", level: 80 },
        { name: "VS Code", level: 85 },
        { name: "Plantuml", level: 70 },
      ]
    },
    {
      name: "Data Science",
      skills: [
        { name: "Pandas", level: 75 },
        { name: "NumPy", level: 70 },
        { name: "Matplotlib", level: 65 },
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "XAMPP", level: 80 },
        { name: "Server Database Management", level: 75 },
      ]
    },
    {
      name: "Certificates",
      skills: [
        { name: "Project Expo - 2023 under SSIP (06/2023)", level: 100 },
        { name: "C.U.Shah Polytechnic, Surendranagar 609", level: 100 },
      ]
    }
  ];

  return (
    <AnimatedSection id="skills" animation="fade-in-up">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name}
              className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <h3 className="text-xl font-medium mb-4">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    category={category.name} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const SkillBar: React.FC<SkillProps> = ({ name, level, category }) => {
  let baseColor = "bg-blue-200 dark:bg-blue-900/30";
  let fillColor = "bg-blue-500 dark:bg-blue-400";
  
  if (category === "Development Tools") {
    baseColor = "bg-purple-200 dark:bg-purple-900/30";
    fillColor = "bg-purple-500 dark:bg-purple-400";
  } else if (category === "Data Science") {
    baseColor = "bg-pink-200 dark:bg-pink-900/30";
    fillColor = "bg-pink-500 dark:bg-pink-400";
  } else if (category === "Database") {
    baseColor = "bg-green-200 dark:bg-green-900/30";
    fillColor = "bg-green-500 dark:bg-green-400";
  } else if (category === "Certificates") {
    baseColor = "bg-amber-200 dark:bg-amber-900/30";
    fillColor = "bg-amber-500 dark:bg-amber-400";
  }
  
  return (
    <div className="space-y-2 animate-fade-in" style={{animationDelay: `${Math.random() * 500}ms`}}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        {level <= 100 && level > 0 && (
          <span className="text-xs text-muted-foreground">{level}%</span>
        )}
      </div>
      {level <= 100 && level > 0 && (
        <div className={cn("h-2 rounded-full", baseColor)}>
          <div 
            className={cn("h-full rounded-full transition-all duration-1000", fillColor)}
            style={{ width: `${level}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default Skills;
