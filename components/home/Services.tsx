"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import { staggerContainer, staggerItem } from "@/components/anim/Reveal";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel icon="✎">{services.label}</SectionLabel>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 divide-y divide-border rounded-3xl border border-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x"
        >
          {services.items.map((s) => (
            <motion.article
              key={s.n}
              variants={staggerItem}
              className="group relative p-8 transition-colors duration-500 hover:bg-card-hover lg:p-10"
            >
              <div className="mb-16 flex h-28 items-center justify-center">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className="grid h-20 w-20 place-items-center rounded-2xl border border-border bg-gradient-to-br from-white/10 to-transparent text-3xl"
                >
                  {["◈", "❖", "⬡", "◧"][services.items.indexOf(s)]}
                </motion.div>
              </div>
              <span className="text-sm text-muted-dark">{s.n}</span>
              <h3 className="mt-3 text-xl font-medium tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
