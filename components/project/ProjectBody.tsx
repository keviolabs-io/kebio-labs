"use client";

import Media from "@/components/Media";
import Reveal from "@/components/anim/Reveal";
import type { ProjectDetail } from "@/lib/content";

type Section = ProjectDetail["sections"][number];

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] leading-none text-foreground">
      ✓
    </span>
  );
}

function SectionBlock({ s, divider }: { s: Section; divider: boolean }) {
  return (
    <div className={divider ? "mt-14 border-t border-border pt-14" : ""}>
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
  );
}

/** Corps de la fiche projet : sections (texte, ~1000px) + grande image
 *  intercalée (plus large, ~1400px) + lien vers le site en ligne. */
export default function ProjectBody({
  detail,
  liveUrl,
}: {
  detail: ProjectDetail;
  liveUrl?: string;
}) {
  const splitIdx = detail.image
    ? detail.sections.findIndex((s) => s.checklist)
    : -1;
  const hasImage = detail.image && splitIdx >= 0;
  const before = hasImage
    ? detail.sections.slice(0, splitIdx + 1)
    : detail.sections;
  const after = hasImage ? detail.sections.slice(splitIdx + 1) : [];

  return (
    <section className="px-6 py-24 md:py-28">
      {/* Texte */}
      <div className="mx-auto max-w-[1000px]">
        {before.map((s, i) => (
          <SectionBlock key={i} s={s} divider={i > 0} />
        ))}
      </div>

      {/* Grande image intercalée, plus large que le texte */}
      {hasImage && (
        <Reveal className="mx-auto mt-14 max-w-[1600px] overflow-hidden rounded-[48px] shadow-[0_0_70px_-10px_rgba(255,255,255,0.10)] ring-1 ring-white/[0.07]">
          <Media src={detail.image} alt="" className="aspect-[16/9] w-full" />
        </Reveal>
      )}

      {/* Suite du texte */}
      {(after.length > 0 || liveUrl) && (
        <div className="mx-auto mt-16 max-w-[1000px]">
          {after.map((s, i) => (
            <SectionBlock key={i} s={s} divider={i > 0} />
          ))}

          {liveUrl && (
            <Reveal className={after.length > 0 ? "mt-14" : ""}>
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
      )}
    </section>
  );
}
