'use client';

import { getAllSkills, getSkillsByCategory } from '@/lib/data/skills';
import { fadeUp, staggerContainer } from '@/lib/utils/animations';
import { motion } from 'framer-motion';
import { AvatarPlaceholder } from '../ui/AvatarPlaceholder';
import { PortfolioBadge } from '../ui/PortfolioBadge';
import { SectionHeader } from '../ui/SectionHeader';
import { SkillBar } from '../ui/SkillBar';

/**
 * About section component
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
        <SectionHeader
          eyebrow="Acerca de Mí"
          title="Ingeniero & Contador"
          description="Combinando tecnología y finanzas para crear soluciones innovadoras"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Bio and Roles */}
          <motion.div variants={fadeUp} className="space-y-6">
            {/* Avatar */}
            <div className="md:hidden mb-8">
              <AvatarPlaceholder className="max-w-xs" />
            </div>

            {/* Bio Text */}
            <p className="text-lg dark:text-[#C5CED9] light:text-[#4B5563] leading-relaxed">
              Soy un profesional con formación dual en Ingeniería de Software y Contaduría Pública. 
              Mi pasión es crear soluciones tecnológicas que impacten positivamente en los negocios.
            </p>

            {/* Role Badges */}
            <div className="space-y-3">
              <PortfolioBadge variant="outline" icon={<span className="text-sm">💻</span>}>
                <div>
                  <p className="font-mono text-xs dark:text-[#F59E0B] light:text-[#D97706]">Full-Stack Developer</p>
                  <p className="text-xs dark:text-[#C5CED9] light:text-[#4B5563]">Especializado en Next.js y Node.js</p>
                </div>
              </PortfolioBadge>
              <PortfolioBadge variant="outline" icon={<span className="text-sm">📊</span>}>
                <div>
                  <p className="font-mono text-xs dark:text-[#F59E0B] light:text-[#D97706]">Financial Analyst</p>
                  <p className="text-xs dark:text-[#C5CED9] light:text-[#4B5563]">Análisis y auditoría financiera</p>
                </div>
              </PortfolioBadge>
            </div>

            {/* More Info */}
            <p className="text-sm dark:text-[#C5CED9] light:text-[#4B5563]">
              Cuando no estoy codificando, disfruto aprendiendo sobre finanzas descentralizadas, 
              arquitectura de software y contribuyendo a proyectos open source.
            </p>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div variants={fadeUp} className="space-y-8">
            {/* Desktop Avatar */}
            <div className="hidden md:block mb-8">
              <AvatarPlaceholder className="max-w-xs" />
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-sm font-mono dark:text-[#F59E0B] light:text-[#D97706] mb-4 uppercase tracking-wider">
                Habilidades Técnicas
              </h3>
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

            {/* Financial Skills */}
            <div>
              <h3 className="text-sm font-mono dark:text-[#F59E0B] light:text-[#D97706] mb-4 uppercase tracking-wider">
                Habilidades Financieras
              </h3>
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
