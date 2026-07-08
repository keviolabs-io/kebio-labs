"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import Reveal, { staggerContainer, staggerItem } from "@/components/anim/Reveal";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
      <div className="relative mx-auto max-w-[1400px]">
        <SectionLabel icon="≈">{process.label}</SectionLabel>

        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            {process.title}
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-5 max-w-xl">
          <p className="text-lg leading-relaxed text-muted">{process.subtitle}</p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {process.steps.map((step) => (
            <motion.div
              key={step.n}
              variants={staggerItem}
              className="rounded-3xl border border-border bg-card p-8 transition-colors duration-500 hover:bg-card-hover"
            >
              <span className="font-serif-italic text-5xl text-muted-dark">{step.n}</span>
              <h3 className="mt-6 text-xl font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
