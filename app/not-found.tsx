import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "La page que vous cherchez n'existe pas ou a été déplacée. Retrouvez nos services, projets et articles.",
};

// Liens de rebond (maillage interne + le visiteur reste sur le site).
const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Projets", href: "/projets" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
      {/* Motif pointillé estompé */}
      <div
        className="pointer-events-none absolute inset-0 bg-dots opacity-30"
        style={{
          maskImage:
            "radial-gradient(120% 80% at 50% 40%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(120% 80% at 50% 40%, black, transparent 75%)",
        }}
      />
      {/* Lueur douce */}
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.07), transparent)",
        }}
      />

      {/* Grand 404 décoratif */}
      <span
        aria-hidden
        className="relative select-none text-[clamp(5.5rem,24vw,13rem)] font-medium leading-none tracking-tight text-foreground"
      >
        4
        <span className="font-serif-italic font-normal text-muted">0</span>4
      </span>

      <h1 className="relative mt-2 text-3xl font-medium tracking-tight sm:text-5xl">
        Cette page s&apos;est{" "}
        <span className="font-serif-italic font-normal text-muted">envolée</span>
      </h1>

      <p className="relative mt-5 max-w-md leading-relaxed text-muted">
        La page que vous cherchez n&apos;existe pas ou a été déplacée. Pas de
        panique — voici par où continuer.
      </p>

      {/* CTA principal */}
      <Link
        href="/"
        className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-transform duration-300 hover:scale-[0.97]"
      >
        Retour à l&apos;accueil
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>

      {/* Liens de rebond */}
      <div className="relative mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-foreground hover:decoration-white"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
