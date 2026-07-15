import Media from "@/components/Media";

/** En-tête de fiche projet : grand titre (reveal masqué) + grande image. */
export default function ProjectHero({
  title,
  image,
}: {
  title: string;
  image?: string;
}) {
  return (
    <section className="px-6 pt-36 md:pt-44">
      <div className="mx-auto max-w-[1400px]">
        {/* Titre géant, révélé par un masque qui monte */}
        <div className="overflow-hidden pb-2">
          <h1 className="reveal-mask-up text-6xl font-normal leading-[0.95] tracking-tight sm:text-8xl md:text-[140px] md:leading-[0.9]">
            {title}
          </h1>
        </div>

        {/* Grande image : coins arrondis, fine lueur claire + halo flou */}
        <div className="reveal-fade-up mt-10 overflow-hidden rounded-[48px] shadow-[0_0_70px_-10px_rgba(255,255,255,0.10)] ring-1 ring-white/[0.07] md:mt-14">
          <Media src={image} alt={title} className="aspect-[16/9] w-full" />
        </div>
      </div>
    </section>
  );
}
