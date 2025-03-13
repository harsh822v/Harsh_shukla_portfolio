
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const AnimatedProgrammer: React.FC = () => {
  const programmerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      if (programmerRef.current) {
        const rect = programmerRef.current.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateRotation = () => {
    // Gentle rotation based on scroll position
    return (scrollPosition % 360) / 40;
  };

  const calculateMovement = () => {
    // Move slightly up and down based on scroll
    return Math.sin(scrollPosition / 300) * 20;
  };

  return (
    <div 
      ref={programmerRef}
      className={cn(
        "fixed right-10 bottom-40 z-10 w-40 h-40 transition-all duration-500 opacity-0",
        isVisible && "opacity-100"
      )}
      style={{
        transform: `translateY(${calculateMovement()}px) rotate(${calculateRotation()}deg)`,
      }}
    >
      <div className="relative w-full h-full">
        {/* Programmer SVG silhouette */}
        <div className="absolute inset-0 w-full h-full">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Computer/Desk */}
            <rect x="20" y="70" width="60" height="10" className="fill-primary" />
            <rect x="30" y="50" width="40" height="20" className="fill-secondary" />
            
            {/* Character */}
            <circle cx="50" cy="35" r="10" className="fill-primary" /> {/* Head */}
            <rect x="45" y="45" width="10" height="20" className="fill-primary" /> {/* Body */}
            
            {/* Arms coding - animated */}
            <g className="animate-float">
              <rect x="35" y="48" width="10" height="5" className="fill-primary" />
              <rect x="55" y="48" width="10" height="5" className="fill-primary" />
            </g>
            
            {/* Code bubbles */}
            <g className="animate-pulse origin-bottom">
              <circle cx="25" cy="25" r="3" className="fill-accent" />
              <circle cx="35" cy="15" r="2" className="fill-accent" />
              <circle cx="60" cy="20" r="4" className="fill-accent" />
              <circle cx="75" cy="30" r="3" className="fill-accent" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProgrammer;
