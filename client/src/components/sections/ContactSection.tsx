'use client';

import { personalData } from '@/lib/data/personal';
import { fadeUp, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '../ui/ContactForm';
import { PortfolioBadge } from '../ui/PortfolioBadge';
import { SectionHeader } from '../ui/SectionHeader';

/**
 * Contact section component
 */
export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 glow-gold-bl pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeader
          eyebrow="Ponte en Contacto"
          title="Hablemos"
          description="¿Tienes un proyecto en mente? Me encantaría escucharte"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-lg text-steel-light leading-relaxed">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones. 
              No dudes en contactarme a través de cualquiera de estos canales.
            </p>

            {/* Contact Items */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-start gap-4 p-4 rounded border border-steel-dark hover:border-gold-default bg-navy-panel/30 hover:bg-navy-panel/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded flex items-center justify-center bg-gold-default/20 group-hover:bg-gold-default/30 transition-colors flex-shrink-0">
                  <Mail size={20} className="text-gold-default" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream">Email</p>
                  <p className="text-sm text-steel-light break-all">
                    {personalData.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalData.phone}`}
                className="flex items-start gap-4 p-4 rounded border border-steel-dark hover:border-gold-default bg-navy-panel/30 hover:bg-navy-panel/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded flex items-center justify-center bg-gold-default/20 group-hover:bg-gold-default/30 transition-colors flex-shrink-0">
                  <Phone size={20} className="text-gold-default" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream">Teléfono</p>
                  <p className="text-sm text-steel-light">
                    {personalData.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded border border-steel-dark bg-navy-panel/30">
                <div className="w-12 h-12 rounded flex items-center justify-center bg-gold-default/20 flex-shrink-0">
                  <MapPin size={20} className="text-gold-default" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream">Ubicación</p>
                  <p className="text-sm text-steel-light">
                    {personalData.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div variants={fadeUp}>
              <PortfolioBadge
                variant="gold"
                icon={<div className="w-2 h-2 bg-navy-default rounded-full animate-pulse-dot" />}
              >
                Disponible para nuevos proyectos
              </PortfolioBadge>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={fadeUp}>
            <div className="p-6 md:p-8 rounded border border-steel-dark bg-navy-panel/30">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
