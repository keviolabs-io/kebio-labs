"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import Media from "@/components/Media";

const easeOut = [0.22, 1, 0.36, 1] as const;

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects.items)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Progression du scroll de la carte à travers le viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // La carte se réduit légèrement quand la suivante passe par-dessus
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.9]);
  // Parallax sur l'image de fond
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={ref}
      className="sticky top-0 flex min-h-screen items-center justify-center"
      style={{ zIndex: index }}
    >
      <motion.article
        style={{ scale, top: `${index * 12}px` }}
        className="relative h-[78vh] w-full max-w-[1400px] overflow-hidden rounded-[2rem] border border-border"
      >
        {/* Image parallax */}
        <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
          <Media src={project.image} alt={project.title} className="h-full w-full" />
        </motion.div>
        {/* Voile */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

        {/* Contenu */}
        <div className="relative flex h-full flex-col justify-between p-8 sm:p-12">
          <div className="flex items-start justify-between">
            <span className="max-w-md text-sm text-white/70">{project.subtitle}</span>
            <span className="text-sm text-white/50">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="text-5xl font-medium tracking-tight text-white sm:text-7xl">
              {project.title}
            </h3>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projets" className="px-6 py-28">
      <div className="mx-auto mb-6 max-w-[1400px]">
        <SectionLabel icon="◆">{projects.label}</SectionLabel>
      </div>

      <div>
        {projects.items.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} total={projects.items.length} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <Link
            href={projects.cta.href}
            className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-7 py-4 text-sm font-medium transition-colors hover:bg-card-hover"
          >
            {projects.cta.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
