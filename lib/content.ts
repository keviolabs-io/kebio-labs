/* ============================================================
   Contenu du site — édite tout ici (textes, listes, liens).
   Les sections lisent depuis ce fichier, donc pas besoin de
   toucher au code des composants pour changer un texte.
   ============================================================ */

export const site = {
  name: "Kevio Labs",
  tagline: "Agence créative moderne",
  description:
    "Nous concevons des marques, des interfaces et des produits numériques ambitieux qui laissent une impression durable.",
  email: "hello@kevio.studio",
  cta: { label: "Discutons !", href: "/contact" },
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/about" },
  { label: "Projets", href: "/projets" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* Hero ------------------------------------------------------ */
export const hero = {
  // Le titre est en deux parties : la 2e est en serif italique.
  titleLine1: "Créer,",
  titleLine2: "de l'impact",
  // Bloc bas-gauche : « ce que nous faisons »
  weDoLabel: "Nous le faisons",
  // Liste de services affichée dans le hero (paires « gauche / droite »)
  weDoItems: [
    { left: "Identité de marque", right: "Design UI / UX" },
    { left: "Développement", right: "Marketing" },
  ],
  // Bloc bas-droite : projet en vedette
  featuredLabel: "En vedette",
  featuredIndex: "(02)",
  featured: {
    title: "Les actualités",
    image: "/projects/project-1.jpg",
    href: "/projets",
  },
  // Bloc contact + réseaux (haut-droite) — repris du thème
  contactParagraph:
    "© Nous créons des marques, des sites web et des expériences numériques — avec intensité, clarté et soin.",
  contactLabel: "Contactez-nous",
  socials: [
    { key: "facebook", label: "Facebook", href: "#" },
    { key: "instagram", label: "Instagram", href: "#" },
    { key: "dribbble", label: "Dribbble", href: "#" },
    { key: "behance", label: "Behance", href: "#" },
  ],
  // Villes du marquee sous le hero
  marquee: ["venice.", "cairo", "italic", "tokyo", "berlin.", "oslo"],
};

/* Services -------------------------------------------------- */
export const services = {
  label: "Nos services",
  items: [
    {
      n: "/01",
      title: "Identité de marque",
      text: "Créez des identités visuelles qui portent votre voix et laissent une impression durable.",
    },
    {
      n: "/02",
      title: "Design UI / UX",
      text: "Des interfaces centrées utilisateur, à la fois esthétiques, innovantes et intuitives.",
    },
    {
      n: "/03",
      title: "Développement web",
      text: "Des sites et applications performants, conçus pour évoluer avec vous.",
    },
    {
      n: "/04",
      title: "Marketing digital",
      text: "Des campagnes pilotées par la donnée qui attirent, engagent et convertissent — sur tous les canaux.",
    },
  ],
};

/* About (grand bloc de texte révélé au scroll) -------------- */
export const about = {
  label: "À propos de nous",
  // Un seul paragraphe : chaque mot s'éclaire au scroll.
  paragraph:
    "Nous accompagnons les marques ambitieuses et les startups à concevoir des produits numériques qui savent se démarquer et grandir. Nous croyons en un travail intelligent, une exécution rapide et un design porté par le sens.",
};

/* Projets --------------------------------------------------- */
export const projects = {
  label: "Projets récents",
  cta: { label: "Voir tous les projets", href: "/projets" },
  items: [
    {
      slug: "les-actualites",
      subtitle: "Design de page d'accueil pour une plateforme d'actualités",
      title: "Les actualités",
      tags: ["Identité de marque", "Développement web"],
      image: "/projects/project-1.jpg",
    },
    {
      slug: "realite-virtuelle",
      subtitle: "Scène futuriste avec un casque VR élégant",
      title: "Réalité virtuelle",
      tags: ["Identité de marque", "SEO"],
      image: "/projects/project-2.jpg",
    },
    {
      slug: "agence-theo",
      subtitle: "Refonte complète de l'image de marque",
      title: "Marque de l'agence Theo",
      tags: ["UI / UX", "Développement web"],
      image: "/projects/project-3.jpg",
    },
  ],
};

/* Process --------------------------------------------------- */
export const process = {
  label: "Notre processus",
  title: "Une méthode claire, du concept au lancement.",
  steps: [
    {
      n: "01",
      title: "Découverte",
      text: "On apprend à connaître votre marque, vos objectifs et votre audience.",
    },
    {
      n: "02",
      title: "Stratégie",
      text: "On définit une direction claire et un plan d'action mesurable.",
    },
    {
      n: "03",
      title: "Design",
      text: "On conçoit des expériences soignées, testées et itérées.",
    },
    {
      n: "04",
      title: "Lancement",
      text: "On livre, on mesure et on optimise en continu.",
    },
  ],
};

/* Awards ---------------------------------------------------- */
export const awards = {
  label: "Nos récompenses",
  items: [
    {
      org: "Awwwards",
      title: "SOTY 2025 — 1er lauréat",
      project: "Page d'accueil IA Voiture",
    },
    {
      org: "CSS Design Awards",
      title: "Top 5 des sites e-commerce 2024",
      project: "Agence Theo, refonte de l'image",
    },
    {
      org: "Behance",
      title: "Lauréat — Concours de portfolios US 2024",
      project: "Réalité virtuelle, Rencontre",
    },
  ],
};

/* Team ------------------------------------------------------ */
export const team = {
  label: "L'équipe",
  members: [
    { name: "Théo Martin", role: "Directeur créatif", image: "/team/member-1.jpg" },
    { name: "Sofia Laurent", role: "Lead designer", image: "/team/member-2.jpg" },
    { name: "Liam Dubois", role: "Développeur", image: "/team/member-3.jpg" },
  ],
};

/* Pricing --------------------------------------------------- */
export const pricing = {
  label: "Nos tarifs",
  plans: [
    {
      name: "Starter",
      price: "1 900€",
      period: "/ projet",
      features: ["Landing page", "Design responsive", "1 révision", "Livraison 2 semaines"],
      featured: false,
    },
    {
      name: "Studio",
      price: "4 900€",
      period: "/ projet",
      features: [
        "Site multi-pages",
        "Identité de marque",
        "Animations sur-mesure",
        "3 révisions",
        "Support 30 jours",
      ],
      featured: true,
    },
    {
      name: "Sur-mesure",
      price: "Sur devis",
      period: "",
      features: ["Périmètre illimité", "Accompagnement dédié", "Développement complet", "Support étendu"],
      featured: false,
    },
  ],
};

/* Testimonials ---------------------------------------------- */
export const testimonials = {
  label: "Témoignages",
  items: [
    {
      quote:
        "Une équipe qui comprend vraiment les enjeux business. Le résultat a dépassé nos attentes.",
      name: "Camille Roche",
      company: "Fondatrice, Nova",
    },
    {
      quote:
        "Design impeccable, exécution rapide, communication limpide. On recommande sans hésiter.",
      name: "Yanis Belkacem",
      company: "CEO, Flux",
    },
    {
      quote:
        "Ils ont transformé notre image de marque et nos conversions ont bondi. Merci !",
      name: "Marie Lefèvre",
      company: "CMO, Atlas",
    },
  ],
};

/* Blog ------------------------------------------------------ */
export const blog = {
  label: "Le journal",
  posts: [
    {
      slug: "design-systeme-2025",
      category: "Design",
      date: "12 juin 2025",
      title: "Construire un design system qui tient dans le temps",
      excerpt:
        "Comment poser des fondations visuelles cohérentes, réutilisables et faciles à faire évoluer.",
      image: "/blog/post-1.jpg",
    },
    {
      slug: "animations-web-performantes",
      category: "Développement",
      date: "28 mai 2025",
      title: "Des animations web fluides sans sacrifier la performance",
      excerpt:
        "Nos techniques pour des transitions soignées qui restent rapides sur Chrome comme sur Safari.",
      image: "/blog/post-2.jpg",
    },
    {
      slug: "identite-de-marque-startup",
      category: "Branding",
      date: "9 mai 2025",
      title: "L'identité de marque, un levier de croissance pour les startups",
      excerpt:
        "Pourquoi investir tôt dans une image forte change la trajectoire d'une jeune entreprise.",
      image: "/blog/post-3.jpg",
    },
  ],
};

/* Contact --------------------------------------------------- */
export const contact = {
  label: "Contact",
  title: "Parlons de",
  titleAccent: "votre projet",
  intro:
    "Un projet en tête ? Écris-nous quelques lignes, on revient vers toi sous 24h.",
  details: [
    { label: "Email", value: "hello@kevio.studio", href: "mailto:hello@kevio.studio" },
    { label: "Téléphone", value: "+33 6 00 00 00 00", href: "tel:+33600000000" },
    { label: "Localisation", value: "Paris, France", href: "" },
  ],
};

/* Footer ---------------------------------------------------- */
export const footer = {
  // Colonne 1
  locationLabel: "Emplacement",
  address: ["12 rue de la Création, Suite 500", "75002 Paris", "France"],
  contactLabel: "Contact",
  email: "hello@kevio.studio",
  phone: "+33 1 84 80 00 00",
  // Colonne 2 (grands liens)
  linksLabel: "Liens",
  links: [
    { label: "À propos", href: "/about" },
    { label: "Projets", href: "/projets" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  // Colonne 3 (réseaux)
  socialsLabel: "Réseaux sociaux",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "X (Twitter)", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
  // Bas de page
  copyright: "Tous droits réservés.",
  backToTop: "Retour en haut de page",
};
