import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/home/About";

export const metadata: Metadata = { title: "À propos" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="À propos"
        title="Un studio"
        titleAccent="mû par le sens"
        intro="Nous sommes une équipe de créatifs et de développeurs qui aime les projets ambitieux et le travail bien fait."
      />
      <About />
    </>
  );
}
