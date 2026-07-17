"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faq } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/anim/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DIM = "#808080";
const BRIGHT = "#ededed";
const EASE = [0.22, 1, 0.36, 1] as const;

function Row({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-medium text-[#ededed] sm:text-xl">{q}</span>
        {/* Bouton rond +/− */}
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1b1b1b]">
          <span className="absolute h-[1.5px] w-3.5 rounded-full bg-[#ededed]" />
          <motion.span
            className="absolute h-3.5 w-[1.5px] rounded-full bg-[#ededed]"
            animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 pr-16 leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Révélation gris → blanc du titre, au scroll (comme le thème).
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
          scrollTrigger: { trigger: el, start: "top 85%", end: "center 55%", scrub: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  const heading = "FAQ";

  return (
    <section id="faq" className="relative overflow-hidden px-6 py-14 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <div className="flex justify-center">
          <SectionLabel icon="?" center>
            {faq.label}
          </SectionLabel>
        </div>

        <Reveal delay={0.05}>
          <h2
            ref={headingRef}
            className="mt-8 text-center text-6xl font-medium tracking-tight sm:text-[64px]"
          >
            {heading.split("").map((ch, i) => (
              <Fragment key={i}>
                <span data-l className="inline-block" style={{ color: DIM }}>
                  {ch}
                </span>
              </Fragment>
            ))}
          </h2>
        </Reveal>

        <div className="mt-16">
          {faq.items.map((item, i) => (
            <Reveal key={i} delay={Math.min(i * 0.06, 0.4)}>
              <Row
                q={item.q}
                a={item.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
