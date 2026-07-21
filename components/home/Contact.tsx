"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contact } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;
const F = contact.form;

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

const fieldBase =
  "mt-2.5 w-full border-0 border-b border-white/15 bg-transparent pb-3 text-foreground outline-none transition-colors placeholder:text-muted-dark focus:border-white/50";

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label className="text-sm font-medium text-foreground">
      {text}
      {required && <span className="ml-0.5 text-muted">*</span>}
    </label>
  );
}

/** Champ texte / email / tel souligné. */
function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <Label text={label} required={required} />
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={fieldBase}
      />
    </div>
  );
}

/** Menu déroulant souligné (placeholder désactivé + options). */
function Select({
  label,
  placeholder,
  options,
  value,
  onChange,
  required = false,
}: {
  label: string;
  placeholder: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <Label text={label} required={required} />
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldBase} cursor-pointer appearance-none bg-[right_center] bg-no-repeat pr-6 ${
          value ? "text-foreground" : "text-muted-dark"
        }`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%238f8f8f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="" disabled className="bg-[#0b0b0c] text-muted-dark">
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0b0b0c] text-foreground">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          projectType,
          message,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "L'envoi a échoué, réessayez.");
      }
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "L'envoi a échoué, réessayez."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="px-6 py-14 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-2">
        {/* Carte titre */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={cardVariants}
          className="relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 sm:min-h-[560px] sm:p-14 lg:min-h-full"
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
          className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 sm:p-12"
        >
          <h3 className="text-2xl font-medium leading-snug text-foreground sm:text-[28px]">
            {F.title}
          </h3>

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="mt-10 flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <p className="max-w-sm text-lg font-medium text-foreground">
                  {F.success}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                exit={{ opacity: 0 }}
                className="mt-9 space-y-9"
              >
                {/* Section 1 — Informations personnelles */}
                <div className="space-y-6">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-dark">
                    {F.section1}
                  </p>
                  <Field
                    label={F.fields.name.label}
                    placeholder={F.fields.name.placeholder}
                    value={name}
                    onChange={setName}
                    required
                  />
                  <Field
                    label={F.fields.email.label}
                    placeholder={F.fields.email.placeholder}
                    type="email"
                    value={email}
                    onChange={setEmail}
                    required
                  />
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field
                      label={F.fields.phone.label}
                      placeholder={F.fields.phone.placeholder}
                      type="tel"
                      value={phone}
                      onChange={setPhone}
                    />
                    <Field
                      label={F.fields.company.label}
                      placeholder={F.fields.company.placeholder}
                      value={company}
                      onChange={setCompany}
                    />
                  </div>
                </div>

                {/* Section 2 — Votre projet */}
                <div className="space-y-6">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-dark">
                    {F.section2}
                  </p>
                  <Select
                    label={F.fields.projectType.label}
                    placeholder={F.fields.projectType.placeholder}
                    options={F.fields.projectType.options}
                    value={projectType}
                    onChange={setProjectType}
                    required
                  />
                  <div>
                    <Label text={F.fields.message.label} />
                    <textarea
                      rows={4}
                      placeholder={F.fields.message.placeholder}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${fieldBase} resize-none`}
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-400">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {sending ? "Envoi en cours…" : F.submit}
                  {!sending && (
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </button>

                <p className="text-xs leading-relaxed text-muted-dark">
                  {F.rgpd}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
