'use client';

import { NAV_LINKS } from '@/lib/constants/routes';
import { useScrollSpy } from '@/lib/hooks/useScrollSpy';
import { cn } from '@/lib/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

/**
 * Sticky navigation bar component with theme support
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isMounted, setIsMounted] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'testimonials', 'experience', 'contact']);

  // Initialize theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme') as 'light' | 'dark' | null;
    setTheme(stored || 'dark');
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  if (!isMounted) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'dark:bg-[#0A0E1A]/95 light:bg-white/95 backdrop-blur-md dark:border-b dark:border-[#1F2E4D]/30 light:border-b light:border-[#E5E7EB]/50'
          : 'dark:bg-transparent light:bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 md:w-10 md:h-10 border-2 dark:border-[#4A6FA8] light:border-[#4A6FA8] flex items-center justify-center rounded">
            <span className="text-sm md:text-base font-bold dark:text-[#4A6FA8] light:text-[#4A6FA8]">FR</span>
          </div>
          <span className="hidden md:inline text-xs md:text-sm font-bold dark:text-[#F5F7FA] light:text-[#0F1A2E] tracking-wider">
            FERNANDO ROSERO
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors duration-300',
                activeSection === link.href.slice(1)
                  ? 'dark:text-[#4A6FA8] light:text-[#4A6FA8] dark:border-b-2 light:border-b-2 dark:border-[#4A6FA8] light:border-[#4A6FA8] pb-1'
                  : 'dark:text-[#C5CED9] light:text-[#4B5563] dark:hover:text-[#2DD4BF] light:hover:text-[#4A6FA8]'
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg dark:hover:bg-[#1F2E4D]/30 light:hover:bg-[#E5E7EB]/30 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Moon size={20} className="dark:text-[#F59E0B] light:text-[#D97706]" />
            ) : (
              <Sun size={20} className="dark:text-[#F59E0B] light:text-[#D97706]" />
            )}
          </button>

          {/* Desktop CV Button */}
          <Button
            size="sm"
            variant="outline"
            className="hidden md:flex"
          >
            Descargar CV ↓
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg dark:hover:bg-[#1F2E4D]/30 light:hover:bg-[#E5E7EB]/30 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="dark:text-[#F5F7FA] light:text-[#0F1A2E]" />
            ) : (
              <Menu size={24} className="dark:text-[#F5F7FA] light:text-[#0F1A2E]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden dark:bg-[#141B2D] light:bg-[#F9FAFB] dark:border-b dark:border-[#1F2E4D] light:border-b light:border-[#E5E7EB]"
          >
            <div className="container py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={cn(
                    'text-sm font-medium transition-colors duration-300 py-2',
                    activeSection === link.href.slice(1)
                      ? 'dark:text-[#4A6FA8] light:text-[#4A6FA8]'
                      : 'dark:text-[#C5CED9] light:text-[#4B5563]'
                  )}
                >
                  {link.label}
                </a>
              ))}
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={handleNavClick}
              >
                Descargar CV ↓
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
