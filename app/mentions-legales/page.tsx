import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { mentionsLegales } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Kevio Labs.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return <LegalPage doc={mentionsLegales} />;
}
