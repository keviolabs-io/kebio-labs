"use client";

import { useState } from "react";

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
}: {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

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
      />
      {src && !failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`relative h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
