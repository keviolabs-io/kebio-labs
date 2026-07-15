"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contact } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DIM = "#808080";
const BRIGHT = "#ededed";
const EASE = [0.22, 1, 0.36, 1] as const;

/** Champ souligné (label + input transparent à bordure basse). */
function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  textarea = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const base =
    "mt-3 w-full border-0 border-b border-white/15 bg-transparent pb-3 text-foreground outline-none transition-colors placeholder:text-muted-dark focus:border-white/50";
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      {textarea ? (
        <textarea
          required
          rows={3}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          required
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mail =
    contact.details.find((d) => d.label === "Email")?.value ?? "";

  // Révélation gris → blanc de la ligne serif italic, au scroll.
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    if (prefersReduced) {
      gsap.set(words, { color: BRIGHT });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { color: DIM },
        {
          color: BRIGHT,
          ease: "none",
          stagger: 1,
          scrollTrigger: { trigger: el, start: "top 85%", end: "center 55%", scrub: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Projet — ${name || "Nouveau contact"}`);
    const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n${message}`);
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
  }

  const italicWords = contact.headingItalic.split(" ");

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-2">
        {/* Carte titre */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 sm:min-h-[560px] sm:p-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-90 [mask-image:linear-gradient(to_bottom,black_0%,black_28%,transparent_72%)]" />
          <h2
            ref={headingRef}
            className="relative text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl"
          >
            <span className="text-foreground">{contact.headingSans}</span>
            <br />
            <span className="font-serif-italic font-normal">
              {italicWords.map((w, i) => (
                <Fragment key={i}>
                  <span data-word className="inline-block" style={{ color: DIM }}>
                    {w}
                  </span>
                  {i < italicWords.length - 1 ? " " : ""}
                </Fragment>
              ))}
            </span>
          </h2>
        </motion.div>

        {/* Carte formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
          className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 sm:p-14"
        >
          <h3 className="text-2xl font-medium leading-snug text-muted sm:text-[32px]">
            {contact.formHeading}
          </h3>
          <form onSubmit={handleSubmit} className="mt-10 space-y-8">
            <Field
              label={contact.fields.name.label}
              placeholder={contact.fields.name.placeholder}
              value={name}
              onChange={setName}
            />
            <Field
              label={contact.fields.email.label}
              placeholder={contact.fields.email.placeholder}
              type="email"
              value={email}
              onChange={setEmail}
            />
            <Field
              label={contact.fields.message.label}
              placeholder={contact.fields.message.placeholder}
              value={message}
              onChange={setMessage}
              textarea
            />
            <button
              type="submit"
              className="w-full rounded-full bg-white py-4 font-medium text-black transition-opacity hover:opacity-90"
            >
              {contact.submit}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
