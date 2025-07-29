import { useState, useEffect } from 'react';

// Custom hook for dark mode management
export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(prev => !prev);

  return { isDark, toggleDarkMode };
};
