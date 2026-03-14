'use client';

import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export type Theme = 'light' | 'dark';

export interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

/**
 * Hook to access theme context
 */
export function useTheme(): UseThemeReturn {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
