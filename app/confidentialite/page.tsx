import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { confidentialite } from "@/lib/legal";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function ConfidentialitePage() {
  return <LegalPage doc={confidentialite} />;
}
