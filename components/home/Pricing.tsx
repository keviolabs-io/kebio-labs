"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { pricing, site } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import { staggerContainer, staggerItem } from "@/components/anim/Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center">
          <SectionLabel icon="$">{pricing.label}</SectionLabel>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {pricing.plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={staggerItem}
              className={`flex flex-col rounded-3xl border p-8 transition-colors duration-500 ${
                plan.featured
                  ? "border-border-strong bg-card-hover"
                  : "border-border bg-card hover:bg-card-hover"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-foreground px-3 py-1 text-xs text-background">
                    Populaire
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-medium tracking-tight">{plan.price}</span>
                <span className="mb-1 text-sm text-muted">{plan.period}</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted">
                    <span className="text-muted-dark">→</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={site.cta.href}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-transform duration-300 hover:scale-[0.97] ${
                  plan.featured
                    ? "bg-foreground text-background"
                    : "border border-border-strong"
                }`}
              >
                Choisir {plan.name}
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
