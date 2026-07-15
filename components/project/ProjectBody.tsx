"use client";

import { Fragment } from "react";
import Media from "@/components/Media";
import Reveal from "@/components/anim/Reveal";
import type { ProjectDetail } from "@/lib/content";

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] leading-none text-foreground">
      ✓
    </span>
  );
}

/** Corps de la fiche projet : sections (titres, paragraphes, check-lists),
 *  grande image intercalée, puis lien vers le site en ligne. */
export default function ProjectBody({
  detail,
  liveUrl,
}: {
  detail: ProjectDetail;
  liveUrl?: string;
}) {
  return (
    <section className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1000px]">
        {detail.sections.map((s, i) => (
          <Fragment key={i}>
            <div className={i > 0 ? "mt-14 border-t border-border pt-14" : ""}>
              <Reveal as="h2" className="text-2xl font-medium text-foreground">
                {s.heading}
              </Reveal>
              {s.paragraphs.map((p, j) => (
                <Reveal
                  key={j}
                  as="p"
                  delay={0.05}
                  className="mt-6 text-base leading-relaxed text-muted"
                >
                  {p}
                </Reveal>
              ))}
              {s.checklist && (
                <ul className="mt-8 space-y-3">
                  {s.checklist.map((c, k) => (
                    <Reveal
                      as="li"
                      key={k}
                      delay={k * 0.05}
                      className="flex items-start gap-3 text-foreground/90"
                    >
                      <Check />
                      <span>{c}</span>
                    </Reveal>
                  ))}
                </ul>
              )}
            </div>

            {/* Grande image intercalée après la section avec check-list */}
            {s.checklist && detail.image && (
              <Reveal className="mt-14 overflow-hidden rounded-3xl border border-border">
                <Media src={detail.image} alt="" className="aspect-[16/9] w-full" />
              </Reveal>
            )}
          </Fragment>
        ))}

        {liveUrl && (
          <Reveal className="mt-14">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-7 py-4 text-sm font-medium transition-colors hover:bg-card-hover"
            >
              Voir le site en ligne
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
