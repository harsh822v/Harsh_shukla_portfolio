
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Harsh Shukla | Portfolio";
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Contact />
      
      <footer className="py-8 bg-secondary/40 dark:bg-secondary/20 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Shukla Harsh Pravinbhai. All rights reserved.</p>
          <p className="mt-2">3/9/36, Ram Society, Partynagar-1, Dalmill Road, Surendranagar, Gujarat-363001</p>
          <p className="mt-1">+91 9601026883 | harsh206090307117@gmail.com</p>
        </div>
      </footer>
      
      <ThemeToggle />
      <Toaster />
    </div>
  );
};

export default Index;
