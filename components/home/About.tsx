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

  const words = about.paragraph.split(" ");

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center">
          <SectionLabel icon="★" center>
            {about.label}
          </SectionLabel>
        </div>

        {/* Bloc texte avec le nom flouté qui zoome en arrière-plan */}
        <div className="relative mt-16 py-4">
          <motion.span
            aria-hidden
            style={{ scale: wmScale }}
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif-italic text-[26vw] leading-none text-white/[0.05] blur-[7px] md:text-[18vw]"
          >
            {site.name.toLowerCase()}
          </motion.span>

          {/* Révélation caractère par caractère */}
          <p
            ref={textRef}
            className="relative z-10 mx-auto max-w-[34rem] text-center text-[1.7rem] font-medium leading-[1.35] tracking-tight"
            style={{ color: DIM }}
          >
            {words.map((word, wi) => (
              <Fragment key={wi}>
                <span className="inline-block">
                  {word.split("").map((ch, ci) => (
                    <span key={ci} data-char>
                      {ch}
                    </span>
                  ))}
                </span>
                {wi < words.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </p>
        </div>

        {/* Stats : conteneur pointillé + label + trait + grand chiffre animé */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-border">
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
          <div className="relative grid grid-cols-1 gap-y-12 p-8 sm:p-12 md:grid-cols-3 md:gap-x-10">
            {about.stats.map((s) => (
              <div key={s.label}>
                <p className="text-sm text-muted">{s.label}</p>
                <div className="mt-4 border-t border-border" />
                <div className="mt-8 flex items-baseline gap-3 text-[5rem] font-medium leading-none tracking-tight sm:gap-4 sm:text-[7rem] lg:text-[8rem]">
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
