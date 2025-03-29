'use client';

import { Moon, Sun } from "lucide-react";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Moon
          className={`absolute inset-0 h-6 w-6 transition-all duration-500 ease-in-out transform 
            ${theme === 'dark' 
              ? 'opacity-0 scale-75 rotate-90' 
              : 'opacity-100 scale-100 rotate-0'
            } text-yellow-500`}
        />
        <Sun
          className={`absolute inset-0 h-6 w-6 transition-all duration-500 ease-in-out transform 
            ${theme === 'dark' 
              ? 'opacity-100 scale-100 rotate-0' 
              : 'opacity-0 scale-75 -rotate-90'
            } text-yellow-500`}
        />
      </div>
    </button>
  );
}
