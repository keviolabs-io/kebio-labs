"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, site } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Hide nav on scroll down, reveal on scroll up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 200);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1 text-2xl font-medium tracking-tight">
          <span className="font-serif-italic">{site.name.toLowerCase()}</span>
          <sup className="text-[0.6rem] text-muted">®</sup>
        </Link>

        {/* Center pill — desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-border bg-white/[0.02] px-2 py-2 backdrop-blur-md">
            {nav.slice(0, 4).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-sm text-muted transition-colors duration-300 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA — desktop */}
        <Link
          href={site.cta.href}
          className="group hidden items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:scale-[0.97] md:inline-flex"
        >
          {site.cta.label}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>

        {/* Burger — mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border md:hidden"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`h-px w-5 bg-foreground transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-foreground transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-6 overflow-hidden rounded-3xl border border-border bg-card md:hidden"
          >
            <ul className="flex flex-col p-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-lg text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
