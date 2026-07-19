"use client";

import GlassImage from "@/components/project/GlassImage";
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

/** Couleur d'un score PageSpeed (vert ≥ 90, orange 50-89, rouge < 50). */
function scoreColor(v: number) {
  if (v >= 90) return "#22c55e";
  if (v >= 50) return "#f59e0b";
  return "#ef4444";
}

/** Jauge circulaire d'un score. */
function Gauge({ label, value }: { label: string; value: number }) {
  const color = scoreColor(value);
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      <div
        className="flex aspect-square w-full max-w-[70px] items-center justify-center rounded-full text-base font-medium sm:text-lg"
        style={{
          color,
          border: `2px solid ${color}`,
          boxShadow: `0 0 24px -6px ${color}55`,
        }}
      >
        {value}
      </div>
      <span className="text-[11px] leading-tight text-muted sm:text-xs">
        {label}
      </span>
    </div>
  );
}

/** Bloc des scores PageSpeed Insights (par appareil). */
function Scores({ scores }: { scores: NonNullable<ProjectDetail["scores"]> }) {
  return (
    <Reveal className="mt-12 rounded-3xl border border-border bg-white/[0.02] p-6 sm:p-10">
      <p className="text-sm text-muted-dark">Scores PageSpeed Insights</p>
      <div className="mt-8 grid gap-10 sm:grid-cols-2">
        {scores.map((g) => (
          <div key={g.device}>
            <p className="mb-6 text-sm font-medium text-foreground/90">
              {g.device}
            </p>
            {/* Grille 4 colonnes : les jauges rétrécissent au lieu de déborder */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {g.items.map((it) => (
                <Gauge key={it.label} label={it.label} value={it.value} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

/** Stack technique : rangée de tags. */
function Stack({ stack }: { stack: NonNullable<ProjectDetail["stack"]> }) {
  return (
    <Reveal className="mt-12">
      <p className="text-sm text-muted-dark">Stack technique</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {stack.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-white/[0.03] px-4 py-2 text-sm text-foreground/90"
          >
            {t}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

/** Bloc des résultats chiffrés (grands nombres). */
function Stats({ stats }: { stats: NonNullable<ProjectDetail["stats"]> }) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className="text-center sm:text-left">
          <div className="text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
            {s.value}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">{s.label}</p>
        </Reveal>
      ))}
    </div>
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
    <section className="px-6 py-16 md:py-28">
      {/* Texte */}
      <div className="mx-auto max-w-[1000px]">
        {before.map((s, i) => (
          <SectionBlock key={i} s={s} divider={i > 0} />
        ))}
        {/* Stack technique */}
        {detail.stack && <Stack stack={detail.stack} />}
        {/* Scores PageSpeed (preuve technique) */}
        {detail.scores && <Scores scores={detail.scores} />}
      </div>

      {/* Grande image intercalée, plus large que le texte */}
      {hasImage && (
        <Reveal className="mx-auto mt-14 max-w-[1600px]">
          <GlassImage src={detail.image} />
        </Reveal>
      )}

      {/* Suite du texte */}
      {(after.length > 0 || liveUrl) && (
        <div className="mx-auto mt-16 max-w-[1000px]">
          {after.map((s, i) => (
            <SectionBlock key={i} s={s} divider={i > 0} />
          ))}

          {/* Résultats chiffrés */}
          {detail.stats && <Stats stats={detail.stats} />}

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
