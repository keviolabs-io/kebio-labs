"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";

function Row({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-medium text-foreground sm:text-xl">{q}</span>
        <span
          className="relative flex h-6 w-6 shrink-0 items-center justify-center"
          aria-hidden
        >
          <span className="absolute h-[1.5px] w-4 rounded-full bg-foreground" />
          <motion.span
            className="absolute h-4 w-[1.5px] rounded-full bg-foreground"
            animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 pr-10 leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-center">
          <SectionLabel icon="?" center>
            {faq.label}
          </SectionLabel>
        </div>

        <h2 className="mt-8 text-center text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
          <span className="font-serif-italic font-normal text-foreground">
            {faq.titleItalic}
          </span>{" "}
          <span className="text-foreground">{faq.titleSans}</span>
        </h2>

        <div className="mt-16">
          {faq.items.map((item, i) => (
            <Row
              key={i}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
