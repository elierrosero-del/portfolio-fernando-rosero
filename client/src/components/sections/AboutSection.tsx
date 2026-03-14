'use client';

import { getSkillsByCategory } from '@/lib/data/skills';
import { fadeUp, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { AvatarPlaceholder } from '../ui/AvatarPlaceholder';
import { PortfolioBadge } from '../ui/PortfolioBadge';
import { SectionHeader } from '../ui/SectionHeader';
import { SkillBar } from '../ui/SkillBar';

/**
 * About section component with 2-column layout
 */
export function AboutSection() {
  const technicalSkills = getSkillsByCategory('technical');
  const financialSkills = getSkillsByCategory('financial');

  return (
    <section
      id="about"
      className="py-20 md:py-32 relative overflow-hidden dark:bg-[#141B2D] light:bg-[#F9FAFB]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 glow-gold-bl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12"
        >
          {/* Left Column - Bio, Avatar, and Roles */}
          <motion.div
            variants={fadeUp}
            className="space-y-8 pb-8 md:pb-0 md:border-r dark:md:border-[#1F2E4D] light:md:border-[#E5E7EB] md:pr-12"
          >
            {/* Section Label */}
            <div className="space-y-2">
              <p className="text-xs font-semibold dark:text-[#8B95A8] light:text-[#6B7280] tracking-widest uppercase">
                Acerca de Mí
              </p>
              <h2 className="text-4xl md:text-5xl font-bold dark:text-[#F5F7FA] light:text-[#0F1A2E] leading-tight">
                El puente entre<br />código y finanzas
              </h2>
            </div>

            {/* Bio Text */}
            <p className="text-base dark:text-[#C5CED9] light:text-[#4B5563] leading-relaxed">
              Soy un profesional con formación dual en Ingeniería de Software y Contaduría Pública. 
              Mi pasión es crear soluciones tecnológicas que impacten positivamente en los negocios.
            </p>

            {/* Avatar */}
            <div className="my-6">
              <AvatarPlaceholder className="max-w-xs" />
            </div>

            {/* Role Badges */}
            <div className="flex flex-col gap-3">
              <PortfolioBadge variant="outline" className="h-auto py-3 px-4">
                <div className="flex-1">
                  <p className="font-semibold text-sm dark:text-[#F5F7FA] light:text-[#0F1A2E]">Ing. Software</p>
                </div>
              </PortfolioBadge>
              <PortfolioBadge variant="outline" className="h-auto py-3 px-4">
                <div className="flex-1">
                  <p className="font-semibold text-sm dark:text-[#F5F7FA] light:text-[#0F1A2E]">Contador Público</p>
                </div>
              </PortfolioBadge>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div variants={fadeUp} className="space-y-8 md:pl-12">
            {/* Technical Skills */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold dark:text-[#8B95A8] light:text-[#6B7280] tracking-widest uppercase mb-4">
                  Habilidades Técnicas
                </p>
              </div>
              <div className="space-y-4">
                {technicalSkills.map((skill) => (
                  <SkillBar
                    key={skill.id}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px dark:bg-[#1F2E4D] light:bg-[#E5E7EB]" />

            {/* Financial Skills */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold dark:text-[#8B95A8] light:text-[#6B7280] tracking-widest uppercase mb-4">
                  Habilidades Financieras
                </p>
              </div>
              <div className="space-y-4">
                {financialSkills.map((skill) => (
                  <SkillBar
                    key={skill.id}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
