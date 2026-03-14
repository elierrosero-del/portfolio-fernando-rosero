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
 * Hero section component with improved layout
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pb-20 relative overflow-hidden"
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
                <span className="dark:text-[#F5F7FA] light:text-[#0F1A2E]">Fernando</span>
                <br />
                <span className="dark:text-[#F59E0B] light:text-[#D97706]">Rosero</span>
              </motion.h1>
            </div>

            {/* Title */}
            <motion.p variants={fadeUp} className="text-lg md:text-xl dark:text-[#C5CED9] light:text-[#4B5563] max-w-lg">
              {personalData.title}
            </motion.p>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-base dark:text-[#8B95A8] light:text-[#6B7280] leading-relaxed max-w-lg">
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
                  <p className="text-3xl md:text-4xl font-bold dark:text-[#F59E0B] light:text-[#D97706]">
                    {stat.value}
                  </p>
                  <p className="text-xs dark:text-[#8B95A8] light:text-[#6B7280] font-medium">{stat.label}</p>
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
          className="mt-16 md:mt-20 p-4 md:p-6 dark:bg-[#0F1A2E]/50 light:bg-[#F9FAFB] border dark:border-[#1F2E4D] light:border-[#E5E7EB] rounded-lg flex items-center gap-4 flex-wrap"
        >
          <div className="flex items-center gap-3 flex-1 min-w-[200px]">
            <FileText size={24} className="dark:text-[#4A6FA8] light:text-[#4A6FA8]" />
            <div>
              <p className="text-sm font-semibold dark:text-[#F5F7FA] light:text-[#0F1A2E]">
                fernando-rosero-cv.pdf
              </p>
              <p className="text-xs dark:text-[#8B95A8] light:text-[#6B7280]">Curriculum Vitae</p>
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
