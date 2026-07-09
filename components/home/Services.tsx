"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import { staggerContainer, staggerItem } from "@/components/anim/Reveal";
import { FaLaptopCode, FaRobot, FaBullhorn, FaSearch } from "react-icons/fa";
import type { IconType } from "react-icons";
import ServiceIcon from "@/components/ServiceIcon";

const ICONS: Record<string, IconType> = {
  web: FaLaptopCode,
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
          className="mt-14 grid grid-cols-1 divide-y divide-white/60 overflow-hidden rounded-3xl border border-white/60 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x"
        >
          {services.items.map((s) => {
            const Icon = ICONS[s.icon] ?? FaLaptopCode;
            return (
              <motion.article
                key={s.n}
                variants={staggerItem}
                className="group relative flex flex-col overflow-hidden p-8 lg:p-10"
              >
                {/* Grille de points révélée au survol (dense en haut) */}
                <div
                  className="pointer-events-none absolute inset-0 bg-dots opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    maskImage: "linear-gradient(to bottom, black, transparent 75%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black, transparent 75%)",
                  }}
                />
                {/* Léger éclaircissement (haut) au survol */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Liseré lumineux en haut au survol */}
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Contenu : icône en haut, texte en dessous */}
                <div className="relative">
                  <div className="flex justify-center pt-2">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ServiceIcon iconKey={s.icon} Fallback={Icon} />
                    </motion.div>
                  </div>

                  <div className="mt-10">
                    <span className="text-sm font-medium text-muted">{s.n}</span>
                    <h3 className="mt-3 text-2xl font-medium leading-[1.25] tracking-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-base leading-6 text-muted">{s.text}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
