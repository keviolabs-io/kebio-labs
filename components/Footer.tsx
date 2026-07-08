"use client";

import Link from "next/link";
import { footer, nav, site } from "@/lib/content";
import Reveal from "@/components/anim/Reveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background px-6 pb-10 pt-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Construisons quelque chose{" "}
            <span className="font-serif-italic text-muted">de grand</span>{" "}
            ensemble.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Link
            href={site.cta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-transform duration-300 hover:scale-[0.97]"
          >
            {site.cta.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>

        <div className="mt-24 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-2xl font-medium">
              <span className="font-serif-italic">{site.name.toLowerCase()}</span>
              <sup className="text-[0.6rem] text-muted">®</sup>
            </span>
            <p className="mt-4 max-w-xs text-sm text-muted">{site.description}</p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-muted-dark">Navigation</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-muted-dark">Réseaux</p>
            <ul className="space-y-2">
              {footer.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-muted-dark">Contact</p>
            <a href={`mailto:${site.email}`} className="text-sm text-muted transition-colors hover:text-foreground">
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 text-xs text-muted-dark sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</span>
          <span>Conçu avec soin.</span>
        </div>
      </div>
    </footer>
  );
}
