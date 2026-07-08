import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader label="Contact" title="Parlons de" titleAccent="votre projet" />
      <ContactSection />
    </>
  );
}
