"use client";

import { useEffect } from "react";
import { getLenis } from "@/lib/lenis";

/**
 * Défile vers l'élément ciblé par l'ancre de l'URL (#web, #seo…) au montage.
 * Passe par Lenis quand le smooth scroll est actif, sinon fallback natif.
 * Réessaie tant que la cible n'est pas encore rendue.
 */
export default function ScrollToHash({ offset = -110 }: { offset?: number }) {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));

    let tries = 0;
    let raf = 0;
    const go = () => {
      const el = document.getElementById(id);
      if (el) {
        const lenis = getLenis();
        if (lenis) {
          lenis.scrollTo(el, { offset, duration: 1.2 });
        } else {
          const y =
            el.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        return;
      }
      if (tries++ < 12) raf = window.setTimeout(go, 80);
    };
    const t = window.setTimeout(go, 120);

    return () => {
      clearTimeout(t);
      clearTimeout(raf);
    };
  }, [offset]);

  return null;
}
