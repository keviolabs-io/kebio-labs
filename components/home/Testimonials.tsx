"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";

/** Avatar rond avec les initiales (dégradé) — pas d'asset requis. */
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white/25 to-white/5 text-sm font-medium text-foreground ring-1 ring-white/15">
      {initials}
    </div>
  );
}

function Card({
  quote,
  name,
  company,
  offset,
}: {
  quote: string;
  name: string;
  company: string;
  offset: number;
}) {
  return (
    <div
      className="w-[340px] shrink-0 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:w-[400px]"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <p className="text-[1.05rem] leading-relaxed text-foreground/85">
        «&nbsp;{quote}&nbsp;»
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Avatar name={name} />
        <div>
          <p className="font-medium text-foreground">{name}</p>
          <p className="text-sm text-muted">{company}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [paused, setPaused] = useState(false);

  // On double la liste pour une boucle continue sans couture.
  const loop = [...testimonials.items, ...testimonials.items];
  // Décalages verticaux alternés (effet « staggered » du thème).
  const offsets = [0, 44, 18, 56, 8, 40];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden py-28"
    >
      {/* Fond pointillé en spirale */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />

      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="flex justify-center">
          <SectionLabel icon="❝" center>
            {testimonials.label}
          </SectionLabel>
        </div>

        <h2 className="mx-auto mt-8 max-w-3xl text-center text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
          <span className="font-serif-italic font-normal text-foreground">
            {testimonials.titleItalic}
          </span>{" "}
          <span className="text-foreground">{testimonials.titleSans}</span>
        </h2>
      </div>

      {/* Marquee horizontal auto-défilant, pause au survol */}
      <div
        className="relative mt-20 flex overflow-hidden pb-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* dégradés de fondu sur les bords */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-40" />

        <motion.div
          className="flex gap-6 px-6"
          animate={inView && !paused ? { x: ["0%", "-50%"] } : undefined}
          transition={{
            duration: 42,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loop.map((t, i) => (
            <Card
              key={i}
              quote={t.quote}
              name={t.name}
              company={t.company}
              offset={offsets[i % testimonials.items.length]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
