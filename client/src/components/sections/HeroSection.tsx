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
 * Hero section component with improved layout and professional styling
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pb-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 glow-primary-tr pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 glow-primary-bl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={fadeUp} className="space-y-8">
            {/* Availability Badge */}
            <PortfolioBadge variant="primary" className="w-fit">
              ● Disponible para proyectos
            </PortfolioBadge>

            {/* Name */}
            <div>
              <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight">
                <span className="text-foreground dark:text-[#F5F7FA]">Fernando</span>
                <br />
                <span className="text-accent dark:text-[#F59E0B]">Rosero</span>
              </motion.h1>
            </div>

            {/* Title */}
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground dark:text-[#C5CED9] max-w-lg">
              {personalData.title}
            </motion.p>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-base text-muted-foreground dark:text-[#8B95A8] leading-relaxed max-w-lg">
              Especialista en desarrollo de software con experiencia en contabilidad y finanzas. Transformo ideas complejas en soluciones elegantes y funcionales.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
              <Button size="lg" variant="primary">
                Ver Proyectos
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download size={18} />
                Descargar CV
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex gap-8 flex-wrap pt-4">
              {personalData.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <p className="text-3xl md:text-4xl font-bold text-accent dark:text-[#F59E0B]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground dark:text-[#8B95A8] font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Avatar */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center md:justify-end"
          >
            <AvatarPlaceholder />
          </motion.div>
        </motion.div>

        {/* CV Preview Bar */}
        <motion.div
          variants={fadeUp}
          className="mt-16 md:mt-20 p-4 md:p-6 bg-card dark:bg-[#0F1A2E]/50 border border-border dark:border-[#1F2E4D] rounded-lg flex items-center gap-4 flex-wrap"
        >
          <div className="flex items-center gap-3 flex-1 min-w-[200px]">
            <FileText size={24} className="text-primary dark:text-[#4A6FA8]" />
            <div>
              <p className="text-sm font-semibold text-foreground dark:text-[#F5F7FA]">
                fernando-rosero-cv.pdf
              </p>
              <p className="text-xs text-muted-foreground dark:text-[#8B95A8]">Curriculum Vitae</p>
            </div>
          </div>
          <Button size="sm" variant="primary">
            <Download size={16} className="mr-2" />
            Descargar
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
