"use client";

import { useState } from "react";
import type { IconType } from "react-icons";

const EXTS = ["webp", "png", "jpg", "svg"];

/**
 * Icône d'un service.
 * - Essaie d'afficher /services/<key>.<ext> (rendu 3D, transparent).
 * - Si aucun fichier n'existe, retombe sur l'icône vectorielle (dans une boîte).
 * Pour ajouter une icône 3D : dépose public/services/<key>.webp (ou .png).
 */
export default function ServiceIcon({
  iconKey,
  Fallback,
}: {
  iconKey: string;
  Fallback: IconType;
}) {
  const [extIdx, setExtIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="grid h-24 w-24 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <Fallback className="h-9 w-9" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/services/${iconKey}.${EXTS[extIdx]}`}
      alt=""
      aria-hidden
      onError={() =>
        extIdx < EXTS.length - 1 ? setExtIdx(extIdx + 1) : setFailed(true)
      }
      className="h-24 w-24 select-none object-contain"
    />
  );
}
