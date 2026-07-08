/* ============================================================
   Contenu du site KEVIO LABS — édite tout ici.
   Le design (composants) ne dépend jamais de ce fichier :
   change un texte ici, le design reste identique.
   ============================================================ */

export const site = {
  name: "Kevio Labs",
  tagline: "L'IA au service de votre croissance",
  description:
    "Agence digitale & IA. Sites web, publicité digitale et automatisation IA pour accélérer votre croissance.",
  email: "hello@keviolabs.com",
  cta: { label: "Démarrer un projet", href: "/contact" },
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/projets" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* Hero ------------------------------------------------------ */
export const hero = {
  titleLine1: "Croissance digitale",
  titleLine2: "intelligente",
  tags: ["Site Web", "Publicité", "SEO", "App", "Agent IA"],
  primary: { label: "Voir nos réalisations", href: "/projets" },
  secondary: { label: "Prendre contact", href: "/contact" },
  marquee: ["Site Web", "Publicité", "SEO", "Application", "Agent IA", "Automatisation"],
};

/* Services -------------------------------------------------- */
/* `short` sert à l'accueil ; les autres champs à la page /services. */
export const services = {
  label: "Nos services",
  subtitle: "Ce que nous créons pour vous.",
  items: [
    {
      n: "/01",
      slug: "site-web",
      icon: "◈",
      title: "Site Web",
      short:
        "Sites vitrines et e-commerce, en CMS ou codés sur-mesure. Chaque pixel pensé pour convertir.",
      headline:
        "Votre site est votre premier commercial — celui qui ne dort jamais.",
      text: "Accessible 24h/24 et 7j/7, votre site présente votre activité de façon professionnelle, renforce votre présence en ligne et attire de nouveaux clients.",
      keywords: ["Performants", "Design unique", "Responsives", "Engageants"],
      offers: [
        {
          n: "01",
          title: "Site vitrine CMS",
          text: "WordPress, Webflow, Framer. Mise en ligne rapide, gestion autonome, design personnalisé.",
          badge: "",
        },
        {
          n: "02",
          title: "Site vitrine sur-mesure",
          text: "HTML/CSS/JS pur, PageSpeed 95+, zéro dépendance.",
          badge: "Recommandé",
        },
        {
          n: "03",
          title: "E-commerce CMS",
          text: "Shopify, WooCommerce. Prêt à vendre dès le lancement.",
          badge: "",
        },
        {
          n: "04",
          title: "E-commerce sur-mesure",
          text: "Architecture custom, API, scalable.",
          badge: "",
        },
      ],
      included: [
        "Rendez-vous de cadrage",
        "SEO Google",
        "100% responsive mobile",
        "Hébergement et mise en ligne",
        "Nom de domaine 100% propriétaire",
        "Formation à la gestion de contenu",
        "Suivi post-lancement et support",
      ],
      cta: "Un site qui travaille pour vous, jour et nuit.",
    },
    {
      n: "/02",
      slug: "publicite",
      icon: "❖",
      title: "Publicité digitale",
      short:
        "Vos futurs clients sont déjà en ligne. La vraie question : vous voient-ils, ou voient-ils vos concurrents ?",
      headline: "Vous ne payez plus pour être vu — vous investissez pour vendre.",
      text: "La publicité digitale place votre marque exactement là où se trouve votre audience. Fini les budgets dépensés au hasard : chaque euro est traçable et orienté résultats.",
      keywords: [
        "Résultats immédiats",
        "Ciblage chirurgical",
        "Chaque euro traçable",
        "Scale avec vous",
      ],
      offers: [
        {
          n: "01",
          title: "Meta Ads — Facebook & Instagram",
          text: "Audiences lookalike, créatifs, retargeting, reporting.",
          badge: "",
        },
        {
          n: "02",
          title: "Google Ads — Search, Display, Shopping",
          text: "Enchères optimisées, suivi des conversions.",
          badge: "",
        },
        {
          n: "03",
          title: "TikTok Ads",
          text: "Formats natifs, créas tendances, ciblage par intérêts.",
          badge: "",
        },
        {
          n: "04",
          title: "Stratégie & optimisation",
          text: "A/B testing, coût par lead, scaling, dashboard.",
          badge: "",
        },
      ],
      included: [],
      cta: "Chaque jour sans campagne, ce sont des clients qui vont chez vos concurrents.",
    },
    {
      n: "/03",
      slug: "seo",
      icon: "⬡",
      title: "Référencement SEO",
      short:
        "Chaque jour, vos clients tapent leur besoin sur Google. Est-ce votre nom qui apparaît, ou celui de votre concurrent ?",
      headline: "Le SEO travaille pour vous 24h/24, mois après mois.",
      text: "Nous construisons une autorité durable : technique irréprochable, contenu qui répond aux vraies questions, et stratégie pour vous installer en haut des résultats.",
      keywords: [
        "Visibilité permanente",
        "Clients ultra-qualifiés",
        "Crédibilité instantanée",
        "Effet boule de neige",
      ],
      offers: [
        {
          n: "01",
          title: "SEO technique",
          text: "Core Web Vitals, Schema.org, indexation, vitesse.",
          badge: "",
        },
        {
          n: "02",
          title: "Contenu & mots-clés",
          text: "Recherche, rédaction, stratégie, blog.",
          badge: "",
        },
        {
          n: "03",
          title: "SEO local",
          text: "Google Business, avis, recherches géolocalisées, pack local.",
          badge: "",
        },
        {
          n: "04",
          title: "Suivi & autorité",
          text: "Netlinking, positions, Search Console, reporting.",
          badge: "",
        },
      ],
      included: [],
      cta: "La meilleure date pour lancer votre SEO, c'était il y a un an. La deuxième, c'est aujourd'hui.",
    },
    {
      n: "/04",
      slug: "applications",
      icon: "◧",
      title: "Applications mobile & web",
      short:
        "Un site vous fait exister. Une application vous rend indispensable.",
      headline: "Du concept au lancement sur les stores.",
      text: "Des applications rapides, élégantes et sur-mesure — sur iOS, Android et le web, à partir d'une seule base de code.",
      keywords: [
        "Présence permanente",
        "Fidélisation supérieure",
        "Expérience instantanée",
        "Canal maîtrisé",
      ],
      offers: [
        {
          n: "01",
          title: "Applications mobiles natives",
          text: "iOS & Android, React Native, publication sur les stores.",
          badge: "",
        },
        {
          n: "02",
          title: "Applications web (PWA)",
          text: "Sans store, hors-ligne, instantané.",
          badge: "",
        },
        {
          n: "03",
          title: "Espaces & portails clients",
          text: "Authentification sécurisée, temps réel, notifications push.",
          badge: "",
        },
        {
          n: "04",
          title: "Design & UX",
          text: "UI/UX sur-mesure, design system, animations, prototypage.",
          badge: "",
        },
      ],
      included: [],
      cta: "Vos clients passent des heures sur leur téléphone. Votre marque y a-t-elle sa place ?",
    },
    {
      n: "/05",
      slug: "ia-automatisation",
      icon: "✦",
      title: "Agents IA & Automatisation",
      short:
        "Et si votre entreprise tournait même quand vous dormez ? Standard IA, agent SAV, prospection automatisée.",
      headline: "L'IA fait le travail — instantanément, sans fatigue, 24h/24.",
      text: "Standard téléphonique IA, agent SAV, pipelines de prospection automatisés : l'IA récupère votre temps et ne perd plus aucun client.",
      keywords: [
        "Du temps récupéré",
        "Disponibilité totale",
        "Zéro client perdu",
        "Coût fixe, capacité illimitée",
      ],
      offers: [
        {
          n: "01",
          title: "Agents de service client",
          text: "Réponses 24/7, connecté à vos outils, tri intelligent, ton sur-mesure.",
          badge: "",
        },
        {
          n: "02",
          title: "Standard téléphonique IA",
          text: "Voix naturelle, réservation, intégration à l'agenda.",
          badge: "",
        },
        {
          n: "03",
          title: "Automatisation des processus",
          text: "Workflows sur-mesure, multi-outils, alertes.",
          badge: "",
        },
        {
          n: "04",
          title: "Pipelines de prospection IA",
          text: "Ciblage, outreach personnalisé, scaling auto, leads qualifiés.",
          badge: "",
        },
      ],
      included: [],
      cta: "Les entreprises qui utilisent l'IA remplaceront celles qui l'ignorent.",
    },
  ],
};

/* Process --------------------------------------------------- */
export const process = {
  label: "Notre process",
  title: "Un process pensé pour votre réussite.",
  subtitle:
    "De la prise de contact à la livraison, chaque étape maximise vos résultats.",
  steps: [
    {
      n: "01",
      title: "Comprendre",
      text: "On échange, on écoute, on challenge. Avant de parler solution, on s'immerge dans votre contexte, vos enjeux et vos objectifs.",
    },
    {
      n: "02",
      title: "Audit",
      text: "On analyse votre situation digitale, vos objectifs et votre marché pour construire une stratégie sur-mesure.",
    },
    {
      n: "03",
      title: "Sur-mesure",
      text: "On met en place le plan d'action dont vous avez vraiment besoin pour croître dans votre domaine.",
    },
    {
      n: "04",
      title: "On crée",
      text: "On déploie, on optimise, on sécurise. Mise en ligne maîtrisée avec tests complets pour un lancement sans accroc.",
    },
    {
      n: "05",
      title: "Faire croître",
      text: "Le lancement n'est que le début : on analyse, on itère et on accompagne pour maximiser vos résultats.",
    },
  ],
};

/* About + Stats --------------------------------------------- */
export const about = {
  label: "Qui sommes-nous",
  title: "L'agence qui propulse votre business.",
  // Grand bloc révélé au scroll (mot par mot)
  paragraph:
    "Kevio Labs conçoit des solutions digitales sur-mesure pour les entreprises qui veulent se démarquer et croître durablement. Design premium, performance publicitaire et intelligence artificielle : un écosystème complet pour une croissance qui dure.",
  ctaText: "Discutons de votre projet",
  // Chiffres — à ajuster avec tes vrais nombres
  stats: [
    { value: "50+", label: "Projets livrés" },
    { value: "40+", label: "Clients satisfaits" },
    { value: "×3", label: "ROI moyen" },
    { value: "100%", label: "IA First" },
  ],
};

/* Réalisations ---------------------------------------------- */
export const projects = {
  label: "Nos réalisations",
  title: "Nos derniers projets.",
  cta: { label: "Voir tous les projets", href: "/projets" },
  items: [
    {
      slug: "kevio-labs",
      subtitle: "Conception et développement du site de l'agence",
      title: "Kevio Labs",
      tags: ["Identité", "React", "Animations"],
      image: "/projects/project-1.jpg",
    },
    {
      slug: "a-la-lyonnaise",
      subtitle:
        "Site vitrine multi-pages pour une enseigne de restauration rapide en expansion nationale",
      title: "À la Lyonnaise",
      tags: ["Site Web", "Franchise", "Multi-pages"],
      image: "/projects/project-2.jpg",
    },
    {
      slug: "agent-sav-ia",
      subtitle: "Agent de service client automatisé, disponible 24h/24",
      title: "Agent SAV IA",
      tags: ["Automatisation", "IA"],
      image: "/projects/project-3.jpg",
    },
    {
      slug: "pipeline-growth",
      subtitle: "Pipeline de prospection B2B automatisé",
      title: "Pipeline Growth",
      tags: ["B2B", "Prospection"],
      image: "/projects/project-4.jpg",
    },
  ],
};

/* FAQ ------------------------------------------------------- */
export const faq = {
  label: "FAQ — Questions fréquentes",
  items: [
    {
      q: "Combien de temps prend la création d'un site web ?",
      a: "En moyenne, un site vitrine est livré en 1 à 4 semaines et un site e-commerce en 2 à 6 semaines, selon la complexité du projet.",
    },
    {
      q: "Quels sont vos tarifs ?",
      a: "Nos tarifs dépendent de la complexité du projet. Nous proposons un appel découverte gratuit pour comprendre vos besoins et vous fournir un devis sur-mesure et transparent.",
    },
    {
      q: "Est-ce que vous gérez aussi la publicité digitale ?",
      a: "Oui. Nous gérons vos campagnes Google Ads, Meta Ads et TikTok Ads — de la stratégie à l'optimisation — pour maximiser votre ROI publicitaire.",
    },
    {
      q: "Qu'est-ce qu'un agent IA et comment ça peut m'aider ?",
      a: "Un agent IA travaille pour vous 24h/24 : réponse aux clients, qualification de leads, automatisation de tâches. Il vous fait gagner du temps et augmente vos conversions.",
    },
    {
      q: "Proposez-vous un suivi après la livraison ?",
      a: "Absolument. Suivi continu avec rapports de performance, optimisations régulières et support réactif. Votre croissance est notre priorité sur le long terme.",
    },
    {
      q: "Est-ce que je serai propriétaire de mon site / application ?",
      a: "Oui, à 100%. Code source, nom de domaine, contenus et accès vous appartiennent entièrement. Aucun abonnement ni dépendance technique : si vous changez de prestataire un jour, vous repartez avec tout.",
    },
    {
      q: "Quel genre d'applications développez-vous ?",
      a: "Applications mobiles iOS et Android, applications web (PWA), plateformes sur-mesure, portails clients, espaces de gestion, outils métier et dashboards. Nous concevons une solution taillée pour votre activité.",
    },
  ],
};

/* Contact --------------------------------------------------- */
export const contact = {
  label: "Contact",
  title: "Construisons",
  titleAccent: "votre succès digital",
  intro: "Discutons de vos ambitions — premier échange offert.",
  buttons: [
    { label: "Nous contacter", href: "#formulaire" },
    { label: "Prendre un RDV", href: "#formulaire" },
  ],
  details: [
    { label: "Email", value: "hello@keviolabs.com", href: "mailto:hello@keviolabs.com" },
    { label: "Réponse", value: "Sous 24h", href: "" },
    { label: "Localisation", value: "France", href: "" },
  ],
  projectTypes: [
    "Site Web",
    "Publicité digitale",
    "Automatisation IA",
    "SEO & Référencement",
    "Tout à la fois",
  ],
  budgets: ["2 000 – 5 000€", "5 000 – 10 000€", "> 10 000€"],
  success: "Message envoyé avec succès ! Nous vous répondons sous 24h.",
};

/* Blog ------------------------------------------------------ */
export const blog = {
  label: "Le journal",
  posts: [
    {
      slug: "site-web-premier-commercial",
      category: "Site Web",
      date: "2026",
      title: "Votre site, ce commercial qui ne dort jamais",
      excerpt:
        "Pourquoi un site pensé pour convertir change la donne pour votre acquisition.",
      image: "/blog/post-1.jpg",
    },
    {
      slug: "agent-ia-24-7",
      category: "IA",
      date: "2026",
      title: "Un agent IA qui travaille pour vous 24h/24",
      excerpt:
        "Réponse client, qualification de leads, automatisation : ce que l'IA change concrètement.",
      image: "/blog/post-2.jpg",
    },
    {
      slug: "seo-autorite-durable",
      category: "SEO",
      date: "2026",
      title: "Le SEO, ou comment construire une autorité durable",
      excerpt:
        "Technique, contenu et stratégie pour s'installer durablement en haut de Google.",
      image: "/blog/post-3.jpg",
    },
  ],
};

/* Footer ---------------------------------------------------- */
export const footer = {
  heading: "Construisons votre succès digital.",
  columns: [
    {
      title: "Suivez-nous",
      links: [
        { label: "LinkedIn", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "TikTok", href: "#" },
      ],
    },
    {
      title: "Expertises",
      links: [
        { label: "Création de sites", href: "/services" },
        { label: "Automatisation & IA", href: "/services" },
        { label: "SEO & Référencement", href: "/services" },
        { label: "Publicité digitale", href: "/services" },
        { label: "Applications", href: "/services" },
      ],
    },
    {
      title: "L'agence",
      links: [
        { label: "À propos de nous", href: "/about" },
        { label: "Nos réalisations", href: "/projets" },
        { label: "Notre process", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Pages",
      links: [
        { label: "Accueil", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Réalisations", href: "/projets" },
        { label: "Blog", href: "/blog" },
        { label: "Mentions légales", href: "#" },
      ],
    },
  ],
};
