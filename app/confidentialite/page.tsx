import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { confidentialite } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données (RGPD) de Kevio Labs.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return <LegalPage doc={confidentialite} />;
}
