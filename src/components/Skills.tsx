
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 90 },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 85 },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 80 },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 75 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 80 },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 80 },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 70 },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", level: 65 },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 80 },
      ]
    },
    {
      name: "Design",
      skills: [
        { name: "UI/UX Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 85 },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 90 },
        { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", level: 80 },
        { name: "Responsive Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
        { name: "Design Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg", level: 85 },
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 85 },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 70 },
        { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", level: 75 },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", level: 65 },
        { name: "Agile Methodologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg", level: 85 },
      ]
    }
  ];

  const activeSkills = skillCategories.find(category => category.name === activeCategory)?.skills || [];

  return (
    <AnimatedSection id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Tech Stack</h2>
        
        <div className="flex justify-center my-8">
          <ToggleGroup type="single" value={activeCategory} onValueChange={(value) => value && setActiveCategory(value)}>
            {skillCategories.map((category) => (
              <ToggleGroupItem key={category.name} value={category.name} variant="outline" 
                className={cn(
                  "px-4 py-2 rounded-full text-sm", 
                  activeCategory === category.name ? "bg-primary text-primary-foreground" : ""
                )}>
                {category.name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
          {activeSkills.map((skill) => (
            <div key={skill.name} className="glass p-5 rounded-xl flex flex-col items-center text-center transition-all hover:scale-105">
              <div className="rounded-full h-16 w-16 flex items-center justify-center bg-background mb-4">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-base font-medium">{skill.name}</h3>
              <div className="w-full mt-2">
                <div className="h-1.5 w-full bg-secondary/50 rounded-full">
                  <div 
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-xs text-muted-foreground mt-1 text-right">{skill.level}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
