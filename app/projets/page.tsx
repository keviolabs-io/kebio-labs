import type { Metadata } from "next";
import ProjectsHero from "@/components/project/ProjectsHero";
import Marquee from "@/components/home/Marquee";
import Projects from "@/components/home/Projects";
import JsonLd from "@/components/JsonLd";
import { projectsSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Projets & réalisations — Agence web à Lyon",
  description:
    "Découvrez les réalisations de Kevio Labs : sites web, applications sur-mesure et agents IA développés pour nos clients à Lyon et au-delà.",
  alternates: { canonical: "/projets" },
  openGraph: {
    title: "Projets & réalisations — Agence web à Lyon | Kevio Labs",
    description:
      "Nos réalisations : sites, applications et IA sur-mesure.",
    url: "/projets",
  },
};

export default function ProjetsPage() {
  return (
    <>
      <JsonLd data={projectsSchema} />
      <ProjectsHero />
      <Marquee />
      <Projects />
    </>
  );
}
