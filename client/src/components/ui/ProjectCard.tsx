'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types/projects.types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'production':
      return 'dark:text-[#10B981] light:text-[#059669]';
    case 'testing':
      return 'dark:text-[#F59E0B] light:text-[#B45309]';
    case 'development':
      return 'dark:text-[#3B82F6] light:text-[#1D4ED8]';
    case 'archived':
      return 'dark:text-[#8B95A8] light:text-[#6B7280]';
    default:
      return 'dark:text-[#8B95A8] light:text-[#6B7280]';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'production':
      return '✓ En Producción';
    case 'testing':
      return '⚡ En Pruebas';
    case 'development':
      return '🔨 En Desarrollo';
    case 'archived':
      return '📦 Archivado';
    default:
      return status;
  }
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="h-full bg-bg-card dark:bg-[#141B2D] light:bg-[#F3F4F6] border border-border dark:border-[#1F2E4D] light:border-[#D1D5DB] rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg transition-all duration-300 hover:border-primary/50 dark:hover:border-[#4A6FA8]/50 flex flex-col">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
          {project.icon && (
            <div className="text-3xl flex-shrink-0">{project.icon}</div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground dark:text-[#F5F7FA] light:text-[#0F1A2E] mb-1 line-clamp-2">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-secondary dark:text-[#C5CED9] light:text-[#4B5563] mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 dark:bg-[#4A6FA8]/10 light:bg-[#4A6FA8]/10 text-primary dark:text-[#4A6FA8] light:text-[#2E446B]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 dark:bg-[#4A6FA8]/10 light:bg-[#4A6FA8]/10 text-primary dark:text-[#4A6FA8] light:text-[#2E446B]">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Status and Links */}
        <div className="flex items-center justify-between pt-4 border-t border-border dark:border-[#1F2E4D] light:border-[#D1D5DB]">
          <span className={`text-sm font-semibold ${getStatusColor(project.status)}`}>
            {getStatusLabel(project.status)}
          </span>
          <div className="flex gap-2">
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-[#4A6FA8]/10 light:hover:bg-[#4A6FA8]/10 text-secondary dark:text-[#8B95A8] light:text-[#6B7280] hover:text-primary dark:hover:text-[#4A6FA8] light:hover:text-[#2E446B] transition-colors"
                title="Ver repositorio"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-[#4A6FA8]/10 light:hover:bg-[#4A6FA8]/10 text-secondary dark:text-[#8B95A8] light:text-[#6B7280] hover:text-primary dark:hover:text-[#4A6FA8] light:hover:text-[#2E446B] transition-colors"
                title="Ver proyecto"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Accent line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent dark:from-[#4A6FA8] dark:via-[#F59E0B] dark:to-transparent rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
