import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutGrowth from "@/components/about/AboutGrowth";
import AboutExpertise from "@/components/about/AboutExpertise";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = { title: "À propos" };

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutGrowth />
      <AboutExpertise />
      <Faq />
      <Contact />
    </>
  );
}
