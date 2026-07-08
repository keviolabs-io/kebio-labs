"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import { staggerContainer, staggerItem } from "@/components/anim/Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center">
          <SectionLabel icon="❝">{testimonials.label}</SectionLabel>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {testimonials.items.map((t, i) => (
            <motion.figure
              key={i}
              variants={staggerItem}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-colors duration-500 hover:bg-card-hover"
            >
              <blockquote className="text-lg leading-relaxed">
                <span className="font-serif-italic text-2xl text-muted-dark">“</span>
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-6">
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-muted">{t.company}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
