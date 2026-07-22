import Link from "next/link";
import { services } from "@/lib/content";

// Quels services mettre en avant sur chaque fiche projet (maillage interne).
const MAP: Record<string, string[]> = {
  "a-la-lyonnaise": ["web", "seo"],
  offgrid: ["automation"],
  "arctic-flow": ["web"],
};

/** Bloc « Services associés » — relie la fiche projet aux services concernés. */
export default function ProjectServices({ slug }: { slug: string }) {
  const icons = MAP[slug];
  if (!icons?.length) return null;
  const items = services.items.filter((s) => icons.includes(s.icon));
  if (!items.length) return null;

  return (
    <section className="px-6 pb-4">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-dark">
          Services associés
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {items.map((s) => (
            <Link
              key={s.icon}
              href={`/services#${s.icon}`}
              className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm text-foreground/90 transition-colors hover:bg-white hover:text-black"
            >
              {s.title}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
