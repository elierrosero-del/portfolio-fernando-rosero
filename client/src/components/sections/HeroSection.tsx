'use client';

import { personalData } from '@/lib/data/personal';
import { fadeUp, staggerContainer } from '@/lib/utils/animations';
import { cn } from '@/lib/utils/cn';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { AvatarPlaceholder } from '../ui/AvatarPlaceholder';
import { Button } from '../ui/button';
import { PortfolioBadge } from '../ui/PortfolioBadge';

/**
 * Hero section component
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 md:pb-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 glow-gold-tr pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 glow-gold-bl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={fadeUp} className="space-y-6">
            {/* Name */}
            <div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-bold leading-tight">
                <span className="text-cream">Fernando</span>
                <br />
                <span className="text-gold-default">Rosero</span>
              </motion.h1>
            </div>

            {/* Title */}
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-steel-light">
              {personalData.title}
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex gap-6 flex-wrap">
              {personalData.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 border-r border-steel-dark pr-6 last:border-r-0 last:pr-0">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-gold-default">
                      {stat.value}
                    </p>
                    <p className="text-xs text-steel-light">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Availability Badge */}
            <motion.div variants={fadeUp}>
              <PortfolioBadge variant="gold" icon={<div className="w-2 h-2 bg-navy-default rounded-full animate-pulse-dot" />}>
                Disponible para proyectos
              </PortfolioBadge>
            </motion.div>

            {/* CV Download Bar */}
            <motion.div
              variants={fadeUp}
              className="p-4 bg-navy-panel border border-steel-dark rounded flex items-center justify-between hover:border-gold-default transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-default/20 rounded flex items-center justify-center">
                  <FileText size={20} className="text-gold-default" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cream">fernando-rosero-cv.pdf</p>
                  <p className="text-xs text-steel-light">Currículum Vitae</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="flex-shrink-0">
                <Download size={16} className="mr-2" />
                Descargar
              </Button>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex gap-4 pt-4">
              <Button size="lg">
                Ver Proyectos
              </Button>
              <Button size="lg" variant="outline">
                Contactar
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Avatar */}
          <motion.div variants={fadeUp} className="hidden md:block">
            <AvatarPlaceholder />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-xs font-mono text-steel-light">Desplázate</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold-default rounded-full flex items-start justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-gold-default rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
