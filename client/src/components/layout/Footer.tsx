'use client';

import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants/routes';
import { personalData } from '@/lib/data/personal';
import { cn } from '@/lib/utils/cn';
import { Mail, MapPin, Phone } from 'lucide-react';

/**
 * Footer component with 4 columns
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-mid border-t border-steel-dark/30">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-display text-gold-default">
              Fernando Rosero
            </h3>
            <p className="text-sm text-steel-light leading-relaxed">
              {personalData.bio}
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded border border-steel-dark hover:border-gold-default bg-navy-panel hover:bg-gold-default/10 flex items-center justify-center text-cream hover:text-gold-default transition-all duration-200"
                  aria-label={social.name}
                  title={social.name}
                >
                  {/* Icon placeholder */}
                  <div className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-cream mb-4 font-mono">
              Navegación
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-steel-light hover:text-gold-default transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-semibold text-cream mb-4 font-mono">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-steel-light hover:text-gold-default transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-steel-light hover:text-gold-default transition-colors">
                  Consultoría
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-steel-light hover:text-gold-default transition-colors">
                  Auditoría
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-steel-light hover:text-gold-default transition-colors">
                  Análisis Financiero
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-cream mb-4 font-mono">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold-default flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-sm text-steel-light hover:text-gold-default transition-colors break-all"
                >
                  {personalData.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold-default flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${personalData.phone}`}
                  className="text-sm text-steel-light hover:text-gold-default transition-colors"
                >
                  {personalData.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-default flex-shrink-0 mt-0.5" />
                <span className="text-sm text-steel-light">
                  {personalData.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-steel-dark/30" />

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-steel-dark">
            © {currentYear} Fernando Rosero. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-steel-light hover:text-gold-default transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-xs text-steel-light hover:text-gold-default transition-colors">
              Términos
            </a>
            <a href="#" className="text-xs text-steel-light hover:text-gold-default transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
