import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/home/Projects";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = { title: "Projets" };

export default function ProjetsPage() {
  return (
    <>
      <PageHeader
        label="Projets"
        title="Nos"
        titleAccent="réalisations"
        intro="Une sélection de projets récents — marques, interfaces et produits numériques."
      />
      <Projects />
      <ProjectGrid />
    </>
  );
}
