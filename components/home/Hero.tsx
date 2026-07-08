"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import HeroObject from "@/components/HeroObject";
import Particles from "@/components/Particles";
import Media from "@/components/Media";

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

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-8 pt-28">
      {/* Points luminescents qui gravitent en arrière-plan */}
      <Particles />

      {/* Objet 3D en fond (desktop) — grand, centré/bas */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-3%] hidden justify-center md:flex">
        <HeroObject className="w-[min(84vw,780px)]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-8 md:justify-between md:gap-0">
        {/* Rangée haute : titre (gauche) · contact + réseaux (droite) */}
        <div className="flex items-start justify-between gap-6">
          <h1 className="mt-6 text-[15vw] font-medium leading-[0.9] tracking-[-0.03em] sm:text-[12vw] lg:text-[10rem]">
            <MaskLine delay={0.15}>{hero.titleLine1}</MaskLine>
            <MaskLine delay={0.3} className="font-serif-italic text-muted">
              {hero.titleLine2}
            </MaskLine>
          </h1>

          {/* Contact + réseaux (desktop) */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
            className="mt-8 hidden shrink-0 flex-col items-end gap-4 lg:flex"
          >
            <p className="text-sm text-foreground/90">{hero.contactLabel}</p>
            <div className="flex gap-2">
              {hero.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-xs text-muted transition-colors duration-300 hover:border-border-strong hover:text-foreground"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Objet 3D dans le flux (mobile uniquement) */}
        <div className="-my-2 flex justify-center md:hidden">
          <HeroObject className="w-[70vw] max-w-[320px]" />
        </div>

        {/* Composition basse : services (gauche) · scroll (centre) · vedette (droite) */}
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-3">
          {/* Gauche — Nous le faisons + villes */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, ease: easeOut, delay: 0.6 }}
          >
            <p className="mb-4 border-b border-border pb-3 text-sm text-foreground/90">
              {hero.weDoLabel}
            </p>
            <div className="grid max-w-sm grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted">
              {hero.weDoItems.map((pair, i) => (
                <div key={i} className="contents">
                  <span>{pair.left}</span>
                  <span className="text-muted-dark">/ {pair.right}</span>
                </div>
              ))}
            </div>
            {/* Villes */}
            <div className="mt-8 flex items-baseline gap-6 text-2xl text-muted-dark">
              {hero.marquee.slice(0, 3).map((city, i) => (
                <span key={city} className={i === 2 ? "font-serif-italic" : "font-medium"}>
                  {city}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Centre — indicateur de scroll */}
          <div className="hidden justify-center md:flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-muted"
              >
                ↓
              </motion.div>
            </motion.div>
          </div>

          {/* Droite — En vedette */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, ease: easeOut, delay: 0.7 }}
            className="md:justify-self-end md:text-right"
          >
            <div className="mb-4 flex items-center justify-between gap-8 border-b border-border pb-3 text-sm">
              <span className="text-foreground/90">{hero.featuredLabel}</span>
              <span className="text-muted-dark">{hero.featuredIndex}</span>
            </div>
            <Link href={hero.featured.href} className="group block w-full md:w-72">
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <Media
                  src={hero.featured.image}
                  alt={hero.featured.title}
                  className="aspect-[4/3] w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-4 text-left text-sm font-medium text-white">
                  {hero.featured.title}
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
