"use client";

import { useState } from "react";
import { contact, site } from "@/lib/content";
import Reveal from "@/components/anim/Reveal";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Ouvre le client mail de l'utilisateur avec le message pré-rempli.
  // (Pas de backend : à brancher plus tard sur un service comme Formspree/Resend.)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nouveau projet — ${form.name}`);
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-2xl border border-border bg-card px-5 py-4 text-foreground placeholder:text-muted-dark outline-none transition-colors focus:border-border-strong";

  return (
    <section className="px-6 pb-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_1.2fr]">
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className={field}
              type="text"
              placeholder="Ton nom"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={field}
              type="email"
              placeholder="Ton email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              className={`${field} min-h-40 resize-none`}
              placeholder="Parle-nous de ton projet…"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-transform duration-300 hover:scale-[0.97]"
            >
              Envoyer le message
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
