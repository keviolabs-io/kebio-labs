"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import ServiceIcon from "@/components/ServiceIcon";
import { FaLaptopCode, FaRobot, FaBullhorn, FaSearch } from "react-icons/fa";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  web: FaLaptopCode,
  automation: FaRobot,
  ads: FaBullhorn,
  seo: FaSearch,
};

const EASE = [0.22, 1, 0.36, 1] as const;

type Item = (typeof services.items)[number];

/** Une carte qui bascule en 3D (se redresse face à l'utilisateur) à l'entrée.
 *  `perspective`/`flipAngle`/`flipY` permettent d'accentuer la 3D sur desktop
 *  (cartes plus larges → besoin d'une perspective plus courte pour un rendu
 *  aussi marqué qu'en mobile). */
function FlipCard({
  s,
  Icon,
  perspective = "1100px",
  flipAngle = 46,
  flipY = 70,
}: {
  s: Item;
  Icon: IconType;
  perspective?: string;
  flipAngle?: number;
  flipY?: number;
}) {
  return (
    <div style={{ perspective }}>
      <motion.article
        initial={{ rotateX: flipAngle, y: flipY, opacity: 0, scale: 0.9 }}
        whileInView={{ rotateX: 0, y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-12% 0px -18% 0px" }}
        transition={{ duration: 0.95, ease: EASE }}
        style={{ transformOrigin: "center bottom", transformStyle: "preserve-3d" }}
        className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#0b0b0c] px-6 pb-8 pt-6 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.7)]"
      >
        {/* --- Fond : halos de lumière (blanc) qui dérivent dans la carte --- */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-[10%] top-[12%] h-[38%] w-[38%] rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.34), rgba(255,255,255,0.12) 42%, rgba(255,255,255,0) 100%)",
              willChange: "transform",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
            animate={{ x: ["-40%", "180%", "-40%"], y: ["-30%", "120%", "-30%"], scale: [1, 1.3, 1] }}
            transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
          />
          <motion.div
            className="absolute right-[12%] top-[8%] h-[34%] w-[34%] rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.24), rgba(255,255,255,0.08) 42%, rgba(255,255,255,0) 100%)",
              willChange: "transform",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
            animate={{ x: ["60%", "-190%", "60%"], y: ["10%", "170%", "10%"], scale: [1.2, 0.9, 1.2] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-[14%] left-[24%] h-[32%] w-[32%] rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.18), rgba(255,255,255,0.06) 42%, rgba(255,255,255,0) 100%)",
              willChange: "transform",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
            animate={{ x: ["10%", "-150%", "10%"], y: ["20%", "-160%", "20%"], scale: [1, 1.35, 1] }}
            transition={{ duration: 8.5, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
        {/* Motif de points (texture) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.22) 1.2px, transparent 1.4px)",
            backgroundSize: "20px 20px",
            maskImage: "linear-gradient(to bottom, black 55%, transparent 90%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 90%)",
          }}
        />
        {/* Reflet net en haut pour appuyer le volume */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <span className="relative text-sm font-medium text-muted">{s.n}</span>

        {/* Grande icône 3D centrée, révélée en cascade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-12% 0px -18% 0px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
          className="relative flex flex-1 items-center justify-center py-2"
        >
          <ServiceIcon iconKey={s.icon} Fallback={Icon} />
        </motion.div>

        {/* Titre + description, en cascade */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px -18% 0px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
          className="relative"
        >
          <h3 className="text-2xl font-medium leading-[1.2] tracking-tight text-foreground">
            {s.title}
          </h3>
          <p className="mt-3 text-[15px] leading-6 text-muted">{s.text}</p>
        </motion.div>
      </motion.article>
    </div>
  );
}

/**
 * Cartes « Nos services » avec bascule 3D + halos lumineux.
 * - Mobile : empilées verticalement.
 * - Desktop : en ligne (4 côte à côte), toutes basculent en même temps.
 */
export default function ServicesFlip() {
  return (
    <>
      {/* Mobile : colonne */}
      <div className="mt-10 flex flex-col gap-6 sm:hidden">
        {services.items.map((s) => {
          const Icon = ICONS[s.icon] ?? FaLaptopCode;
          return <FlipCard key={s.n} s={s} Icon={Icon} />;
        })}
      </div>

      {/* Desktop / tablette : ligne horizontale, bascule simultanée.
          Perspective plus courte + angle plus marqué → 3D aussi prononcée
          qu'en mobile malgré des cartes plus larges. */}
      <div className="mt-14 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {services.items.map((s) => {
          const Icon = ICONS[s.icon] ?? FaLaptopCode;
          return (
            <FlipCard
              key={s.n}
              s={s}
              Icon={Icon}
              perspective="620px"
              flipAngle={62}
              flipY={90}
            />
          );
        })}
      </div>
    </>
  );
}
