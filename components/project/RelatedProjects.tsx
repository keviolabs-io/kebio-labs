import Link from "next/link";
import { projects } from "@/lib/content";
import Media from "@/components/Media";

/** Bloc « Autres réalisations » — relie les fiches projet entre elles. */
export default function RelatedProjects({ currentSlug }: { currentSlug: string }) {
  const others = projects.items.filter((p) => p.slug !== currentSlug);
  if (!others.length) return null;

  return (
    <section className="px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-dark">
          Autres réalisations
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/projets/${p.slug}`}
              className="group block min-w-0"
            >
              <div className="overflow-hidden rounded-3xl border border-border">
                <Media
                  src={p.image}
                  alt={p.title}
                  className="aspect-[16/10] w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-muted">
                {p.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{p.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
