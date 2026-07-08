import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Nos services"
        title="Ce que nous"
        titleAccent="savons faire"
        intro="De la marque au produit fini : une équipe, un fil conducteur, des résultats mesurables."
      />
      <Services />
      <Process />
      <Pricing />
      <Testimonials />
    </>
  );
}
