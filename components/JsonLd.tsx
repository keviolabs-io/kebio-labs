/** Injecte un bloc de données structurées JSON-LD (SEO / rich results). */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON contrôlé par nous (pas d'entrée utilisateur) → injection sûre.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
