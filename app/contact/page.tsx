import type { Metadata } from "next";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="pt-20 md:pt-24">
      <Contact />
    </div>
  );
}
