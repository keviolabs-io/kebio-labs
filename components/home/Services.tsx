import Link from "next/link";
import { services } from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";
import ServicesFlip from "@/components/home/ServicesFlip";

export default function Services() {
  return (
    <section id="services" className="px-6 py-14 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel icon="✎">{services.label}</SectionLabel>

        {/* Cartes services : bascule 3D + halos lumineux (mobile empilé,
            desktop en ligne — toutes basculent en même temps). */}
        <ServicesFlip />

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white hover:text-black"
          >
            Voir tous nos services
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
