
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in-up' | 'fade-in' | 'scale-in';
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in-up',
  id
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "section-padding overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "opacity-0",
          isVisible && `animate-${animation}`,
        )}
        style={{
          animationDelay: `${delay}ms`,
          animationFillMode: 'forwards'
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;
