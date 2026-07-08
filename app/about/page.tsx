import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/home/About";
import Process from "@/components/home/Process";

export const metadata: Metadata = { title: "À propos" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Qui sommes-nous"
        title="L'agence qui propulse"
        titleAccent="votre business"
        intro="Design premium, performance publicitaire et intelligence artificielle : un écosystème complet pour une croissance durable."
      />
      <About />
      <Process />
    </>
  );
}
