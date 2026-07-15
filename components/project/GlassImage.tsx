import Media from "@/components/Media";

// Bordure « glass » de l'original : bande translucide de 16px autour de l'image,
// dégradé blanc plus lumineux en haut et en bas (rgba 0.12), transparent au centre.
const GLASS =
  "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 14.5%, rgba(255,255,255,0) 85.5%, rgba(255,255,255,0.12) 100%)";

export default function GlassImage({
  src,
  alt = "",
  className = "",
}: {
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[56px] p-4 ${className}`}
      style={{ background: GLASS }}
    >
      <div className="overflow-hidden rounded-[48px]">
        <Media src={src} alt={alt} className="aspect-[16/9] w-full" />
      </div>
    </div>
  );
}
