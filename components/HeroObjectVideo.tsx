"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Variante vidéo de HeroObject : lit une vidéo 3D (fond noir/transparent)
 * avec la même apparition + le même flottement que le blob.
 */
export default function HeroObjectVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, []);

  if (failed) return null;

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none relative ${className}`}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.4, ease: easeOut, delay: 0.2 }}
    >
      <motion.video
        ref={ref}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={() => setFailed(true)}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="h-auto w-full select-none"
      />
    </motion.div>
  );
}
