import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import { contact } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label={contact.label}
        title={contact.title}
        titleAccent={contact.titleAccent}
        intro={contact.intro}
      />
      <ContactSection />
    </>
  );
}
