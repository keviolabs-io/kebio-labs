import type { Metadata } from "next";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Contact — Devis gratuit agence web à Lyon",
  description:
    "Un projet de site, d'application ou d'agent IA ? Contactez Kevio Labs, agence web à Lyon. Devis gratuit et réponse sous 24h.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Devis gratuit agence web à Lyon | Kevio Labs",
    description: "Parlons de votre projet — réponse sous 24h.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20 md:pt-24">
      <h1 className="sr-only">
        Contactez Kevio Labs, agence web à Lyon — devis gratuit
      </h1>
      <Contact />
    </div>
  );
}
