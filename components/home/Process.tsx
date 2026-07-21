"use client";

import { motion, type Variants } from "framer-motion";
import { process } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/anim/Reveal";
import { FaLightbulb, FaBullseye, FaPenNib, FaRocket } from "react-icons/fa";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  discover: FaLightbulb,
  strategy: FaBullseye,
  design: FaPenNib,
  launch: FaRocket,
};

const EASE = [0.22, 1, 0.36, 1] as const;

// Carte : bascule 3D depuis le bas.
const cardTilt: Variants = {
  hidden: { opacity: 0, y: 96, rotateX: 52, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.95, ease: EASE },
  },
};

// Le dôme se remplit de lumière à l'arrivée de la carte.
const domeGlow: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE, delay: 0.32 },
  },
};

// Anneau qui se propage autour de l'orbe (pulse unique).
const ringPulse: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: [0, 0.75, 0],
    scale: [0.5, 2.1],
    transition: { duration: 1.1, ease: "easeOut", delay: 0.5 },
  },
};

// L'orbe (rond blanc + icône) « pop » au sommet du dôme.
const orbPop: Variants = {
  hidden: { opacity: 0, scale: 0, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.42 },
  },
};

export default function Process() {
  return (
    <section id="process" className="px-6 py-14 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel icon="≈">{process.label}</SectionLabel>

        <div className="mt-8 grid items-end gap-8 md:grid-cols-2">
          <Reveal>
            <h2 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              <span className="font-serif-italic font-normal text-foreground">
                {process.titleItalic}
              </span>{" "}
              <span className="text-foreground">{process.titleSans}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-muted md:ml-auto md:text-right">
              {process.subtitle}
            </p>
          </Reveal>
        </div>

        <div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: 1400 }}
        >
          {process.steps.map((step) => {
            const Icon = ICONS[step.icon] ?? FaLightbulb;
            return (
              <motion.article
                key={step.n}
                variants={cardTilt}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                style={{ transformOrigin: "center bottom", transformStyle: "preserve-3d" }}
                className="group relative flex h-[440px] flex-col overflow-hidden rounded-3xl border border-white/10 px-8 pt-12"
              >
                {/* Haut : numéro + titre + description */}
                <span className="text-sm font-medium text-foreground">{step.n}</span>
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{step.text}</p>

                {/* Bas : dôme + rond blanc avec icône au sommet */}
                <div className="relative mt-auto h-44">
                  {/* Dôme (grand cercle, seul le haut est visible) */}
                  <div
                    className="absolute left-1/2 top-10 aspect-square w-[160%] -translate-x-1/2 rounded-full transition-transform duration-500 group-hover:scale-[1.04]"
                    style={{
                      background: "linear-gradient(180deg, #3a3a3a 0%, #141414 42%)",
                    }}
                  />
                  {/* Halo lumineux qui s'allume à l'arrivée (illumination du dôme) */}
                  <motion.div
                    variants={domeGlow}
                    className="pointer-events-none absolute left-1/2 top-10 aspect-square w-[160%] -translate-x-1/2 rounded-full"
                    style={{
                      background:
                        "radial-gradient(120% 70% at 50% 0%, rgba(255,255,255,0.34), rgba(255,255,255,0.06) 40%, transparent 62%)",
                    }}
                  />
                  {/* Liseré clair sur le bord du dôme */}
                  <div
                    className="absolute left-1/2 top-10 aspect-square w-[160%] -translate-x-1/2 rounded-full border border-white/20"
                    style={{
                      maskImage: "linear-gradient(to bottom, black, transparent 28%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black, transparent 28%)",
                    }}
                  />
                  {/* Rond blanc + icône, au sommet du dôme */}
                  <div className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2">
                    {/* Anneau qui se propage (pulse) */}
                    <motion.span
                      variants={ringPulse}
                      className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60"
                    />
                    <motion.div
                      variants={orbPop}
                      className="grid h-14 w-14 place-items-center rounded-full bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:-translate-y-1"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
