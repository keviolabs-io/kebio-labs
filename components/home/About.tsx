"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLElement>("[data-word]");

    if (prefersReduced) {
      gsap.set(words, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.4,
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const words = about.paragraph.split(" ");

  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center">
          <SectionLabel icon="✦">{about.label}</SectionLabel>
        </div>

        <div ref={containerRef} className="mx-auto mt-14 max-w-5xl text-center">
          <p className="text-3xl font-medium leading-[1.25] tracking-tight sm:text-5xl sm:leading-[1.2]">
            {words.map((word, i) => (
              <span key={i} data-word className="inline-block">
                {word}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
