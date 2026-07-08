"use client";

import { motion } from "framer-motion";

/**
 * Placeholder de l'objet 3D du hero — un blob de VERRE LIQUIDE en pur CSS.
 * - Forme organique qui se déforme lentement (morphing).
 * - Reflets glossy + liseré lumineux, sur fond sombre.
 * Remplace-le par ton vrai rendu (image/vidéo Spline, Blender…) via <Media/>
 * quand tu l'auras : voir components/home/Hero.tsx.
 */
export default function GlossyOrb({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none relative aspect-square ${className}`}
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      {/* Halo lumineux diffus derrière le blob */}
      <div
        className="absolute inset-[8%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 35%, rgba(150,140,255,0.18), rgba(0,0,0,0) 60%)",
        }}
      />

      {/* Flottement global */}
      <motion.div
        className="h-full w-full"
        animate={{ y: [0, -20, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Morphing organique de la forme (blob liquide) */}
        <motion.div
          className="relative h-full w-full"
          animate={{
            borderRadius: [
              "60% 40% 55% 45% / 55% 50% 50% 45%",
              "50% 55% 45% 60% / 60% 45% 55% 40%",
              "55% 45% 60% 40% / 45% 55% 45% 55%",
              "60% 40% 55% 45% / 55% 50% 50% 45%",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(130% 130% at 32% 22%, #8a8a8a 0%, #303030 24%, #0d0d0d 58%, #000 100%)",
            boxShadow:
              "inset -30px -44px 90px rgba(0,0,0,0.92), inset 34px 30px 80px rgba(255,255,255,0.22), inset 0 0 60px rgba(140,130,255,0.06), 0 60px 130px rgba(0,0,0,0.75)",
          }}
        >
          {/* Reflet principal (spéculaire) */}
          <div
            className="absolute left-[16%] top-[10%] h-[38%] w-[30%] rounded-full blur-[8px]"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.9), rgba(255,255,255,0) 70%)",
            }}
          />
          {/* Petit reflet net */}
          <div
            className="absolute left-[24%] top-[16%] h-[10%] w-[8%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,1), rgba(255,255,255,0) 70%)",
            }}
          />
          {/* Reflet iridescent bas-droite */}
          <div
            className="absolute bottom-[14%] right-[18%] h-[26%] w-[22%] rounded-full blur-[10px]"
            style={{
              background:
                "radial-gradient(circle, rgba(150,130,255,0.4), rgba(150,130,255,0) 70%)",
            }}
          />
          {/* Liseré lumineux sur le bord (effet verre) */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "inherit",
              boxShadow: "inset 0 2px 14px rgba(255,255,255,0.25)",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
