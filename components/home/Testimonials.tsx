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
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-white/25 to-white/5 text-sm font-medium text-[#ededed] ring-1 ring-white/15">
      {initials}
    </div>
  );
}

/** Un témoignage : boîte translucide (citation) + avatar/nom/rôle en-dessous. */
function Card({
  quote,
  name,
  company,
}: {
  quote: string;
  name: string;
  company: string;
}) {
  return (
    <div className="w-[416px] max-w-full">
      <div
        className="rounded-2xl border border-white/10 px-8 py-10"
        style={{
          background: "rgba(18,18,20,0.85)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
        }}
      >
        <p className="text-base leading-6 text-[#bbbbbb]">«&nbsp;{quote}&nbsp;»</p>
      </div>
      <div className="mt-5 flex items-center gap-4">
        <Avatar name={name} />
        <div>
          <p className="text-base font-semibold leading-tight text-[#ededed]">
            {name}
          </p>
          <p className="text-sm text-[#999999]">{company}</p>
        </div>
      </div>
    </div>
  );
}

// Positions des cartes dans le champ (canevas 1470 × 1059), inspirées du thème
// et complétées de 2 cartes pour remplir les zones vides (sans masquer le titre).
const LAYOUT = [
  { left: "9%", top: 40 }, // Camille — haut-gauche
  { left: "60%", top: 90 }, // Yanis — haut-droite
  { left: "36%", top: 250 }, // Marie — centre-haut
  { left: "4.9%", top: 520 }, // Thomas — milieu-gauche
  { left: "62%", top: 640 }, // Sarah — milieu-droite
  { left: "28%", top: 780 }, // Karim — bas-centre-gauche
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
  const items = testimonials.items.slice(0, 6);

  // Révélation gris → blanc de la ligne sans-serif, pilotée par le scroll.
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    if (prefersReduced) {
      gsap.set(words, { color: BRIGHT });
      return;
    }
    const ctx = gsap.context(() => {
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
    return () => ctx.revert();
  }, []);

  const sansWords = testimonials.titleSans.split(" ");

  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-24">
      <SpiralDots className="pointer-events-none absolute inset-0" />

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

      {/* ---------- Mobile : pill + titre + pile de cartes ---------- */}
      <div className="lg:hidden">
        <div className="flex justify-center">
          <SectionLabel icon="❝" center>
            {testimonials.label}
          </SectionLabel>
        </div>
        <h2 className="mt-8 text-center text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
          <span className="font-serif-italic font-normal text-foreground">
            {testimonials.titleItalic}
          </span>{" "}
          <span className="text-foreground">{testimonials.titleSans}</span>
        </h2>
        <div className="mt-14 flex flex-col items-center gap-12">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Card quote={t.quote} name={t.name} company={t.company} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
