"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import Reveal, { staggerContainer, staggerItem } from "@/components/anim/Reveal";
import { FaLaptopCode, FaRobot, FaBullhorn, FaSearch } from "react-icons/fa";
import type { IconType } from "react-icons";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS: Record<string, IconType> = {
  web: FaLaptopCode,
  automation: FaRobot,
  ads: FaBullhorn,
  seo: FaSearch,
};

type Item = (typeof services.items)[number];

/** Petite puce ✓ pour la liste des prestations. */
function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-black">
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

/** Panneau visuel (icône + grand numéro estompé + dôme). */
function Visual({ item, Icon }: { item: Item; Icon: IconType }) {
  return (
    <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.015] p-10 md:min-h-[400px]">
      {/* Dôme dégradé en haut */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-56"
        style={{
          background:
            "radial-gradient(120% 90% at 50% -20%, rgba(255,255,255,0.14), rgba(255,255,255,0.02) 55%, transparent 72%)",
        }}
      />
      {/* Pointillés estompés */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(120% 80% at 50% 40%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(120% 80% at 50% 40%, black, transparent 75%)",
        }}
      />
      {/* Grand numéro estompé */}
      <span className="pointer-events-none absolute -right-2 -top-10 select-none text-[11rem] font-medium leading-none tracking-tight text-white/[0.05]">
        {item.n.replace("/", "")}
      </span>

      {/* Badge icône */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-black shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      >
        <Icon className="h-8 w-8" />
      </motion.div>

      {/* Tagline */}
      <p className="relative mt-8 font-serif-italic text-2xl leading-snug text-muted md:text-[28px]">
        {item.tagline}
      </p>
    </div>
  );
}

function ServiceBlock({ item, index }: { item: Item; index: number }) {
  const Icon = ICONS[item.icon] ?? FaLaptopCode;
  const reversed = index % 2 === 1;

  return (
    <div
      id={item.icon}
      className="grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-16 md:scroll-mt-32"
    >
      {/* Colonne texte */}
      <div className={reversed ? "md:order-2" : ""}>
        <Reveal>
          <span className="text-sm text-muted">{item.n}</span>
          <h3 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-[40px]">
            {item.title}
          </h3>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            {item.description}
          </p>
        </Reveal>

        {/* Prestations */}
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2"
        >
          {item.features.map((f) => (
            <motion.li
              key={f}
              variants={staggerItem}
              className="flex items-start gap-3 text-sm text-foreground/85"
            >
              <Check />
              <span>{f}</span>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal delay={0.1}>
          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white hover:text-black"
          >
            Parler de ce besoin
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>

      {/* Colonne visuelle */}
      <Reveal delay={0.05} className={reversed ? "md:order-1" : ""}>
        <Visual item={item} Icon={Icon} />
      </Reveal>
    </div>
  );
}

export default function ServicesDetail() {
  return (
    <section id="services" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center">
          <SectionLabel icon="✎" center>
            {services.label}
          </SectionLabel>
        </div>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-32">
          {services.items.map((item, i) => (
            <ServiceBlock key={item.n} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
