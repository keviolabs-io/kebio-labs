"use client";

import { useEffect, useState } from "react";
import type { IconType } from "react-icons";

const EXTS = ["webp", "png", "jpg", "svg"];

// Ajustements par icône pour égaliser taille + alignement vertical
// (chaque rendu 3D a un cadrage interne différent). Référence : web.
const ADJUST: Record<string, { s: number; y: number }> = {
  web: { s: 1.0, y: -3 },
  automation: { s: 1.19, y: -14 },
  ads: { s: 1.15, y: -2 },
  seo: { s: 1.15, y: -3 },
};

/**
 * Icône d'un service.
 * - Précharge /services/<key>.<ext> (rendu 3D, transparent) ; si une image existe,
 *   elle est affichée en standalone.
 * - Sinon, repli propre sur l'icône vectorielle (dans une boîte).
 * Pour ajouter une icône 3D : dépose public/services/<key>.webp (ou .png).
 */
export default function ServiceIcon({
  iconKey,
  Fallback,
}: {
  iconKey: string;
  Fallback: IconType;
}) {
  // undefined = en cours de test, null = pas d'image, string = url trouvée
  const [src, setSrc] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const ext of EXTS) {
        const url = `/services/${iconKey}.${ext}`;
        const ok = await new Promise<boolean>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = url;
        });
        if (cancelled) return;
        if (ok) {
          setSrc(url);
          return;
        }
      }
      if (!cancelled) setSrc(null);
    })();
    return () => {
      cancelled = true;
    };
  }, [iconKey]);

  if (src) {
    const adj = ADJUST[iconKey] ?? { s: 1, y: 0 };
    return (
      <div className="flex h-44 w-44 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          aria-hidden
          className="h-full w-full select-none object-contain"
          style={{ transform: `translateY(${adj.y}px) scale(${adj.s})` }}
        />
      </div>
    );
  }

  // Repli (ou pendant le test) : icône vectorielle dans une boîte
  return (
    <div className="grid h-24 w-24 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <Fallback className="h-9 w-9" />
    </div>
  );
}
