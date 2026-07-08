"use client";

import Link from "next/link";
import { footer, site } from "@/lib/content";
import Reveal from "@/components/anim/Reveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background px-6 pb-10 pt-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Construisons votre{" "}
            <span className="font-serif-italic text-muted">succès digital.</span>
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

        <div className="mt-24 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <span className="text-2xl font-medium tracking-tight">
              {site.name}
            </span>
            <p className="mt-4 max-w-xs text-sm text-muted">{site.description}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs uppercase tracking-widest text-muted-dark">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 text-xs text-muted-dark sm:flex-row">
          <span>© {new Date().getFullYear()} — {site.name}</span>
          <span>Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}
