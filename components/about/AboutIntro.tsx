"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about, aboutPage } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DIM = "#7a7a7a";
const BRIGHT = "#ededed";

export default function AboutIntro() {
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Révélation mot par mot (gris → blanc) : les mots s'allument un à un
  // au fil du scroll, du haut vers le bas.
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const el = textRef.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    if (prefersReduced) {
      gsap.set(words, { color: BRIGHT });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.set(words, { color: DIM });
      gsap.to(words, {
        color: BRIGHT,
        ease: "power2.out",
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top 62%",
          toggleActions: "play none none reverse",
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  // Révélation gris → blanc des grands chiffres
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const el = statsRef.current;
    if (!el) return;
    const nums = el.querySelectorAll<HTMLElement>("[data-num]");
    if (prefersReduced) {
      gsap.set(nums, { color: BRIGHT });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        nums,
        { color: DIM },
        {
          color: BRIGHT,
          ease: "none",
          stagger: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 96%",
            end: "center 68%",
            scrub: true,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center">
          <SectionLabel icon="★" center>
            {aboutPage.intro.label}
          </SectionLabel>
        </div>

        {/* Paragraphes révélés mot par mot */}
        <div
          ref={textRef}
          className="mx-auto mt-14 max-w-[46rem] space-y-8 text-center text-2xl font-medium leading-[1.4] tracking-tight sm:text-[2rem] md:mt-16"
        >
          {aboutPage.intro.paragraphs.map((p, pi) => {
            const words = p.split(" ");
            return (
              <p key={pi}>
                {words.map((w, wi) => (
                  <Fragment key={wi}>
                    <span data-word className="inline-block" style={{ color: DIM }}>
                      {w}
                    </span>
                    {wi < words.length - 1 ? " " : ""}
                  </Fragment>
                ))}
              </p>
            );
          })}
        </div>

        {/* Grands chiffres */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 gap-y-12 sm:grid-cols-3 md:mt-28"
        >
          {about.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="mb-2 text-sm text-muted md:mb-4">{s.label}</p>
              <div
                data-num
                className="text-[clamp(4.5rem,10vw,8.5rem)] font-medium leading-none tracking-tight"
                style={{ color: DIM }}
              >
                {s.value}
                {s.suffix}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
