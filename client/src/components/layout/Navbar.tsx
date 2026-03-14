'use client';

import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants/routes';
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

  // Theme-based colors
  const bgNav = theme === 'dark' ? 'bg-[#0A0E1A]/80' : 'bg-white/80';
  const borderNav = theme === 'dark' ? 'border-[#1F2E4D]/30' : 'border-[#E5E7EB]/50';
  const bgMobile = theme === 'dark' ? 'bg-[#141B2D]' : 'bg-[#F3F4F6]';
  const borderMobile = theme === 'dark' ? 'border-[#1F2E4D]/30' : 'border-[#E5E7EB]/50';
  const textNav = theme === 'dark' ? 'text-[#F5F7FA]' : 'text-[#111827]';
  const textNavHover = theme === 'dark' ? 'hover:text-[#2DD4BF]' : 'hover:text-[#4A6FA8]';
  const btnBorder = theme === 'dark' ? 'border-[#1F2E4D]' : 'border-[#D1D5DB]';
  const btnBorderHover = theme === 'dark' ? 'hover:border-[#4A6FA8]' : 'hover:border-[#4A6FA8]';

  if (!isMounted) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? `${bgNav} backdrop-blur-md border-b ${borderNav}`
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold font-display text-[#4A6FA8] hover:text-[#3D5A8A] transition-colors"
        >
          FR
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                activeSection === link.href.slice(1)
                  ? 'text-[#4A6FA8]'
                  : cn(textNav, textNavHover)
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={cn(
              'p-2 rounded-md border transition-colors',
              btnBorder,
              btnBorderHover,
              textNav,
              'hover:text-[#4A6FA8]'
            )}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Button size="sm" variant="secondary">
            Descargar CV
          </Button>
        </div>

        {/* Mobile Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={cn(
            'md:hidden p-2 transition-colors',
            textNav,
            'hover:text-[#4A6FA8]'
          )}
          aria-label="Toggle theme"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'md:hidden p-2 transition-colors',
            textNav,
            'hover:text-[#4A6FA8]'
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={cn('md:hidden transition-colors', bgMobile, `border-b ${borderMobile}`)}
          >
            <div className="container py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={cn(
                    'block text-sm font-medium py-2 transition-colors',
                    activeSection === link.href.slice(1)
                      ? 'text-[#4A6FA8]'
                      : cn(textNav, textNavHover)
                  )}
                >
                  {link.label}
                </a>
              ))}
              <div className={cn('pt-3 space-y-3', `border-t ${borderMobile}`)}>
                <Button size="sm" variant="secondary" className="w-full">
                  Descargar CV
                </Button>
                <button
                  onClick={() => {
                    toggleTheme();
                    handleNavClick();
                  }}
                  className={cn(
                    'w-full px-4 py-2 text-sm font-medium rounded-md border transition-colors flex items-center justify-center gap-2',
                    btnBorder,
                    btnBorderHover,
                    textNav,
                    'hover:text-[#4A6FA8]'
                  )}
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                  {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
                </button>
              </div>
              {/* Social Links */}
              <div className={cn('flex gap-3 pt-3', `border-t ${borderMobile}`)}>
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'p-2 transition-colors',
                      textNav,
                      'hover:text-[#4A6FA8]'
                    )}
                    aria-label={social.name}
                  >
                    {/* Icon placeholder */}
                    <div className="w-5 h-5 bg-[#4A6FA8]/20 rounded" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
