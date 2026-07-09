"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import { staggerContainer, staggerItem } from "@/components/anim/Reveal";
import { FaGlobe, FaMobileAlt, FaRobot, FaBullhorn, FaSearch } from "react-icons/fa";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  web: FaGlobe,
  app: FaMobileAlt,
  automation: FaRobot,
  ads: FaBullhorn,
  seo: FaSearch,
};

export default function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel icon="✎">{services.label}</SectionLabel>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 divide-y divide-border overflow-hidden rounded-3xl border border-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x"
        >
          {services.items.map((s) => {
            const Icon = ICONS[s.icon] ?? FaGlobe;
            return (
              <motion.article
                key={s.n}
                variants={staggerItem}
                className="group relative overflow-hidden p-8 lg:p-9"
              >
                {/* Grille de points révélée au survol (dense en haut) */}
                <div
                  className="pointer-events-none absolute inset-0 bg-dots opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black, transparent 75%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black, transparent 75%)",
                  }}
                />
                {/* Léger éclaircissement (haut) au survol */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Liseré lumineux en haut au survol */}
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Contenu */}
                <div className="relative">
                  <div className="mb-14 flex h-24 items-center justify-center">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="grid h-20 w-20 place-items-center rounded-2xl border border-border bg-gradient-to-br from-white/[0.08] to-transparent text-3xl text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                    >
                      <Icon className="h-8 w-8" />
                    </motion.div>
                  </div>
                  <span className="text-sm text-muted-dark">{s.n}</span>
                  <h3 className="mt-3 text-xl font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
