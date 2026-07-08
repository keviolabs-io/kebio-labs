import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/home/Projects";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = { title: "Réalisations" };

export default function ProjetsPage() {
  return (
    <>
      <PageHeader
        label="Nos réalisations"
        title="Nos derniers"
        titleAccent="projets"
        intro="Une sélection de projets récents — sites web, automatisation IA et prospection."
      />
      <Projects />
      <ProjectGrid />
    </>
  );
}
