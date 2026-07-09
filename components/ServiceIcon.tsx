"use client";

import { useEffect, useState } from "react";
import type { IconType } from "react-icons";

const EXTS = ["webp", "png", "jpg", "svg"];

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
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" aria-hidden className="h-36 w-36 select-none object-contain" />;
  }

  // Repli (ou pendant le test) : icône vectorielle dans une boîte
  return (
    <div className="grid h-24 w-24 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <Fallback className="h-9 w-9" />
    </div>
  );
}
