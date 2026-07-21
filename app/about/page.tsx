import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutGrowth from "@/components/about/AboutGrowth";
import AboutExpertise from "@/components/about/AboutExpertise";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";
import JsonLd from "@/components/JsonLd";
import { aboutSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "À propos — Agence digitale à Lyon",
  description:
    "Kevio Labs, agence digitale à Lyon : une équipe qui allie design, code et stratégie pour créer des sites, applications et solutions IA sur-mesure qui performent.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "À propos — Agence digitale à Lyon | Kevio Labs",
    description:
      "Design, code et IA : notre approche sur-mesure pour votre croissance.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <AboutHero />
      <AboutIntro />
      <AboutGrowth />
      <AboutExpertise />
      <Faq />
      <Contact />
    </>
  );
}
