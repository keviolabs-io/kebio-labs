"use client";

import { motion } from "framer-motion";
import HeroObject from "@/components/HeroObject";

/** Hero de la page Projets : grand titre font-mix + objet 3D + indicateur. */
export default function ProjectsHero() {
  return (
    <section className="relative flex min-h-[94vh] flex-col items-center overflow-hidden px-6 pt-36 text-center md:pt-40">
      <h1 className="reveal-fade-up relative z-10 text-[clamp(2.75rem,12vw,140px)] font-medium leading-[0.9] tracking-tight">
        <span className="text-foreground">Nos projets</span>
        <br />
        <span className="font-serif-italic font-normal text-muted">
          en vedette
        </span>
      </h1>

      <HeroObject className="-mt-[4vh] w-[min(74vw,660px)]" />

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
