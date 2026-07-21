/**
 * Couverture d'article placeholder (codée) — en attendant les vrais visuels.
 * Dégradé sombre + motif pointillé + puce catégorie, cohérent avec le site.
 */
export default function BlogCover({
  category,
  className = "",
}: {
  category: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: "linear-gradient(135deg, #17171a 0%, #0a0a0b 62%)" }}
    >
      {/* Lueur douce */}
      <div
        className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.12), transparent 70%)",
        }}
      />
      {/* Motif pointillé */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
      {/* Puce catégorie */}
      <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-white/75 backdrop-blur-sm">
        {category}
      </span>
      {/* Signature */}
      <span className="absolute right-4 top-4 font-serif-italic text-sm text-white/35">
        kevio
      </span>
    </div>
  );
}
