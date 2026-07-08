"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { footer, site } from "@/lib/content";

const easeOut = [0.22, 1, 0.36, 1] as const;

function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 text-sm text-muted-dark">{children}</p>
  );
}

/** Grand lien du footer (nav / réseaux) — style du thème Agenciy. */
function BigLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex w-fit items-center text-3xl font-medium tracking-tight text-foreground/90 transition-colors duration-300 hover:text-foreground sm:text-4xl"
    >
      <span className="transition-transform duration-500 group-hover:translate-x-2">{label}</span>
    </Link>
  );
}

export default function Footer() {
  const scrollTop = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background px-6 pb-8 pt-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Colonnes */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Emplacement + Contact */}
          <div>
            <ColLabel>{footer.locationLabel}</ColLabel>
            <address className="not-italic leading-relaxed text-foreground/90">
              {footer.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <p className="mb-4 mt-10 text-sm text-muted-dark">{footer.contactLabel}</p>
            <a
              href={`mailto:${footer.email}`}
              className="block text-foreground/90 transition-colors hover:text-foreground"
            >
              {footer.email}
            </a>
            <a
              href={`tel:${footer.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-foreground/90 transition-colors hover:text-foreground"
            >
              {footer.phone}
            </a>
          </div>

          {/* Liens */}
          <div>
            <ColLabel>{footer.linksLabel}</ColLabel>
            <nav className="flex flex-col gap-5">
              {footer.links.map((l) => (
                <BigLink key={l.label} href={l.href} label={l.label} />
              ))}
            </nav>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <ColLabel>{footer.socialsLabel}</ColLabel>
            <nav className="flex flex-col gap-5">
              {footer.socials.map((s) => (
                <BigLink key={s.label} href={s.href} label={s.label} />
              ))}
            </nav>
          </div>
        </div>

        {/* Logo géant en dégradé */}
        <div className="relative mt-24 select-none">
          {/* petit bloc décoratif (comme le thème) */}
          <span className="absolute right-[6%] top-0 h-10 w-10 rounded-md bg-white/15 sm:h-14 sm:w-14" />
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: easeOut }}
            className="block bg-gradient-to-b from-white/55 via-white/20 to-transparent bg-clip-text text-center font-serif-italic leading-[0.8] tracking-tight text-transparent"
            style={{ fontSize: "clamp(6rem, 27vw, 26rem)" }}
          >
            {site.name.toLowerCase()}
          </motion.span>
        </div>

        {/* Barre du bas */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. {footer.copyright}
          </span>
          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            {footer.backToTop}
            <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
