import Reveal from "@/components/anim/Reveal";
import type { LegalDoc } from "@/lib/legal";

/** Mise en page commune des pages légales (titre + sections lisibles). */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <section className="px-6 pb-24 pt-36 md:pb-28 md:pt-44">
      <div className="mx-auto max-w-[820px]">
        <Reveal>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 text-sm text-muted-dark">
            Dernière mise à jour : {doc.updated}
          </p>
        </Reveal>

        <div className="mt-14 space-y-12">
          {doc.sections.map((s, i) => (
            <Reveal key={i} delay={0.03}>
              <div>
                {s.heading && (
                  <h2 className="text-xl font-medium tracking-tight text-foreground">
                    {s.heading}
                  </h2>
                )}
                {s.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className={`${s.heading ? "mt-4" : ""} ${
                      j > 0 ? "mt-4" : ""
                    } leading-relaxed text-muted`}
                  >
                    {p}
                  </p>
                ))}
                {s.items && (
                  <ul className="mt-4 space-y-2">
                    {s.items.map((it, k) => (
                      <li
                        key={k}
                        className="flex items-start gap-3 leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-dark" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
