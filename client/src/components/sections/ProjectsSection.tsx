'use client';

import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/lib/data/projects';
import { fadeUp, staggerContainer } from '@/lib/utils/animations';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';

/**
 * Projects section component showcasing featured development projects
 */
export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative overflow-hidden dark:bg-[#141B2D] light:bg-[#F9FAFB]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 glow-gold-tl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <SectionHeader
            title="Proyectos Destacados"
            description="Soluciones tecnológicas que combinan finanzas y desarrollo"
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 text-center"
        >
          <p className="text-sm dark:text-[#8B95A8] light:text-[#6B7280] mb-4">
            ¿Quieres ver más proyectos?
          </p>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-primary dark:bg-[#4A6FA8] light:bg-[#4A6FA8] text-white hover:shadow-lg dark:hover:shadow-[#4A6FA8]/30 hover:translate-y-[-2px]"
          >
            Ver Experiencia Completa
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
