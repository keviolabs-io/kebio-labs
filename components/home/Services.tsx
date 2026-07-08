"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import Reveal, { staggerContainer, staggerItem } from "@/components/anim/Reveal";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel icon="✎">{services.label}</SectionLabel>

        <Reveal delay={0.1} className="mt-8">
          <h2 className="max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">
            Ce que nous <span className="font-serif-italic text-muted">créons pour vous.</span>
          </h2>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.items.map((s) => (
            <motion.div key={s.slug} variants={staggerItem}>
              <Link
                href={`/services#${s.slug}`}
                className="group relative flex h-full flex-col rounded-3xl border border-border p-8 transition-colors duration-500 hover:bg-card-hover"
              >
                <div className="mb-10 flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: easeOut }}
                    className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-gradient-to-br from-white/10 to-transparent text-2xl"
                  >
                    {s.icon}
                  </motion.div>
                  <span className="text-sm text-muted-dark">{s.n}</span>
                </div>
                <h3 className="text-xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-foreground">
                  En savoir plus
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
