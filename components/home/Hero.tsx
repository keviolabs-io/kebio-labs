"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import GlossyOrb from "@/components/GlossyOrb";

const easeOut = [0.22, 1, 0.36, 1] as const;

/** Ligne de titre avec révélation par masque (slide up). */
function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.1em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: easeOut, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28">
      {/* Orbe 3D en fond, centré/bas */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-8%] flex justify-center">
        <GlossyOrb className="w-[min(80vw,760px)]" />
      </div>
      {/* Fondu vers le bas pour fondre l'orbe dans la section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-background to-transparent" />

      {/* Titre */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <h1 className="text-[18vw] font-medium leading-[0.88] tracking-[-0.03em] sm:text-[15vw] lg:text-[12rem]">
          <MaskLine delay={0.15}>{hero.titleLine1}</MaskLine>
          <MaskLine delay={0.3} className="font-serif-italic text-muted">
            {hero.titleLine2}
          </MaskLine>
        </h1>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
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
