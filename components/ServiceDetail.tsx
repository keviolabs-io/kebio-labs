"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import Reveal, { staggerContainer, staggerItem } from "@/components/anim/Reveal";

type Service = (typeof services.items)[number];

function ServiceBlock({ service }: { service: Service }) {
  return (
    <section
      id={service.slug}
      className="scroll-mt-28 border-t border-border px-6 py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Colonne gauche : intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-border bg-gradient-to-br from-white/10 to-transparent text-2xl">
                {service.icon}
              </span>
              <span className="text-sm text-muted-dark">{service.n}</span>
            </div>
            <Reveal className="mt-6">
              <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">{service.title}</h2>
            </Reveal>
            <Reveal delay={0.05} className="mt-5">
              <p className="max-w-md leading-relaxed text-muted">{service.short}</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-border bg-white/[0.02] px-4 py-2 text-sm text-muted"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Colonne droite : détail */}
          <div>
            <Reveal>
              <h3 className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                {service.headline}
              </h3>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted">{service.text}</p>
            </Reveal>

            {/* Offres */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {service.offers.map((offer) => (
                <motion.div
                  key={offer.n}
                  variants={staggerItem}
                  className="rounded-3xl border border-border bg-card p-6 transition-colors duration-500 hover:bg-card-hover"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-dark">{offer.n}</span>
                    {offer.badge && (
                      <span className="rounded-full bg-foreground px-3 py-1 text-xs text-background">
                        {offer.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="mt-4 text-lg font-medium">{offer.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{offer.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Inclus (optionnel) */}
            {service.included.length > 0 && (
              <Reveal className="mt-8 rounded-3xl border border-border bg-card p-8">
                <p className="text-xs uppercase tracking-widest text-muted-dark">
                  Inclus dans chaque projet
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted">
                      <span className="text-muted-dark">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {/* CTA */}
            <Reveal className="mt-8">
              <p className="font-serif-italic text-xl text-muted sm:text-2xl">{service.cta}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetail() {
  return (
    <div>
      {services.items.map((s) => (
        <ServiceBlock key={s.slug} service={s} />
      ))}
    </div>
  );
}
