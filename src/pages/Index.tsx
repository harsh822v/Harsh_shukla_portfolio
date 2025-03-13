
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import AnimatedProgrammer from '@/components/AnimatedProgrammer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "John Doe | Portfolio";
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen theme-transition">
        <Navbar />
        <div className="fixed top-5 right-5 z-50">
          <ThemeToggle />
        </div>
        <Hero />
        <AnimatedProgrammer />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <Contact />
        
        <footer className="py-8 bg-secondary/40 text-center text-sm text-muted-foreground theme-transition">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
