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
  // Liste de services affichée dans le hero (paires « nom / détails »)
  weDoItems: [
    { left: "Création de sites", right: "UI/UX, sur-mesure" },
    { left: "Applications", right: "Web, mobile, sur-mesure" },
    { left: "Automatisation", right: "Agents IA, n8n" },
    { left: "Publicité", right: "Google, Meta & TikTok Ads" },
    { left: "SEO", right: "Référencement, optimisation organique" },
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
    "© Nous créons des automatisations, des apps, des sites web et des expériences numériques — avec intensité, clarté et soin.",
  contactLabel: "Contactez-nous",
  socials: [
    { key: "facebook", label: "Facebook", href: "#" },
    { key: "instagram", label: "Instagram", href: "#" },
    { key: "dribbble", label: "Dribbble", href: "#" },
    { key: "behance", label: "Behance", href: "#" },
  ],
};

/* Bande défilante sous le hero — technos & outils ----------- */
export const marqueeItems = [
  "Next.js",
  "React",
  "n8n",
  "Google Ads",
  "Meta Ads",
  "TikTok Ads",
  "Figma",
  "TypeScript",
  "Shopify",
  "WordPress",
  "Claude",
  "Framer",
  "Motion",
  "GitHub",
  "OpenAI",
];

/* Services -------------------------------------------------- */
export const services = {
  label: "Nos services",
  items: [
    {
      n: "/01",
      icon: "web",
      title: "Développement web",
      text: "Sites vitrines, e-commerce et applications web & mobiles (iOS, Android, PWA) — en CMS ou codés sur-mesure, pensés pour convertir.",
    },
    {
      n: "/02",
      icon: "automation",
      title: "Automatisation",
      text: "Agents IA et workflows n8n qui travaillent pour vous 24h/24 et automatisent vos tâches.",
    },
    {
      n: "/03",
      icon: "ads",
      title: "Publicité",
      text: "Campagnes Google, Meta et TikTok Ads pilotées par la donnée pour maximiser votre ROI.",
    },
    {
      n: "/04",
      icon: "seo",
      title: "SEO",
      text: "Référencement technique, contenu et autorité pour vous installer durablement en haut de Google.",
    },
  ],
};

/* About (grand bloc de texte révélé au scroll + stats) ------ */
export const about = {
  label: "À propos de nous",
  // Un seul paragraphe : chaque caractère s'éclaire au scroll (gris → blanc).
  paragraph:
    "Nous accompagnons les entreprises qui refusent de se fondre dans la masse. Sites web, applications, publicité, SEO, agents IA — nous concevons des solutions digitales sur-mesure qui convertissent, automatisent et propulsent votre croissance. Pas de templates, pas de compromis : chaque projet est pensé pour performer.",
  // Chiffres (compteur animé) — ajuste avec tes vrais nombres.
  stats: [
    { value: 50, suffix: "+", label: "Projets livrés" },
    { value: 10, suffix: "+", label: "Années d'expérience" },
    { value: 25, suffix: "+", label: "Clients satisfaits" },
  ],
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
  // Titre à mélange de polices : partie serif italique + partie sans.
  titleItalic: "Le chemin vers un",
  titleSans: "projet qui performe",
  subtitle:
    "Une méthode claire et collaborative — pour que vos idées passent du concept au lancement sans accroc.",
  steps: [
    {
      n: "/01",
      icon: "discover",
      title: "Découverte",
      text: "On apprend à connaître votre marque, vos objectifs et votre audience.",
    },
    {
      n: "/02",
      icon: "strategy",
      title: "Stratégie",
      text: "On définit une direction claire et un plan d'action mesurable.",
    },
    {
      n: "/03",
      icon: "design",
      title: "Design",
      text: "On conçoit des expériences soignées, testées et itérées.",
    },
    {
      n: "/04",
      icon: "launch",
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
