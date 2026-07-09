"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import Reveal, { staggerContainer, staggerItem } from "@/components/anim/Reveal";
import { FaLightbulb, FaBullseye, FaPenNib, FaRocket } from "react-icons/fa";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  discover: FaLightbulb,
  strategy: FaBullseye,
  design: FaPenNib,
  launch: FaRocket,
};

export default function Process() {
  return (
    <section id="process" className="px-6 py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel icon="≈">{process.label}</SectionLabel>

        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            {process.title}
          </h2>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {process.steps.map((step) => {
            const Icon = ICONS[step.icon] ?? FaLightbulb;
            return (
              <motion.article
                key={step.n}
                variants={staggerItem}
                className="group relative flex h-[440px] flex-col overflow-hidden rounded-3xl border border-white/10 px-8 pt-12"
              >
                {/* Haut : numéro + titre + description */}
                <span className="text-sm font-medium text-foreground">{step.n}</span>
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{step.text}</p>

                {/* Bas : dôme + rond blanc avec icône au sommet */}
                <div className="relative mt-auto h-44">
                  {/* Dôme (grand cercle, seul le haut est visible) */}
                  <div
                    className="absolute left-1/2 top-10 aspect-square w-[160%] -translate-x-1/2 rounded-full transition-transform duration-500 group-hover:scale-[1.04]"
                    style={{
                      background: "linear-gradient(180deg, #3a3a3a 0%, #141414 42%)",
                    }}
                  />
                  {/* Liseré clair sur le bord du dôme */}
                  <div
                    className="absolute left-1/2 top-10 aspect-square w-[160%] -translate-x-1/2 rounded-full border border-white/20"
                    style={{
                      maskImage: "linear-gradient(to bottom, black, transparent 28%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black, transparent 28%)",
                    }}
                  />
                  {/* Rond blanc + icône, au sommet du dôme */}
                  <div className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:-translate-y-1">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
