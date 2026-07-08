"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contact, site } from "@/lib/content";
import Reveal from "@/components/anim/Reveal";

const empty = {
  name: "",
  email: "",
  phone: "",
  company: "",
  type: contact.projectTypes[0],
  budget: contact.budgets[0],
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof empty) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pas de backend : ouvre le client mail pré-rempli + affiche la confirmation.
    // À brancher plus tard sur Formspree / Resend pour recevoir en base.
    const subject = encodeURIComponent(`Nouveau projet — ${form.name} (${form.type})`);
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\nTéléphone : ${form.phone}\nEntreprise : ${form.company}\nType de projet : ${form.type}\nBudget : ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-2xl border border-border bg-card px-5 py-4 text-foreground placeholder:text-muted-dark outline-none transition-colors focus:border-border-strong";

  return (
    <section id="formulaire" className="px-6 pb-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_1.3fr]">
        {/* Coordonnées */}
        <div>
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-muted">{contact.intro}</p>
          </Reveal>
          <div className="mt-12 space-y-8">
            {contact.details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.08}>
                <div className="border-t border-border pt-5">
                  <p className="text-xs uppercase tracking-widest text-muted-dark">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="mt-2 block text-xl transition-colors hover:text-muted">
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-xl">{d.value}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <Reveal delay={0.15}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-border bg-card p-12 text-center"
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-border-strong text-2xl">
                  ✓
                </div>
                <p className="text-xl font-medium">{contact.success}</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={field} type="text" placeholder="Prénom & Nom" required value={form.name} onChange={set("name")} />
                  <input className={field} type="email" placeholder="Email" required value={form.email} onChange={set("email")} />
                  <input className={field} type="tel" placeholder="Téléphone" value={form.phone} onChange={set("phone")} />
                  <input className={field} type="text" placeholder="Entreprise" value={form.company} onChange={set("company")} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <select className={field} value={form.type} onChange={set("type")}>
                    {contact.projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-card">
                        {t}
                      </option>
                    ))}
                  </select>
                  <select className={field} value={form.budget} onChange={set("budget")}>
                    {contact.budgets.map((b) => (
                      <option key={b} value={b} className="bg-card">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  className={`${field} min-h-40 resize-none`}
                  placeholder="Parlez-nous de votre projet…"
                  required
                  value={form.message}
                  onChange={set("message")}
                />

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-transform duration-300 hover:scale-[0.97]"
                >
                  Envoyer ma demande
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
