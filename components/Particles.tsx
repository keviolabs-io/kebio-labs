"use client";

import { motion } from "framer-motion";

/**
 * Champ de points luminescents qui gravitent lentement en arrière-plan.
 * - Positions déterministes (pas de Math.random) → pas de souci d'hydratation.
 * - Uniquement transform/opacity → fluide sur Chrome & Safari.
 */

const COUNT = 100;
const GOLDEN = 2.399963229; // angle d'or (rad) → belle répartition

const particles = Array.from({ length: COUNT }, (_, i) => {
  const angle = i * GOLDEN;
  const radius = 12 + (i % 9) * 9.5; // % depuis le centre (12 → 88)
  return {
    x: 50 + Math.cos(angle) * radius,
    y: 50 + Math.sin(angle) * radius,
    size: 2.5 + (i % 4), // 2.5 → 5.5 px
    duration: 2.4 + (i % 5) * 0.9, // scintillement 2.4 → 6 s (plus rapide)
    delay: (i % 7) * 0.25,
    violet: i % 3 === 0,
    peak: 0.55 + (i % 5) * 0.09, // opacité max 0.55 → 0.91 (plus voyant)
  };
});

// Quelques halos diffus pour la profondeur
const glows = [
  { x: 38, y: 40, size: 340, tint: "rgba(150,130,255,0.10)", dur: 12 },
  { x: 62, y: 58, size: 300, tint: "rgba(120,150,255,0.08)", dur: 15 },
  { x: 50, y: 30, size: 220, tint: "rgba(255,255,255,0.05)", dur: 10 },
];

export default function Particles({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Halos diffus */}
      {glows.map((g, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${g.x}%`,
            top: `${g.y}%`,
            width: g.size,
            height: g.size,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${g.tint}, rgba(0,0,0,0) 70%)`,
          }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.12, 1] }}
          transition={{ duration: g.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Champ de points en rotation lente (gravitation) */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
      >
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              transform: "translate(-50%, -50%)",
              background: p.violet ? "rgb(190,175,255)" : "rgb(255,255,255)",
              boxShadow: p.violet
                ? "0 0 14px 2px rgba(180,160,255,0.95)"
                : "0 0 14px 2px rgba(255,255,255,0.85)",
            }}
            animate={{ opacity: [0.1, p.peak, 0.1], scale: [0.8, 1.15, 0.8] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
