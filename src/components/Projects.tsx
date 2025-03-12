
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, user authentication, cart functionality, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark mode, and a custom CMS for easily updating content.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team assignments, and progress tracking. Built with React, Firebase, and Material UI.",
      tags: ["React", "Firebase", "Material UI", "Context API"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays current conditions and forecasts for multiple locations. Integrates with weather APIs and features data visualization.",
      tags: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      liveUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <AnimatedSection id="projects" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const ProjectCard: React.FC<ProjectProps & { delay?: number }> = ({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  repoUrl,
  delay = 0
}) => {
  return (
    <div className="glass group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 z-10"></div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform group-hover:scale-105 duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-6 flex space-x-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-primary hover:underline"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-primary hover:underline"
            >
              <Github size={16} />
              <span>Repository</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
