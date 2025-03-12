
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface SkillProps {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Next.js", level: 75 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 80 },
        { name: "Python", level: 70 },
        { name: "GraphQL", level: 65 },
        { name: "MongoDB", level: 80 },
      ]
    },
    {
      name: "Design",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Design Systems", level: 85 },
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "AWS", level: 65 },
        { name: "Agile Methodologies", level: 85 },
      ]
    }
  ];

  return (
    <AnimatedSection id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name}
              className="glass rounded-xl p-6"
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
  let baseColor = "bg-blue-200";
  let fillColor = "bg-blue-500";
  
  if (category === "Backend") {
    baseColor = "bg-purple-200";
    fillColor = "bg-purple-500";
  } else if (category === "Design") {
    baseColor = "bg-pink-200";
    fillColor = "bg-pink-500";
  } else if (category === "Tools & Others") {
    baseColor = "bg-green-200";
    fillColor = "bg-green-500";
  }
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className={cn("h-2 rounded-full", baseColor)}>
        <div 
          className={cn("h-full rounded-full transition-all duration-1000", fillColor)}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default Skills;
