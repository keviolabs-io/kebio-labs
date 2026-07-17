"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { site } from "@/lib/content";
import { markIntroDone } from "@/lib/intro-gate";

const EASE = [0.22, 1, 0.36, 1] as const;
const INTRO_VIDEO = "/hero/intro.mp4";
const INTRO_VIDEO_MOBILE = "/hero/intro-mobile.mp4";

/** Le conteneur du site (scalé pour l'effet caméra). */
function getZoom() {
  return typeof document !== "undefined"
    ? document.getElementById("site-zoom")
    : null;
}

function clearZoom() {
  const z = getZoom();
  if (!z) return;
  z.style.transition = "";
  z.style.transform = "";
  z.style.transformOrigin = "";
  z.style.willChange = "";
}

type Phase = "load" | "shatter" | "fade";

/**
 * Rideau d'ouverture : vidéo en fond + wordmark révélé + compteur 0→100,
 * puis la vidéo se FRAGMENTE en éclats qui se dissipent (canvas) pour
 * révéler le site (avec dézoom caméra). Fallback fondu si vidéo absente.
 * Une seule fois par session ; désactivé si prefers-reduced-motion.
 */
export default function Intro() {
  const [visible, setVisible] = useState(true);
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<Phase>("load");
  const [display, setDisplay] = useState(0);
  // Mobile : version 720p légère (démarre vite) ; desktop : 1080p (net).
  // Défaut = léger (SSR) : le mobile charge le bon fichier dès l'analyse du
  // HTML, sans attendre l'hydratation ; le desktop bascule sur le 1080p.
  const [videoSrc] = useState(() =>
    typeof window !== "undefined" && window.innerWidth >= 768
      ? INTRO_VIDEO
      : INTRO_VIDEO_MOBILE
  );

  const count = useMotionValue(0);
  const progress = useTransform(count, [0, 100], [0, 1]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem("kv_intro_seen") === "1";
    } catch {}

    if (seen || reduced) {
      setVisible(false);
      markIntroDone(); // pas d'intro → on libère les vidéos de fond tout de suite
      return;
    }
    try {
      sessionStorage.setItem("kv_intro_seen", "1");
    } catch {}

    setStarted(true);
    document.body.style.overflow = "hidden";

    // Effet caméra (zoom du site) : desktop uniquement. Sur mobile, scaler
    // toute la page provoque des saccades au lancement → on le désactive.
    const isMobile = window.innerWidth < 768;
    const zoom = getZoom();
    if (zoom && !isMobile) {
      zoom.style.transformOrigin = `50% ${
        window.scrollY + window.innerHeight / 2
      }px`;
      zoom.style.willChange = "transform";
      zoom.style.transform = "scale(1.08)";
    }

    const finish = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      markIntroDone();
      clearZoom();
      document.body.style.overflow = "";
      setVisible(false);
    };

    const zoomOut = () => {
      if (isMobile) return;
      const z = getZoom();
      if (z) {
        z.style.transition = "transform 1s cubic-bezier(0.22, 1, 0.36, 1)";
        z.style.transform = "scale(1)";
      }
    };

    let controls: { stop: () => void } | null = null;
    let begun = false;

    const begin = () => {
      if (begun) return;
      begun = true;
      controls = animate(count, 100, {
      duration: 2.5,
      ease: [0.45, 0, 0.15, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => {
        // Le site se dézoome (desktop) + on libère les vidéos de fond.
        zoomOut();
        markIntroDone();
        // Le rideau devient transparent petit à petit → le site apparaît.
        setPhase("fade");
        setTimeout(finish, 850);
      },
    });
    };

    // Le compteur ne démarre que lorsque la vidéo tourne (donc bien visible) ;
    // sinon au bout d'un court délai max — l'intro ne bloque jamais.
    const video = videoRef.current;
    if (video) {
      // Desktop : le SSR sert le léger (pour un mobile rapide) → on passe en
      // 1080p net. Le mobile garde sa source légère chargée dès le HTML.
      if (window.innerWidth >= 768) video.src = INTRO_VIDEO;
      // Garantit un vrai muet (l'attribut React n'applique pas toujours la
      // propriété DOM) → autoplay immédiat sur mobile, sans blocage.
      video.muted = true;
      video.defaultMuted = true;
      const tryPlay = () => video.play().catch(() => {});
      tryPlay();
      // Relance dès que des données arrivent (utile sur mobile).
      video.addEventListener("loadeddata", tryPlay, { once: true });
      video.addEventListener("canplay", tryPlay, { once: true });
    }

    // On démarre le compteur TOUT DE SUITE : le poster (1re image) masque le
    // court délai de lancement de la vidéo, qui enchaîne sans transition
    // visible. Le compteur qui bouge évite toute sensation de « figé ».
    begin();

    // Garde-fou global : rend la main quoi qu'il arrive.
    const safety = setTimeout(finish, 7000);

    return () => {
      controls?.stop();
      clearTimeout(safety);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearZoom();
      document.body.style.overflow = "";
    };
  }, [count]);

  if (!visible) return null;

  const chars = site.name.toLowerCase().split("");
  const fading = phase === "fade";

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden bg-background"
      style={{
        opacity: fading ? 0 : 1,
        transition: fading ? "opacity 0.8s ease" : "none",
      }}
    >
      {/* Vidéo de fond */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster="/hero/intro-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Voile sombre pour la lisibilité */}
      <div className="pointer-events-none absolute inset-0 bg-black/35" />

      {/* Contenu : wordmark + compteur + barre */}
      {started && (
        <motion.div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-1/2 h-[40vh] w-[70vw] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.06), transparent)",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-end text-[clamp(3.5rem,11vw,10rem)] font-medium tracking-tight">
              <span className="inline-flex overflow-hidden pb-[0.16em]">
                {chars.map((ch, i) => (
                  <motion.span
                    key={i}
                    className="inline-block whitespace-pre font-serif-italic"
                    initial={{ y: "120%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.75, ease: EASE, delay: 0.12 + i * 0.05 }}
                  >
                    {ch === " " ? " " : ch}
                  </motion.span>
                ))}
              </span>
              <motion.sup
                className="ml-1 align-super text-[0.32em] text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                ®
              </motion.sup>
            </span>
          </div>

          <div className="absolute bottom-8 right-8 text-6xl font-medium tabular-nums tracking-tight text-muted md:bottom-12 md:right-12 md:text-8xl">
            {display}
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-white/30 to-white"
            style={{ scaleX: progress }}
          />
        </motion.div>
      )}
    </div>
  );
}
