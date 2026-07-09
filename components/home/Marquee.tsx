"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { marqueeItems } from "@/lib/content";

/** Boucle une valeur entre min et max (pour le défilement infini). */
function wrap(min: number, max: number, v: number) {
  const range = max - min;
  const mod = (((v - min) % range) + range) % range;
  return mod + min;
}

/**
 * Bandeau défilant piloté par le scroll (technos & outils).
 * - Défile vers la GAUCHE quand on scrolle vers le bas.
 * - Repart vers la DROITE quand on scrolle vers le haut.
 * - Accélère selon la vitesse de scroll.
 * Uniquement transform → fluide sur Chrome & Safari.
 */
export default function Marquee() {
  const baseVelocity = -2.5; // dérive de base (négatif = gauche par défaut), en %/s
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  // La liste est doublée → on boucle sur -50% (une liste) à 0%.
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Sens du défilement selon la direction du scroll
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    // Accélération proportionnelle à la vitesse de scroll
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="overflow-hidden border-y border-border py-8">
      <motion.div
        style={{ x }}
        className="flex w-max items-center gap-16 whitespace-nowrap px-8"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className={`text-4xl tracking-tight text-muted-dark sm:text-6xl ${
              i % 3 === 2 ? "font-serif-italic" : "font-medium"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
