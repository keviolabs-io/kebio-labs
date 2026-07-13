"use client";

import { Fragment, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DIM = "#808080";
const BRIGHT = "#ededed";

/** Avatar rond avec les initiales (dégradé) — pas d'asset requis. */
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-white/25 to-white/5 text-sm font-medium text-foreground ring-1 ring-white/15">
      {initials}
    </div>
  );
}

/** Un témoignage : carte translucide (citation) + avatar/nom/rôle en-dessous. */
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
        className="rounded-2xl px-8 py-10"
        style={{
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
        }}
      >
        <p className="text-base leading-6 text-[#bbbbbb]">«&nbsp;{quote}&nbsp;»</p>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <Avatar name={name} />
        <div>
          <p className="text-base font-semibold text-[#ededed]">{name}</p>
          <p className="text-sm text-[#999999]">{company}</p>
        </div>
      </div>
    </div>
  );
}

// Positions dispersées mesurées sur le thème (section 1470×1059).
const LAYOUT = [
  { left: "16.8%", top: "9.3%", scale: 0.5 },
  { left: "69.1%", top: "25.4%", scale: 0.5 },
  { left: "4.9%", top: "50%", scale: 1 },
  { left: "51.4%", top: "64.7%", scale: 1 },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const items = testimonials.items.slice(0, 4);

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
          scrollTrigger: { trigger: el, start: "top 88%", end: "center 45%", scrub: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  const sansWords = testimonials.titleSans.split(" ");

  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />

      <div className="relative mx-auto max-w-[1470px]">
        <div className="flex justify-center">
          <SectionLabel icon="❝" center>
            {testimonials.label}
          </SectionLabel>
        </div>

        {/* ---------- Titre + cartes dispersées (desktop) ---------- */}
        <div className="relative mt-16 hidden lg:block" style={{ height: 1059 }}>
          {/* Titre centré, en arrière-plan */}
          <div className="absolute inset-x-0 top-[26%] z-0 text-center">
            <h2
              ref={headingRef}
              className="mx-auto max-w-4xl text-[64px] font-medium leading-[72px] tracking-tight"
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

          {/* Cartes flottantes */}
          {items.map((t, i) => {
            const pos = LAYOUT[i];
            return (
              <motion.div
                key={i}
                className="absolute z-10"
                style={{ left: pos.left, top: pos.top, transformOrigin: "top left" }}
                initial={{ opacity: 0, y: 40, scale: pos.scale * 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: pos.scale }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
              >
                <Card quote={t.quote} name={t.name} company={t.company} />
              </motion.div>
            );
          })}
        </div>

        {/* ---------- Version mobile : titre + pile de cartes ---------- */}
        <div className="lg:hidden">
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
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <Card quote={t.quote} name={t.name} company={t.company} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
