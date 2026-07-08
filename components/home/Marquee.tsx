"use client";

import { hero } from "@/lib/content";

/** Bandeau défilant infini (villes). CSS pur → fluide sur Chrome + Safari. */
export default function Marquee() {
  const items = [...hero.marquee, ...hero.marquee];
  return (
    <section className="marquee-paused overflow-hidden border-y border-border py-8">
      <div
        className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap px-8"
        style={{ ["--marquee-duration" as string]: "28s" }}
      >
        {items.map((city, i) => (
          <span
            key={i}
            className={`text-4xl tracking-tight text-muted-dark sm:text-6xl ${
              i % 3 === 2 ? "font-serif-italic" : "font-medium"
            }`}
          >
            {city}
          </span>
        ))}
      </div>
    </section>
  );
}
