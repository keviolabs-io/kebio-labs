"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Image avec placeholder dégradé.
 * - Affiche un dégradé sombre tant que l'image n'est pas chargée
 *   (ou si le fichier n'existe pas encore).
 * - Dépose simplement ton image au chemin `src` (dans /public) et
 *   elle remplacera automatiquement le placeholder.
 */
export default function Media({
  src,
  alt,
  className = "",
  imgClassName = "",
  fit = "cover",
  onNaturalSize,
}: {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fit?: "cover" | "contain";
  onNaturalSize?: (width: number, height: number) => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const reveal = (img: HTMLImageElement) => {
    setLoaded(true);
    onNaturalSize?.(img.naturalWidth, img.naturalHeight);
  };

  // Cas où l'image (souvent en cache) finit de charger AVANT que React
  // n'attache onLoad : on vérifie l'état réel au montage / changement de src.
  useEffect(() => {
    setFailed(false);
    const img = imgRef.current;
    if (img?.complete) {
      if (img.naturalWidth > 0) reveal(img);
      else setFailed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-card ${className}`}>
      {/* Placeholder */}
      <div
        aria-hidden
        className={`absolute inset-0 transition-opacity duration-700 ${
          loaded && !failed ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "radial-gradient(120% 120% at 30% 20%, #1c1c1c 0%, #0d0d0d 55%, #060606 100%)",
        }}
      >
        <div className="absolute inset-0 bg-dots opacity-40" />
      </div>
      {src && !failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={(e) => reveal(e.currentTarget)}
          onError={() => setFailed(true)}
          className={`relative h-full w-full transition-opacity duration-700 ${
            fit === "contain" ? "object-contain" : "object-cover"
          } ${loaded ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
