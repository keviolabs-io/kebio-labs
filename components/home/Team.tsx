"use client";

import { motion } from "framer-motion";
import { team } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import Media from "@/components/Media";
import { staggerContainer, staggerItem } from "@/components/anim/Reveal";

export default function Team() {
  return (
    <section id="team" className="px-6 py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center">
          <SectionLabel icon="◎">{team.label}</SectionLabel>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.members.map((m) => (
            <motion.article key={m.name} variants={staggerItem} className="group">
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <Media
                  src={m.image}
                  alt={m.name}
                  className="aspect-[4/5] w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">{m.name}</h3>
                    <p className="text-sm text-white/60">{m.role}</p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-transform duration-500 group-hover:rotate-45">
                    ↗
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
