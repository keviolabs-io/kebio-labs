import Reveal from "@/components/anim/Reveal";

/** Petit badge pilule qui titre chaque section (ex. « Nos services »). */
export default function SectionLabel({
  children,
  icon = "✦",
  center = false,
}: {
  children: React.ReactNode;
  icon?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "flex justify-center" : ""}>
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.02] px-4 py-2 text-sm text-muted">
        <span className="text-muted-dark">{icon}</span>
        {children}
      </span>
    </Reveal>
  );
}
