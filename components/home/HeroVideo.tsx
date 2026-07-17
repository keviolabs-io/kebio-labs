"use client";

import { useEffect, useRef, useState } from "react";
import { whenIntroDone } from "@/lib/intro-gate";

/** Vidéo de fond du hero : lecture forcée + voile de lisibilité.
 *  Le chargement est différé jusqu'à la fin du rideau d'intro, pour laisser
 *  toute la bande passante à la vidéo de l'intro (démarrage net). */
export default function HeroVideo({
  src,
  dim = true,
}: {
  src: string;
  /** Voile sombre pour la lisibilité du texte (désactivable). */
  dim?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  // On n'attache la source qu'une fois l'intro terminée (ou tout de suite s'il
  // n'y a pas d'intro sur ce chargement).
  useEffect(() => {
    whenIntroDone(() => setActiveSrc(src));
  }, [src]);

  useEffect(() => {
    if (!activeSrc) return;
    ref.current?.play().catch(() => {});
  }, [activeSrc]);

  if (failed) return null;

  return (
    <>
      <video
        ref={ref}
        src={activeSrc ?? undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={() => setFailed(true)}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      {/* Voile pour la lisibilité du texte */}
      {dim && (
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
      )}
    </>
  );
}
