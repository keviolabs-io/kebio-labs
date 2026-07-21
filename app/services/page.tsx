import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesDetail from "@/components/services/ServicesDetail";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";
import JsonLd from "@/components/JsonLd";
import { servicesSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Création de site internet, applications & IA à Lyon",
  description:
    "Nos services à Lyon : création de sites web et d'applications sur-mesure, automatisation & agents IA, publicité (Google, Meta, TikTok) et SEO. Devis gratuit.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Création de site, applications & IA à Lyon | Kevio Labs",
    description:
      "Sites web, applications, automatisation IA, publicité et SEO sur-mesure à Lyon.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <ServicesHero />
      <ServicesDetail />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
