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
      </div>
    </section>
  );
}
