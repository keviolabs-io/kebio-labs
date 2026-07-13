"use client";

import { Fragment, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import SpiralDots from "@/components/home/SpiralDots";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DIM = "#808080";
const BRIGHT = "#ededed";
const EASE = [0.22, 1, 0.36, 1] as const;

/** Avatar rond avec les initiales (dégradé) — substitut aux photos du thème. */
function Avatar({ name, compact = false }: { name: string; compact?: boolean }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-white/25 to-white/5 font-medium text-[#ededed] ring-1 ring-white/15 ${
        compact ? "h-8 w-8 text-[11px]" : "h-12 w-12 text-sm"
      }`}
    >
      {initials}
    </div>
  );
}

/** Un témoignage : boîte translucide (citation) + avatar/nom/rôle en-dessous. */
function Card({
  quote,
  name,
  company,
  compact = false,
}: {
  quote: string;
  name: string;
  company: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "w-[175px]" : "w-[416px] max-w-full"}>
      <div
        className={`rounded-2xl border border-white/10 ${
          compact ? "px-4 py-5" : "px-8 py-10"
        }`}
        style={{
          background: "rgba(18,18,20,0.85)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
        }}
      >
        <p
          className={
            compact
              ? "text-[12px] leading-[1.45] text-[#bbbbbb]"
              : "text-base leading-6 text-[#bbbbbb]"
          }
        >
          «&nbsp;{quote}&nbsp;»
        </p>
      </div>
      <div className={`flex items-center ${compact ? "mt-3 gap-2.5" : "mt-5 gap-4"}`}>
        <Avatar name={name} compact={compact} />
        <div>
          <p
            className={`font-semibold leading-tight text-[#ededed] ${
              compact ? "text-[13px]" : "text-base"
            }`}
          >
            {name}
          </p>
          <p className={compact ? "text-[11px] text-[#999999]" : "text-sm text-[#999999]"}>
            {company}
          </p>
        </div>
      </div>
    </div>
  );
}

// Positions des cartes dans le champ (canevas 1470 × 1059), inspirées du thème
// et complétées de 2 cartes pour remplir les zones vides (sans masquer le titre).
// Cartes réparties « en cercle » autour du titre (comme l'original Framer).
const LAYOUT = [
  { left: "9%", top: 40 }, // Camille — haut-gauche
  { left: "60%", top: 90 }, // Yanis — haut-droite
  { left: "36%", top: 250 }, // Marie — centre-haut
  { left: "4.9%", top: 520 }, // Thomas — milieu-gauche
  { left: "62%", top: 640 }, // Sarah — milieu-droite
  { left: "28%", top: 780 }, // Karim — bas-centre-gauche
];

// Mobile : 4 cartes compactes dispersées autour du titre (même esprit desktop).
const MOBILE_LAYOUT = [
  { left: "0%", top: 10 }, // haut-gauche
  { left: "50%", top: 60 }, // haut-droite
  { left: "0%", top: 400 }, // bas-gauche
  { left: "50%", top: 450 }, // bas-droite
];

/**
 * Carte pilotée par le scroll (GSAP ScrollTrigger, synchronisé avec Lenis) :
 * à mesure que la carte traverse l'écran de bas en haut, elle apparaît en
 * fondu + monte, reste nette au centre, puis s'estompe en sortant en haut.
 * L'effet rejoue dans les deux sens (scroll / retour), en continu.
 */
function ScrollCard({
  pos,
  children,
}: {
  pos: { left: string; top: number };
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      gsap.set(el, { opacity: 1, y: 0, scale: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
      tl.fromTo(
        el,
        { opacity: 0, yPercent: 14, scale: 0.9 },
        { opacity: 1, yPercent: 0, scale: 1, duration: 0.28 }
      )
        .to(el, { opacity: 1, duration: 0.44 })
        .to(el, { opacity: 0, yPercent: -14, scale: 0.95, duration: 0.28 });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute z-10"
      style={{ left: pos.left, top: pos.top, willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
}

export default function Testimonials() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const mobileHeadingRef = useRef<HTMLHeadingElement>(null);
  const items = testimonials.items.slice(0, 6);

  // Révélation gris → blanc de la ligne sans-serif, pilotée par le scroll,
  // appliquée à la variante visible du titre (desktop OU mobile).
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const setup = (el: HTMLElement | null) => {
      if (!el || el.offsetParent === null) return null; // ignore la variante masquée
      const words = el.querySelectorAll<HTMLElement>("[data-word]");
      if (prefersReduced) {
        gsap.set(words, { color: BRIGHT });
        return null;
      }
      return gsap.context(() => {
        gsap.fromTo(
          words,
          { color: DIM },
          {
            color: BRIGHT,
            ease: "none",
            stagger: 1,
            scrollTrigger: { trigger: el, start: "top 82%", end: "center 42%", scrub: true },
          }
        );
      }, el);
    };
    const ctxs = [
      setup(headingRef.current),
      setup(mobileHeadingRef.current),
    ].filter(Boolean) as Array<ReturnType<typeof gsap.context>>;
    return () => ctxs.forEach((c) => c.revert());
  }, []);

  const sansWords = testimonials.titleSans.split(" ");

  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-24">
      <SpiralDots className="pointer-events-none absolute inset-0" />
      {/* Dégradé de fin de section : le fond se fond dans le noir → transition
          douce vers la section suivante (au-dessus de la spirale, sous les cartes). */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-48 bg-gradient-to-b from-transparent to-background" />

      {/* ---------- Desktop : titre au centre + cartes dispersées ---------- */}
      <div className="relative mx-auto hidden max-w-[1470px] lg:block" style={{ height: 1059 }}>
        {/* Pill + titre, centrés au milieu du champ */}
        <div className="absolute inset-x-0 top-[470px] z-0 flex flex-col items-center text-center">
          <SectionLabel icon="❝" center>
            {testimonials.label}
          </SectionLabel>
          <h2
            ref={headingRef}
            className="mt-6 text-[64px] font-medium leading-[72px] tracking-tight"
          >
            <span className="font-serif-italic font-normal text-foreground">
              {testimonials.titleItalic}
            </span>
            <br />
            {sansWords.map((w, i) => (
              <Fragment key={i}>
                <span data-word className="inline-block" style={{ color: DIM }}>
                  {w}
                </span>
                {i < sansWords.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </h2>
        </div>

        {/* Cartes flottantes pilotées par le scroll */}
        {items.map((t, i) => (
          <ScrollCard key={i} pos={LAYOUT[i]}>
            <Card quote={t.quote} name={t.name} company={t.company} />
          </ScrollCard>
        ))}
      </div>

      {/* ---------- Mobile : titre au centre + 4 cartes compactes dispersées ---------- */}
      <div
        className="relative mx-auto lg:hidden"
        style={{ height: 640, maxWidth: 400 }}
      >
        {/* Pill + titre centrés */}
        <div className="absolute inset-x-0 top-[205px] z-0 flex flex-col items-center px-2 text-center">
          <SectionLabel icon="❝" center>
            {testimonials.label}
          </SectionLabel>
          <h2
            ref={mobileHeadingRef}
            className="mt-4 text-[1.6rem] font-medium leading-[1.15] tracking-tight"
          >
            <span className="font-serif-italic font-normal text-foreground">
              {testimonials.titleItalic}
            </span>
            <br />
            {sansWords.map((w, i) => (
              <Fragment key={i}>
                <span data-word className="inline-block" style={{ color: DIM }}>
                  {w}
                </span>
                {i < sansWords.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </h2>
        </div>

        {/* 4 cartes compactes pilotées par le scroll */}
        {items.slice(0, 4).map((t, i) => (
          <ScrollCard key={i} pos={MOBILE_LAYOUT[i]}>
            <Card compact quote={t.quote} name={t.name} company={t.company} />
          </ScrollCard>
        ))}
      </div>
    </section>
  );
}
