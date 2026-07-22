"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutPage } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/anim/Reveal";
import {
  FaLayerGroup,
  FaRobot,
  FaBullhorn,
  FaChartBar,
} from "react-icons/fa";
import type { IconType } from "react-icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DIM = "#7a7a7a";
const BRIGHT = "#ededed";
const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS: Record<string, IconType> = {
  web: FaLayerGroup,
  automation: FaRobot,
  ads: FaBullhorn,
  seo: FaChartBar,
};

const { growth } = aboutPage;

type Item = (typeof growth.items)[number];

/** Une ligne de l'accordéon. */
function Row({
  item,
  open,
  onToggle,
}: {
  item: Item;
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = ICONS[item.icon] ?? FaLayerGroup;
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 px-6 py-8 text-left md:px-12 md:py-10"
      >
        <div className="flex-1">
          <Icon className="h-7 w-7 text-muted" />
          <p className="mt-10 text-sm text-muted md:mt-14">{item.n}</p>
          <h3 className="mt-2 text-2xl font-medium tracking-tight text-foreground md:text-[28px]">
            {item.title}
          </h3>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="overflow-hidden"
              >
                <p className="mt-5 max-w-2xl leading-relaxed text-muted">
                  {item.text}
                </p>
                <span className="mt-6 inline-block rounded-full bg-white/[0.06] px-5 py-2.5 text-sm text-foreground">
                  {item.price}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bouton chevron circulaire */}
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            open ? "bg-white text-black" : "bg-[#1b1b1b] text-foreground"
          }`}
        >
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        </span>
      </button>
    </div>
  );
}

export default function AboutGrowth() {
  const [openIndex, setOpenIndex] = useState<number>(0);
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
            start: "top 88%",
            end: "center 50%",
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
      <div className="mx-auto max-w-[1200px]">
        <div className="flex justify-center">
          <SectionLabel icon="✎" center>
            {growth.label}
          </SectionLabel>
        </div>

        <h2
          ref={headingRef}
          className="mt-8 text-center text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-[68px]"
        >
          <span className="font-serif-italic font-normal">
            {letters(growth.headingItalic)}
          </span>{" "}
          {letters(growth.headingSans)}
        </h2>

        {/* Accordéon */}
        <Reveal delay={0.05}>
          <div className="mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.015]">
            {growth.items.map((item, i) => (
              <Row
                key={item.n}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href={growth.ctaHref}
            className="rounded-full bg-white px-8 py-4 font-medium text-black transition-opacity hover:opacity-90"
          >
            {growth.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
