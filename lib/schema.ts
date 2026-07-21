/* ============================================================
   Données structurées JSON-LD (SEO / rich results Google).
   ============================================================ */

import { site, footer, services, projects } from "@/lib/content";

const sameAs = footer.socials
  .map((s) => s.href)
  .filter((h) => h.startsWith("http"));

/** Organisation / agence — accueil (SEO local Lyon inclus). */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon`,
  image: `${site.url}/opengraph-image.png`,
  description: site.description,
  email: site.email,
  areaServed: [
    { "@type": "City", name: "Lyon" },
    { "@type": "Country", name: "France" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lyon",
    addressCountry: "FR",
  },
  knowsAbout: [
    "Création de site internet",
    "Développement web et applications",
    "Automatisation et intelligence artificielle",
    "Agents IA",
    "Publicité en ligne (Google Ads, Meta Ads, TikTok Ads)",
    "Référencement SEO",
  ],
  sameAs,
};

/** Liste des services proposés. */
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services de Kevio Labs",
  description:
    "Développement web et applications, automatisation & IA, publicité et SEO à Lyon.",
  itemListElement: services.items.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.text,
      provider: { "@type": "Organization", name: site.name, url: site.url },
      areaServed: { "@type": "City", name: "Lyon" },
    },
  })),
};

/** Liste des projets / réalisations. */
export const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Réalisations de Kevio Labs",
  description: "Projets web, applications et IA réalisés par Kevio Labs.",
  itemListElement: projects.items.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${site.url}/projets/${p.slug}`,
    name: p.title,
  })),
};

/** Page À propos. */
export const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `À propos — ${site.name}`,
  url: `${site.url}/about`,
  description:
    "Kevio Labs, agence digitale à Lyon : sites, applications, automatisation IA, publicité et SEO sur-mesure.",
  mainEntity: { "@id": `${site.url}/#organization` },
};

/** Page Blog (listing). */
export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `Blog — ${site.name}`,
  url: `${site.url}/blog`,
  description:
    "Conseils et coulisses sur la création de sites, les applications, l'IA et le SEO.",
  publisher: { "@id": `${site.url}/#organization` },
};

/** Fiche projet (étude de cas). */
export function projectSchema(p: { title: string; subtitle: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    headline: p.title,
    description: p.subtitle,
    url: `${site.url}/projets/${p.slug}`,
    creator: { "@id": `${site.url}/#organization` },
    inLanguage: "fr-FR",
  };
}
