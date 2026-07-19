import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { cgv } from "@/lib/legal";

export const metadata: Metadata = { title: "Conditions Générales de Vente" };

export default function CgvPage() {
  return <LegalPage doc={cgv} />;
}
