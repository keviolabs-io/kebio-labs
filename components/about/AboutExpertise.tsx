"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutPage } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/anim/Reveal";
import { FaLaptopCode, FaBullhorn, FaRobot, FaSearch } from "react-icons/fa";
import type { IconType } from "react-icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DIM = "#666666";
const BRIGHT = "#ededed";

const ICONS: Record<string, IconType> = {
  web: FaLaptopCode,
  ads: FaBullhorn,
  automation: FaRobot,
  seo: FaSearch,
};

const { expertise } = aboutPage;

export default function AboutExpertise() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Révélation gris → blanc du titre, lettre par lettre au scroll
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const letters = el.querySelectorAll<HTMLElement>("[data-l]");
    if (prefersReduced) {
      gsap.set(letters, { color: BRIGHT });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        letters,
        { color: DIM },
        {
          color: BRIGHT,
          ease: "none",
          stagger: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "center 55%",
            scrub: true,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  // Chaque mot est insécable (pas de coupure au milieu d'un mot sur mobile),
  // mais les mots peuvent passer à la ligne entre eux.
  const letters = (text: string) =>
    text.split(" ").map((word, wi) => (
      <Fragment key={wi}>
        <span className="inline-block whitespace-nowrap">
          {word.split("").map((ch, ci) => (
            <span
              key={ci}
              data-l
              className="inline-block"
              style={{ color: DIM }}
            >
              {ch}
            </span>
          ))}
        </span>
        {wi < text.split(" ").length - 1 ? " " : ""}
      </Fragment>
    ));

  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel icon="✦">{expertise.label}</SectionLabel>

        {/* En-tête : titre (gauche) + intro (droite) */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-start md:gap-16">
          <h2
            ref={headingRef}
            className="text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-[68px]"
          >
            <span className="font-serif-italic font-normal">
              {letters(expertise.headingItalic)}
            </span>
            <br />
            {letters(expertise.headingSans)}
          </h2>

          <Reveal delay={0.1} as="p">
            <span className="block max-w-md leading-relaxed text-muted md:mt-4 md:justify-self-end">
              {expertise.intro}
            </span>
          </Reveal>
        </div>

        {/* Cartes */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? FaLaptopCode;
            return (
              <Reveal key={item.n} delay={Math.min(i * 0.1, 0.3)}>
                <Link
                  href={`/services#${item.icon}`}
                  className="group block h-full"
                  aria-label={`${item.title} — voir le service`}
                >
                <article className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.015] p-8 transition-colors duration-300 group-hover:border-white/25">
                  {/* Dôme dégradé + badge icône */}
                  <div className="relative mb-10 h-40">
                    <div
                      className="absolute inset-x-0 top-0 h-40 rounded-b-[100%]"
                      style={{
                        background:
                          "radial-gradient(120% 90% at 50% -10%, rgba(255,255,255,0.16), rgba(255,255,255,0.02) 55%, transparent 72%)",
                      }}
                    />
                    <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-muted">{item.n}</p>
                    <span className="shrink-0 rounded-full bg-white/[0.06] px-3.5 py-1.5 text-xs text-muted">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-medium tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/80">{item.role}</p>
                  <p className="mt-5 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
