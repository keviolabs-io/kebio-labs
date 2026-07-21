"use client";

import { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { site } from "@/lib/content";
import { markIntroDone } from "@/lib/intro-gate";

const EASE = [0.22, 1, 0.36, 1] as const;
const OPEN_EASE = [0.76, 0, 0.24, 1] as const;
const PANELS = 6;

// Poussière lumineuse — positions déterministes (SSR-safe, pas de random).
// Couche « proche ».
const PARTICLES = Array.from({ length: 55 }, (_, i) => ({
  x: (i * 61.803) % 100,
  y: (i * 38.197 + 7) % 100,
  size: 2 + (i % 5) * 1.1,
  drift: 12 + (i % 5) * 6,
  dur: 3.5 + (i % 6) * 0.8,
  delay: (i % 7) * 0.1,
  op: 0.5 + (i % 4) * 0.13,
}));
// Couche « lointaine ».
const PARTICLES_FAR = Array.from({ length: 45 }, (_, i) => ({
  x: (i * 47.317 + 21) % 100,
  y: (i * 71.921 + 33) % 100,
  size: 1 + (i % 3) * 0.7,
  drift: 8 + (i % 4) * 5,
  dur: 4 + (i % 5) * 0.9,
  delay: (i % 8) * 0.12,
  op: 0.22 + (i % 3) * 0.1,
}));

function getZoom() {
  return typeof document !== "undefined"
    ? document.getElementById("site-zoom")
    : null;
}
function clearZoom() {
  const z = getZoom();
  if (!z) return;
  z.style.transition = "";
  z.style.transform = "";
  z.style.transformOrigin = "";
  z.style.willChange = "";
}

type Phase = "in" | "glint" | "open";

/**
 * Rideau d'ouverture codé (noir) : poussière lumineuse + compteur, le wordmark
 * s'assemble lettre par lettre, un éclat balaie le texte, puis les panneaux se
 * fendent depuis le centre pour révéler le site (dézoom caméra sur desktop).
 * Rejoue à chaque chargement ; désactivé si prefers-reduced-motion.
 */
export default function Intro() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>("in");
  const [flash, setFlash] = useState(false);
  const [display, setDisplay] = useState(0);
  const count = useMotionValue(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setVisible(false);
      markIntroDone();
      return;
    }

    document.body.style.overflow = "hidden";

    const isMobile = window.innerWidth < 768;
    const zoom = getZoom();
    if (zoom && !isMobile) {
      zoom.style.transformOrigin = `50% ${
        window.scrollY + window.innerHeight / 2
      }px`;
      zoom.style.willChange = "transform";
      zoom.style.transform = "scale(1.06)";
    }

    const counter = animate(count, 100, {
      duration: 1.9,
      ease: [0.4, 0, 0.15, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    const finish = () => {
      markIntroDone();
      clearZoom();
      document.body.style.overflow = "";
      setVisible(false);
    };

    const t1 = setTimeout(() => setPhase("glint"), 1250);
    const t2 = setTimeout(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 240);
      markIntroDone();
      const z = getZoom();
      if (z && !isMobile) {
        z.style.transition = "transform 1s cubic-bezier(0.22,1,0.36,1)";
        z.style.transform = "scale(1)";
      }
      setPhase("open");
    }, 2050);
    const t3 = setTimeout(finish, 3050);
    const safety = setTimeout(finish, 6000);

    return () => {
      counter.stop();
      [t1, t2, t3, safety].forEach(clearTimeout);
      clearZoom();
      document.body.style.overflow = "";
    };
  }, [count]);

  if (!visible) return null;

  const chars = site.name.toLowerCase().split("");
  const opening = phase === "open";
  const mid = (PANELS - 1) / 2;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* ---------- Panneaux (le rideau) ---------- */}
      {Array.from({ length: PANELS }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-full bg-[#050505]"
          style={{
            left: `${(i * 100) / PANELS}%`,
            width: `${100 / PANELS + 0.2}%`,
            boxShadow: "1px 0 30px -6px rgba(255,255,255,0.14)",
          }}
          initial={{ y: "0%" }}
          animate={{ y: opening ? "-101%" : "0%" }}
          transition={{
            duration: 0.85,
            ease: OPEN_EASE,
            delay: opening ? Math.abs(i - mid) * 0.08 : 0,
          }}
        >
          {/* Liséré blanc lumineux en bas du panneau */}
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[4px] bg-white"
            style={{ boxShadow: "0 0 20px 2px rgba(255,255,255,0.8)" }}
          />
        </motion.div>
      ))}

      {/* ---------- Poussière lumineuse ---------- */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: opening ? 0 : 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {[...PARTICLES_FAR, ...PARTICLES].map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              boxShadow: `0 0 ${p.size * 2.5}px rgba(255,255,255,0.8)`,
            }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: [0, p.op, p.op * 0.6, p.op],
              scale: 1,
              y: [0, -p.drift, -p.drift * 0.5, -p.drift],
            }}
            transition={{
              duration: p.dur,
              times: [0, 0.12, 0.6, 1],
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: p.delay,
            }}
          />
        ))}
      </motion.div>

      {/* ---------- Contenu central (wordmark + lumière) ---------- */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        animate={{ opacity: opening ? 0 : 1, scale: opening ? 1.25 : 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {/* Lueur douce derrière le texte */}
        <motion.div
          className="absolute h-[42vh] w-[76vw]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.10), transparent)",
          }}
          animate={{
            opacity: phase === "glint" ? 1 : 0.5,
            scale: phase === "glint" ? 1.15 : 1,
          }}
          transition={{ duration: 0.6, ease: EASE }}
        />

        {/* Wordmark qui s'assemble lettre par lettre (plus grand sur mobile) */}
        <div className="relative flex items-end overflow-hidden text-[clamp(3.8rem,14vw,10rem)] font-medium tracking-tight">
          <span className="inline-flex">
            {chars.map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block whitespace-pre font-serif-italic"
                initial={{ opacity: 0, y: 46, rotateZ: -9, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, rotateZ: 0, scale: 1 }}
                transition={{
                  duration: 0.72,
                  ease: EASE,
                  delay: 0.15 + i * 0.055,
                }}
              >
                {ch === " " ? " " : ch}
              </motion.span>
            ))}
          </span>
          <motion.sup
            className="ml-1 align-super text-[0.32em] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 + chars.length * 0.055 }}
          >
            ®
          </motion.sup>

          {/* Éclat lumineux qui balaie le texte (glint) */}
          <motion.div
            className="pointer-events-none absolute inset-y-0 w-[45%]"
            style={{
              background:
                "linear-gradient(105deg, transparent, rgba(255,255,255,0.55), transparent)",
              filter: "blur(6px)",
              mixBlendMode: "overlay",
            }}
            initial={{ x: "-160%" }}
            animate={{ x: phase === "in" ? "-160%" : "260%" }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </motion.div>

      {/* ---------- Compteur ---------- */}
      <motion.div
        className="pointer-events-none absolute bottom-8 right-8 text-6xl font-medium tabular-nums tracking-tight text-muted md:bottom-12 md:right-12 md:text-8xl"
        animate={{ opacity: opening ? 0 : 1 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        {display}
      </motion.div>

      {/* ---------- Flash d'ouverture ---------- */}
      <div
        className="pointer-events-none absolute inset-0 bg-white"
        style={{ opacity: flash ? 0.32 : 0, transition: "opacity 0.22s ease" }}
      />
    </div>
  );
}
