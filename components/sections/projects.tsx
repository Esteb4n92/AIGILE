"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/animations";

/**
 * Projects Section
 * 
 * Portfolio grid displaying demo projects.
 */

interface ProjectCardProps {
  project: {
    categoryKey: string;
    titleKey: string;
    descKey: string;
    image: string;
    link: string;
    technologies: string[];
  };
  t: (key: string) => string;
  viewText: string;
}

function ProjectCard({ project, t, viewText }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all"
    >
      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={t(project.titleKey)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />

        {/* Hover overlay with link */}
        {project.link && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              {viewText}
              <ExternalLink size={14} />
            </Link>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        {/* Category Badge */}
        <span className="inline-block text-xs font-medium tracking-widest text-primary/80 mb-2">
          {t(project.categoryKey)}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {t(project.titleKey)}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {t(project.descKey)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile-only CTA (desktop uses the hover overlay) */}
        {project.link && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 md:hidden inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            {viewText}
            <ExternalLink size={14} />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      categoryKey: "projects.p1.category",
      titleKey: "projects.p1.title",
      descKey: "projects.p1.description",
      image: "/images/projects/project-1.jpg",
      link: "https://redagenciabq.vercel.app/",
      technologies: ["React", "Tailwind", "Framer Motion"],
    },
    {
      categoryKey: "projects.p2.category",
      titleKey: "projects.p2.title",
      descKey: "projects.p2.description",
      image: "/images/projects/project-2.jpg",
      link: "https://reportflowia.vercel.app/excel-flow",
      technologies: ["n8n", "OpenAI", "HubSpot"],
    },
    {
      categoryKey: "projects.p3.category",
      titleKey: "projects.p3.title",
      descKey: "projects.p3.description",
      image: "/images/projects/project-3.jpg",
      link: "https://github.com/Esteb4n92/Portafolio-de-analitica.git",
      technologies: ["Next.js", "Chart.js", "Supabase"],
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <span className="inline-block text-xs font-medium tracking-widest text-primary/80 mb-4">
              {t("projects.badge")}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              {t("projects.title")}
            </h2>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <FadeInStagger
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {projects.map((project, index) => (
            <FadeInStaggerItem key={index}>
              <ProjectCard project={project} t={t} viewText={t("projects.view")} />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
