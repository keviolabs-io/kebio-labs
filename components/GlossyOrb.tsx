"use client";

import { motion } from "framer-motion";

/**
 * Placeholder de l'objet 3D du hero — un orbe verre/chrome en pur CSS.
 * Remplace-le plus tard par ton rendu (image/vidéo) via <Media/> si tu veux.
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
      <motion.div
        className="h-full w-full"
        animate={{ y: [0, -18, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(130% 130% at 32% 22%, #7a7a7a 0%, #2b2b2b 26%, #0c0c0c 60%, #000 100%)",
            boxShadow:
              "inset -30px -40px 90px rgba(0,0,0,0.9), inset 30px 30px 70px rgba(255,255,255,0.18), 0 60px 120px rgba(0,0,0,0.7)",
          }}
        >
          {/* Reflets */}
          <div
            className="absolute left-[18%] top-[12%] h-[34%] w-[26%] rounded-full blur-[6px]"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.75), rgba(255,255,255,0) 70%)",
            }}
          />
          <div
            className="absolute bottom-[16%] right-[20%] h-[20%] w-[16%] rounded-full blur-[4px]"
            style={{
              background:
                "radial-gradient(circle, rgba(180,170,255,0.35), rgba(180,170,255,0) 70%)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
