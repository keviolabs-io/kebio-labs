"use client";

import { useEffect, useRef } from "react";

/**
 * Fond décoratif « vortex » : des arcs concentriques de petits points,
 * tordus en spirale autour d'un centre bas — reproduit le motif pointillé
 * de la section Témoignages du thème. Dessiné sur un canvas, responsive.
 */
export default function SpiralDots({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const draw = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Centre du vortex : bas-centre de la zone.
      const cx = w * 0.5;
      const cy = h * 0.52; // vortex centré verticalement → fond en haut et en bas
      const R = Math.hypot(w, h) * 0.72; // rayon maxi
      const stretchX = 1.42; // étirement horizontal (fan large)
      const swirlMax = 5.2; // torsion maxi (radians) au centre → bras spiralés
      const ringGap = 14; // espacement des anneaux (arcs distincts)

      ctx.fillStyle = "#ffffff";
      for (let r = ringGap; r < R; r += ringGap) {
        const t = r / R; // 0 au centre, 1 au bord
        const swirl = swirlMax * (1 - t); // dégradé linéaire → spirale continue
        // points denses le long de l'arc → les anneaux se lisent comme des lignes
        const dotSpacing = 6.5;
        const count = Math.max(16, Math.round((2 * Math.PI * r) / dotSpacing));
        for (let i = 0; i < count; i++) {
          const a = (i / count) * Math.PI * 2 + swirl;
          const x = cx + Math.cos(a) * r * stretchX;
          const y = cy + Math.sin(a) * r;
          if (x < -20 || x > w + 20 || y < -20 || y > h + 20) continue;
          // opacité : s'estompe radialement (le fondu vertical est géré par le masque CSS)
          const rfade = 1 - t * 0.55;
          const alpha = 0.42 * rfade;
          if (alpha <= 0.01) continue;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(x, y, 1.05, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    draw();
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Dégradé de masque : le motif se fond dans le noir en haut et surtout en
  // bas → aucune délimitation nette entre les sections.
  const fade =
    "linear-gradient(to bottom, transparent 0%, black 14%, black 62%, transparent 100%)";

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ maskImage: fade, WebkitMaskImage: fade }}
      aria-hidden
    />
  );
}
