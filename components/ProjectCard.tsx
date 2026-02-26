'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TechBadge } from './TechBadge';
import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-indigo-600">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {project.period}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm text-neutral-700 line-clamp-3">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
        {project.techStack.length > 4 && (
          <span className="text-xs text-neutral-500">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
        <span>{project.role}</span>
        <span className="inline-flex items-center gap-1 text-indigo-600">
          <span className="font-medium">View details</span>
          <span aria-hidden>↗</span>
        </span>
      </div>
    </motion.article>
  );
}
