"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mail = contact.details.find((d) => d.label === "Email")?.value ?? "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Projet — ${name || "Nouveau contact"}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\n${message}`
    );
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
  }

  const inputBase =
    "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-foreground placeholder:text-muted-dark outline-none transition-colors focus:border-white/30";

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />

      <div className="relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2 lg:items-center">
        {/* Colonne gauche : titre + coordonnées */}
        <div>
          <SectionLabel icon="✦">{contact.label}</SectionLabel>

          <h2 className="mt-8 text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-foreground">{contact.title}</span>{" "}
            <span className="font-serif-italic font-normal text-foreground">
              {contact.titleAccent}
            </span>
          </h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            {contact.intro}
          </p>

          <div className="mt-12 space-y-6">
            {contact.details.map((d) => (
              <div key={d.label}>
                <p className="text-sm text-muted-dark">{d.label}</p>
                {d.href ? (
                  <a
                    href={d.href}
                    className="text-lg text-foreground transition-colors hover:text-muted"
                  >
                    {d.value}
                  </a>
                ) : (
                  <p className="text-lg text-foreground">{d.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite : formulaire */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm sm:p-10"
        >
          <div className="space-y-5">
            <input
              type="text"
              required
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputBase}
            />
            <input
              type="email"
              required
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputBase}
            />
            <textarea
              required
              rows={5}
              placeholder="Parlez-nous de votre projet"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputBase} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-white py-4 font-medium text-black transition-opacity hover:opacity-90"
          >
            Envoyer le message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
