"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import Media from "@/components/Media";
import { staggerContainer, staggerItem } from "@/components/anim/Reveal";

/** Grille de projets — chaque carte renvoie vers sa fiche détaillée. */
export default function ProjectGrid() {
  return (
    <section className="px-6 py-20 md:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {projects.items.map((p) => (
          <motion.article
            key={p.slug}
            variants={staggerItem}
            className="group min-w-0"
          >
            <Link href={`/projets/${p.slug}`} className="block">
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <Media
                  src={p.image}
                  alt={p.title}
                  className="aspect-[16/10] w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-medium tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                    {p.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
