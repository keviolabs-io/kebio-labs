import type { Metadata } from "next";
import ProjectsHero from "@/components/project/ProjectsHero";
import Marquee from "@/components/home/Marquee";
import Projects from "@/components/home/Projects";

export const metadata: Metadata = { title: "Projets" };

export default function ProjetsPage() {
  return (
    <>
      <ProjectsHero />
      <Marquee />
      <Projects />
    </>
  );
}
