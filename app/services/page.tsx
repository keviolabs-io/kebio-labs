import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceDetail from "@/components/ServiceDetail";
import Process from "@/components/home/Process";
import Faq from "@/components/home/Faq";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Nos services"
        title="Ce que nous"
        titleAccent="créons pour vous"
        intro="Sites web, publicité, SEO, applications et IA — un écosystème complet pour accélérer votre croissance."
      />
      <ServiceDetail />
      <Process />
      <Faq />
    </>
  );
}
