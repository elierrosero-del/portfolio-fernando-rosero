'use client';

import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants/routes';
import { useScrollSpy } from '@/lib/hooks/useScrollSpy';
import { cn } from '@/lib/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

/**
 * Sticky navigation bar component
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'testimonials', 'experience', 'contact']);

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-navy-default/80 backdrop-blur-md border-b border-steel-dark/30'
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold font-display text-gold-default hover:text-gold-light transition-colors"
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
                  ? 'text-gold-default'
                  : 'text-cream hover:text-gold-light'
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button size="sm" variant="outline">
            Descargar CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-cream hover:text-gold-default transition-colors"
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
            className="md:hidden bg-navy-mid border-b border-steel-dark/30"
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
                      ? 'text-gold-default'
                      : 'text-cream hover:text-gold-light'
                  )}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-steel-dark/30">
                <Button size="sm" variant="outline" className="w-full">
                  Descargar CV
                </Button>
              </div>
              {/* Social Links */}
              <div className="flex gap-3 pt-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-cream hover:text-gold-default transition-colors"
                    aria-label={social.name}
                  >
                    {/* Icon placeholder */}
                    <div className="w-5 h-5 bg-gold-default/20 rounded" />
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
