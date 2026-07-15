"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

// La carte titre est la racine des variants : quand elle entre à l'écran
// (elle n'est pas clippée, donc l'observer se déclenche), elle propage
// l'animation aux lignes de titre masquées.
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Ligne de titre révélée par un masque qui monte (même effet que le hero). */
function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className={`block ${className}`}
        variants={{
          hidden: { y: 90 },
          show: { y: 0, transition: { duration: 1, ease: EASE, delay } },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mail = contact.details.find((d) => d.label === "Email")?.value ?? "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Projet — ${name || "Nouveau contact"}`);
    const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n${message}`);
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-2">
        {/* Carte titre */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={cardVariants}
          className="relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 sm:min-h-[560px] sm:p-14"
        >
          {/* Pointillés bien visibles, qui s'estompent vers le bas */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.32) 1.2px, transparent 1.3px)",
              backgroundSize: "20px 20px",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 32%, transparent 78%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 32%, transparent 78%)",
            }}
          />

          <h2 className="relative text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl">
            <MaskLine className="text-foreground">{contact.headingSans}</MaskLine>
            <MaskLine delay={0.12} className="font-serif-italic font-normal text-muted">
              {contact.headingItalic}
            </MaskLine>
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
