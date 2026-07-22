"use client";

import { useEffect, useRef, useState } from "react";
import { whenIntroDone } from "@/lib/intro-gate";

/** Vidéo de fond du hero : lecture forcée + voile de lisibilité.
 *  Sert le WebM (AV1, ~2× plus léger) si le navigateur le supporte, sinon le
 *  MP4. Le chargement est différé jusqu'à la fin du rideau d'intro. */
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

  // Image d'aperçu (1re image de la vidéo) affichée immédiatement — évite
  // l'écran noir pendant que la vidéo se charge.
  const poster = src.replace(/\.mp4$/, "-poster.jpg");

  // On choisit la source (webm si supporté, sinon mp4) une fois l'intro finie.
  useEffect(() => {
    const webm = src.replace(/\.mp4$/, ".webm");
    whenIntroDone(() => {
      const v = ref.current;
      const canAV1 =
        !!v &&
        v.canPlayType('video/webm; codecs="av01.0.05M.08"') !== "";
      setActiveSrc(canAV1 ? webm : src);
    });
  }, [src]);

  useEffect(() => {
    if (!activeSrc) return;
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, [activeSrc]);

  if (failed) return null;

  return (
    <>
      <video
        ref={ref}
        src={activeSrc ?? undefined}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={() => {
          // Si le webm échoue, on retombe sur le mp4 ; sinon on masque.
          const webm = src.replace(/\.mp4$/, ".webm");
          if (activeSrc === webm) setActiveSrc(src);
          else setFailed(true);
        }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      {/* Voile pour la lisibilité du texte */}
      {dim && (
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
      )}
    </>
  );
}
