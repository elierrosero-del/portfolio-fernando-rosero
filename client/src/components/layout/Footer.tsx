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
    <footer className="bg-[#141B2D] border-t border-[#1F2E4D]/30">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-display text-[#4A6FA8]">
              Fernando Rosero
            </h3>
            <p className="text-sm text-[#8B95A8] leading-relaxed">
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
                  className="w-10 h-10 rounded-md border border-[#1F2E4D] hover:border-[#4A6FA8] bg-[#0F1A2E] hover:bg-[#4A6FA8]/10 flex items-center justify-center text-[#F5F7FA] hover:text-[#4A6FA8] transition-all duration-200"
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
            <h4 className="text-sm font-semibold text-[#F5F7FA] mb-4 font-mono">
              Navegación
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#8B95A8] hover:text-[#4A6FA8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F7FA] mb-4 font-mono">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#8B95A8] hover:text-[#4A6FA8] transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#8B95A8] hover:text-[#4A6FA8] transition-colors">
                  Consultoría
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#8B95A8] hover:text-[#4A6FA8] transition-colors">
                  Auditoría
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#8B95A8] hover:text-[#4A6FA8] transition-colors">
                  Análisis Financiero
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F7FA] mb-4 font-mono">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#4A6FA8] flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-sm text-[#8B95A8] hover:text-[#4A6FA8] transition-colors break-all"
                >
                  {personalData.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#4A6FA8] flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${personalData.phone}`}
                  className="text-sm text-[#8B95A8] hover:text-[#4A6FA8] transition-colors"
                >
                  {personalData.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#4A6FA8] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#8B95A8]">
                  {personalData.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1F2E4D]/30" />

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#3A4A60]">
            © {currentYear} Fernando Rosero. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#8B95A8] hover:text-[#4A6FA8] transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-xs text-[#8B95A8] hover:text-[#4A6FA8] transition-colors">
              Términos
            </a>
            <a href="#" className="text-xs text-[#8B95A8] hover:text-[#4A6FA8] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
