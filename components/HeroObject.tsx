"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GlossyOrb from "@/components/GlossyOrb";

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Objet 3D du hero.
 * Affiche l'image transparente /hero/object.webp (rendu Spline/DALL·E).
 * Si le fichier manque, retombe automatiquement sur le blob CSS (GlossyOrb).
 * Pour changer l'objet : remplace public/hero/object.webp.
 */
export default function HeroObject({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) return <GlossyOrb className={className} />;

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none relative ${className}`}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.4, ease: easeOut, delay: 0.2 }}
    >
      <motion.img
        src="/hero/object.webp"
        alt=""
        onError={() => setFailed(true)}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="h-auto w-full select-none"
      />
    </motion.div>
  );
}
