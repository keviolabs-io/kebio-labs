"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";

const easeOut = [0.22, 1, 0.36, 1] as const;

/** En-tête commun aux pages internes : label + gros titre (sans + serif italique) + intro. */
export default function PageHeader({
  label,
  title,
  titleAccent,
  intro,
}: {
  label: string;
  title: string;
  titleAccent?: string;
  intro?: string;
}) {
  return (
    <header className="px-6 pb-16 pt-40">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel icon="✦">{label}</SectionLabel>
        <h1 className="mt-8 max-w-5xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block overflow-hidden pb-[0.1em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: easeOut, delay: 0.1 }}
            >
              {title}
            </motion.span>
          </span>
          {titleAccent && (
            <span className="block overflow-hidden pb-[0.1em]">
              <motion.span
                className="block font-serif-italic text-muted"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0.25 }}
              >
                {titleAccent}
              </motion.span>
            </span>
          )}
        </h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.4 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </header>
  );
}
