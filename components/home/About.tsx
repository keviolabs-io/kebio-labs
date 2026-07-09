"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView, animate } from "framer-motion";
import { about } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DIM = "#808080";
const BRIGHT = "#ededed";

/** Compteur qui monte (0 → value) à l'apparition. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const el = textRef.current;
    if (!el) return;

    const chars = el.querySelectorAll<HTMLElement>("[data-char]");
    if (prefersReduced) {
      gsap.set(chars, { color: BRIGHT });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { color: DIM },
        {
          color: BRIGHT,
          ease: "none",
          stagger: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 72%",
            end: "bottom 62%",
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  // Découpe en mots (inline-block) puis en caractères (span colorable).
  const words = about.paragraph.split(" ");

  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center">
          <SectionLabel icon="★" center>
            {about.label}
          </SectionLabel>
        </div>

        {/* Révélation caractère par caractère */}
        <p
          ref={textRef}
          className="mx-auto mt-16 max-w-[34rem] text-center text-[1.7rem] font-medium leading-[1.35] tracking-tight"
          style={{ color: DIM }}
        >
          {words.map((word, wi) => (
            <span key={wi} className="inline-block">
              {word.split("").map((ch, ci) => (
                <span key={ci} data-char>
                  {ch}
                </span>
              ))}
              {wi < words.length - 1 ? " " : ""}
            </span>
          ))}
        </p>

        {/* Stats : conteneur pointillé + label + trait + grand chiffre animé */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-border">
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
          <div className="relative grid grid-cols-1 gap-y-12 p-8 sm:p-12 md:grid-cols-3 md:gap-x-10">
            {about.stats.map((s) => (
              <div key={s.label}>
                <p className="text-sm text-muted">{s.label}</p>
                <div className="mt-4 border-t border-border" />
                <div className="mt-8 bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-[5rem] font-medium leading-none tracking-tight text-transparent sm:text-[7rem] lg:text-[8rem]">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
