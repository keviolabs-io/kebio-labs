"use client";

import { motion } from "framer-motion";
import HeroVideo from "@/components/home/HeroVideo";
import { aboutPage } from "@/lib/content";

/** Hero de la page À propos : vidéo 3D en fond plein cadre + titre par-dessus. */
export default function AboutHero() {
  return (
    <section className="relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Vidéo 3D en fond */}
      <HeroVideo src="/hero/object.mp4" />

      {/* Fondu vers la section suivante */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[30vh] bg-gradient-to-t from-background to-transparent" />

      <h1 className="reveal-fade-up relative z-10 text-[clamp(2.5rem,11vw,140px)] font-medium leading-[0.9] tracking-tight">
        <span className="sr-only">
          Kevio Labs, agence digitale à Lyon
        </span>
        <span aria-hidden="true">
          <span className="text-foreground">{aboutPage.hero.titleSans}</span>
          <br />
          <span className="font-serif-italic font-normal text-muted">
            {aboutPage.hero.titleItalic}
          </span>
        </span>
      </h1>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-muted"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
