"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView, animate, motion, useScroll, useTransform } from "framer-motion";
import { about, site } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DIM = "#808080";
const BRIGHT = "#ededed";

/** Compteur qui monte (0 → value) à l'apparition. */
function Counter({ value }: { value: number }) {
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

  return <span ref={ref}>{display}</span>;
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  // Zoom du nom en arrière-plan, piloté par le scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const wmScale = useTransform(scrollYProgress, [0, 1], [0.7, 1.45]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const el = textRef.current;
    if (!el) return;

    const wordsEls = el.querySelectorAll<HTMLElement>("[data-word]");
    if (prefersReduced) {
      gsap.set(wordsEls, { color: BRIGHT });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsEls,
        { color: DIM },
        {
          color: BRIGHT,
          ease: "none",
          stagger: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            end: "center 35%",
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const words = about.paragraph.split(" ");

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden px-6 py-12 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center">
          <SectionLabel icon="★" center>
            {about.label}
          </SectionLabel>
        </div>

        {/* Bloc texte avec le nom flouté qui zoome en arrière-plan */}
        <div className="relative mt-12 py-4 md:mt-16">
          <motion.span
            aria-hidden
            style={{ scale: wmScale }}
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif-italic text-[28vw] leading-none text-white/[0.5] blur-[3px] md:text-[18vw] md:text-white/[0.28] md:blur-[4px]"
          >
            {site.name.toLowerCase()}
          </motion.span>

          {/* Révélation mot par mot (gris → blanc) */}
          <p
            ref={textRef}
            className="relative z-10 mx-auto max-w-[52rem] text-center text-xl font-medium leading-[1.5] tracking-tight sm:text-[2rem] sm:leading-[1.4]"
          >
            {words.map((word, wi) => (
              <Fragment key={wi}>
                <span data-word className="inline-block" style={{ color: DIM }}>
                  {word}
                </span>
                {wi < words.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </p>
        </div>

        {/* Stats : conteneur pointillé, séparateurs, chiffre animé */}
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-border md:mt-20">
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
          <div className="relative grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center px-6 py-9 text-center md:items-start md:px-10 md:py-12 md:text-left"
              >
                <p className="text-sm text-muted">{s.label}</p>
                <div className="mt-5 flex items-baseline gap-1.5 text-6xl font-medium leading-none tracking-tight md:mt-8 md:gap-3 md:text-[6.5rem] lg:text-[7.5rem]">
                  <span className="bg-gradient-to-b from-white via-white/90 to-white/25 bg-clip-text text-transparent">
                    <Counter value={s.value} />
                  </span>
                  <span className="text-foreground/90">{s.suffix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
