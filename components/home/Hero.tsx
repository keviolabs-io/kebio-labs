"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import HeroVideo from "@/components/home/HeroVideo";
import Media from "@/components/Media";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

const easeOut = [0.22, 1, 0.36, 1] as const;

// Fond vidéo du hero.
const HERO_VIDEO = "/hero/hero-bg.mp4";

// Logos de marque pour les réseaux du hero
const SOCIAL_ICONS: Record<string, IconType> = {
  instagram: FaInstagram,
  x: FaXTwitter,
  tiktok: FaTiktok,
};

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

/** Rond réseau social (réutilisé desktop + mobile). */
function SocialIcon({
  s,
  size = "h-10 w-10",
}: {
  s: (typeof hero.socials)[number];
  size?: string;
}) {
  const Icon = SOCIAL_ICONS[s.key];
  return (
    <a
      href={s.href}
      aria-label={s.label}
      className={`grid ${size} place-items-center rounded-full border border-border bg-white/[0.04] text-foreground transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white hover:text-background`}
    >
      {Icon ? <Icon className="h-[15px] w-[15px]" /> : null}
    </a>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden px-6 pb-6 pt-24 md:min-h-screen md:pb-8 md:pt-28">
      {/* Vidéo de fond plein cadre, sans aucun voile (pleine luminosité) */}
      <HeroVideo src={HERO_VIDEO} dim={false} />

      {/* Mobile uniquement : légers scrims pour la lisibilité du texte.
          Le desktop reste sans voile, le centre de la vidéo reste visible. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[24%] bg-gradient-to-b from-background/75 to-transparent md:hidden" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[42%] bg-gradient-to-t from-background via-background/70 to-transparent md:hidden" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-between">
        {/* Titre : centré (mobile, dans l'espace libre) · à gauche (desktop) */}
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center md:flex-none md:flex-row md:items-start md:justify-between md:text-left">
          <h1 className="text-[15vw] font-medium leading-[0.88] tracking-[-0.035em] [text-shadow:0_2px_28px_rgba(0,0,0,0.45)] sm:text-[12vw] md:mt-6 lg:text-[10rem]">
            <MaskLine delay={0.15}>{hero.titleLine1}</MaskLine>
            <MaskLine delay={0.3} className="font-serif-italic text-muted">
              {hero.titleLine2}
            </MaskLine>
          </h1>

          {/* Contact + réseaux (desktop) — repris du thème */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
            className="mt-8 hidden w-full max-w-sm shrink-0 flex-col items-end gap-6 lg:flex"
          >
            <p className="text-right text-sm leading-relaxed text-foreground/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">
              {hero.contactParagraph}
            </p>
            <div className="w-full border-t border-border" />
            <div className="flex w-full items-center justify-between gap-8">
              <span className="text-sm text-foreground/90">{hero.contactLabel}</span>
              <div className="flex gap-2.5">
                {hero.socials.map((s) => (
                  <SocialIcon key={s.key} s={s} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== Composition basse — DESKTOP ===== */}
        <div className="hidden grid-cols-3 items-end gap-10 md:grid">
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
            <div className="grid max-w-md grid-cols-[auto_1fr] gap-x-5 gap-y-2 text-sm text-foreground [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">
              {hero.weDoItems.map((pair, i) => (
                <div key={i} className="contents">
                  <span className="whitespace-nowrap">{pair.left}</span>
                  <span className="whitespace-nowrap text-foreground/70">
                    / {pair.right}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Centre — indicateur de scroll */}
          <div className="flex justify-center">
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
            className="justify-self-end text-right"
          >
            <div className="mb-4 flex items-center justify-between gap-8 border-b border-border pb-3 text-sm">
              <span className="text-foreground/90">{hero.featuredLabel}</span>
              <span className="text-muted-dark">{hero.featuredIndex}</span>
            </div>
            <Link href={hero.featured.href} className="group block w-72">
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

        {/* ===== Composition basse — MOBILE (compacte, tient dans l'écran) ===== */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: easeOut, delay: 0.6 }}
          className="flex flex-col gap-4 md:hidden"
        >
          {/* Nous le faisons */}
          <div>
            <p className="mb-2 border-b border-border pb-2 text-sm text-foreground/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">
              {hero.weDoLabel}
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-foreground [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">
              {hero.weDoItems.map((pair, i) => (
                <div key={i} className="contents">
                  <span>{pair.left}</span>
                  <span className="text-foreground/70">/ {pair.right}</span>
                </div>
              ))}
            </div>
          </div>

          {/* En vedette — carte compacte horizontale */}
          <Link
            href={hero.featured.href}
            className="group flex items-center gap-3 rounded-2xl border border-border p-2.5"
          >
            <div className="h-14 w-20 shrink-0 overflow-hidden rounded-xl">
              <Media
                src={hero.featured.image}
                alt={hero.featured.title}
                className="h-full w-full"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between text-xs text-muted-dark">
                <span>{hero.featuredLabel}</span>
                <span>{hero.featuredIndex}</span>
              </div>
              <p className="mt-0.5 truncate text-sm font-medium">{hero.featured.title}</p>
            </div>
            <span className="pr-1 text-muted transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* Contactez-nous + réseaux */}
          <div className="flex flex-col gap-3">
            <div className="w-full border-t border-border" />
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-foreground/90">{hero.contactLabel}</span>
              <div className="flex gap-2">
                {hero.socials.map((s) => (
                  <SocialIcon key={s.key} s={s} size="h-9 w-9" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
