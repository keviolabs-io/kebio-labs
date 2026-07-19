import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { mentionsLegales } from "@/lib/legal";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
  return <LegalPage doc={mentionsLegales} />;
}
