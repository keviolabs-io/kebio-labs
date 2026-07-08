"use client";

import { motion } from "framer-motion";
import { awards } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Awards() {
  return (
    <section id="awards" className="px-6 py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center">
          <SectionLabel icon="✧">{awards.label}</SectionLabel>
        </div>

        <div className="mt-16 border-t border-border">
          {awards.items.map((a, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: easeOut, delay: i * 0.06 }}
              className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-border py-8 transition-colors hover:bg-card-hover sm:grid-cols-3"
            >
              <span className="text-sm text-muted transition-colors group-hover:text-foreground">
                {a.org}
              </span>
              <span className="col-start-1 row-start-2 text-lg font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:col-start-2 sm:row-start-1 sm:text-center sm:text-2xl">
                {a.title}
              </span>
              <span className="col-start-2 row-start-1 text-right text-sm text-muted sm:row-start-1">
                {a.project}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
