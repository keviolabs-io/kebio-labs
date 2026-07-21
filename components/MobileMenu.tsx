"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, type Variants } from "framer-motion";
import { nav, hero, site } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;
const PANEL_EASE = [0.76, 0, 0.24, 1] as const;
const PANELS = 5;

// Les liens du menu = onglets de nav (Contact devient le CTA en bas).
const links = nav.filter((n) => n.href !== "/contact");

// Halos lumineux en fond (dégradés radiaux, sans filtre de flou = fluide).
const HALOS = [
  { top: "8%", left: "-15%", size: "70vw", o: 0.08 },
  { top: "52%", left: "50%", size: "80vw", o: 0.06 },
];

const content: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.38, staggerChildren: 0.075 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const lineUp: Variants = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.7, ease: EASE } },
  exit: { y: "115%", transition: { duration: 0.3, ease: EASE } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();

  // Verrouille le scroll + fermeture au clavier (Échap).
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const mid = (PANELS - 1) / 2;

  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-40 overflow-hidden md:hidden">
      {/* ---------- Panneaux noirs qui tombent (rideau) ---------- */}
      {Array.from({ length: PANELS }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-full bg-[#050505]"
          style={{
            left: `${(i * 100) / PANELS}%`,
            width: `${100 / PANELS + 0.3}%`,
            willChange: "transform",
          }}
          initial={{ y: "-101%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-101%" }}
          transition={{
            duration: 0.55,
            ease: PANEL_EASE,
            delay: Math.abs(i - mid) * 0.06,
          }}
        >
          {/* Liséré blanc lumineux en bas du panneau (signature intro) */}
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/70"
            style={{ boxShadow: "0 0 16px 1px rgba(255,255,255,0.5)" }}
          />
        </motion.div>
      ))}

      {/* ---------- Halos lumineux en fond (statiques, sans filtre) ---------- */}
      {HALOS.map((h, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            top: h.top,
            left: h.left,
            width: h.size,
            height: h.size,
            background: `radial-gradient(closest-side, rgba(255,255,255,${h.o}), transparent 70%)`,
          }}
        />
      ))}

      {/* ---------- Contenu ---------- */}
      <motion.div
        variants={content}
        initial="hidden"
        animate="show"
        exit="exit"
        className="relative z-10 flex h-full flex-col px-7 pb-10 pt-32"
      >
        {/* Liens — épuré, sans lignes ni fioritures */}
        <nav className="flex flex-1 flex-col justify-center">
          <ul className="flex flex-col gap-3">
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="overflow-hidden">
                  <motion.div variants={lineUp}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block py-1 text-[2.9rem] font-medium leading-[1.12] tracking-tight transition-colors duration-300 ${
                        active ? "text-white" : "text-white/45"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bas : CTA + réseaux */}
        <div className="mt-8">
          <motion.div variants={fadeUp}>
            <Link
              href={site.cta.href}
              onClick={onClose}
              className="group flex items-center justify-between rounded-full bg-white px-6 py-4 text-base font-medium text-black"
            >
              Écrivez-nous
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-5 flex items-center gap-6">
            {hero.socials.map((s) => (
              <li key={s.key}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
