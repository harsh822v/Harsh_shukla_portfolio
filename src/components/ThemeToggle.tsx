
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Switch } from "@/components/ui/switch";
import { cn } from '@/lib/utils';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center gap-2 transition-all duration-300">
      <Sun className={cn("h-4 w-4", theme === 'light' ? 'text-amber-500' : 'text-muted-foreground')} />
      <Switch 
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
      />
      <Moon className={cn("h-4 w-4", theme === 'dark' ? 'text-blue-400' : 'text-muted-foreground')} />
    </div>
  );
};

export default ThemeToggle;
