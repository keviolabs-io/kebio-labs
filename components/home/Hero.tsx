"use client";

import Link from "next/link";
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
        <GlossyOrb className="w-[min(78vw,680px)]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* Titre */}
        <h1 className="text-[13vw] font-medium leading-[0.9] tracking-[-0.03em] sm:text-[11vw] lg:text-[9rem]">
          <MaskLine delay={0.15}>{hero.titleLine1}</MaskLine>
          <MaskLine delay={0.3} className="font-serif-italic text-muted">
            {hero.titleLine2}
          </MaskLine>
        </h1>

        {/* Tags */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.55 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {hero.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-white/[0.02] px-4 py-2 text-sm text-muted backdrop-blur-sm"
            >
              {tag}
            </li>
          ))}
        </motion.ul>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.7 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            href={hero.primary.href}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-transform duration-300 hover:scale-[0.97]"
          >
            {hero.primary.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href={hero.secondary.href}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-7 py-4 text-sm font-medium transition-colors duration-300 hover:bg-card-hover"
          >
            {hero.secondary.label}
          </Link>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
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
