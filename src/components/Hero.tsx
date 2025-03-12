
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <p className="text-sm md:text-base text-muted-foreground font-mono">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
              John Doe
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-muted-foreground mt-2">
              <span className="inline-block">Full Stack Developer & Designer</span>
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '500ms' }}>
            I create elegant, performant, and user-friendly digital experiences with meticulous attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '700ms' }}>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-all font-medium"
            >
              Get in touch
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all font-medium"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-primary opacity-70" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
