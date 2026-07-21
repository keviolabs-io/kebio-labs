import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { cgv } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente (CGV) de Kevio Labs.",
  alternates: { canonical: "/cgv" },
  robots: { index: false, follow: true },
};

export default function CgvPage() {
  return <LegalPage doc={cgv} />;
}
