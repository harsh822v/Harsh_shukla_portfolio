
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-4 right-4 z-50 p-3 rounded-full transition-all duration-300",
        "bg-primary/10 hover:bg-primary/20 text-primary",
        "backdrop-blur-md border border-border shadow-lg",
        "animate-fade-in-up"
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
