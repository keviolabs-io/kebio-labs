import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesDetail from "@/components/services/ServicesDetail";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetail />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
