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
    { left: "Développement web", right: "Sites & applications sur-mesure" },
    { left: "Automatisation", right: "Agents IA, n8n" },
    { left: "Publicité", right: "Google, Meta & TikTok Ads" },
    { left: "SEO", right: "Référencement, optimisation organique" },
  ],
  // Bloc bas-droite : projet en vedette
  featuredLabel: "En vedette",
  featuredIndex: "(01)",
  featured: {
    title: "À La Lyonnaise®",
    image: "/projects/project-1.webp",
    href: "/projets/a-la-lyonnaise",
  },
  // Bloc contact + réseaux (haut-droite) — repris du thème
  contactParagraph:
    "© Nous créons des automatisations, des apps, des sites web et des expériences numériques — avec intensité, clarté et soin.",
  contactLabel: "Contactez-nous",
  socials: [
    { key: "instagram", label: "Instagram", href: "https://www.instagram.com/keviolabs" },
    { key: "x", label: "X (Twitter)", href: "https://x.com/keviolabs" },
    { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@kevio.labs" },
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
      tagline: "Sites & applications sur-mesure",
      description:
        "Nous concevons et codons des sites et applications taillés pour votre activité. Vitrine, e-commerce, plateforme métier ou application web : un code propre, rapide et évolutif, pensé pour convertir et grandir avec vous — jamais un template générique.",
      features: [
        "Sites vitrines & e-commerce",
        "Applications web & mobiles (iOS, Android, PWA)",
        "CMS ou développement 100 % sur-mesure",
        "Interfaces sur-mesure (UI/UX)",
        "Performance & référencement technique",
        "Maintenance & évolutions dans le temps",
      ],
    },
    {
      n: "/02",
      icon: "automation",
      title: "Automatisation & IA",
      text: "Agents IA et workflows n8n qui travaillent pour vous 24h/24 et automatisent vos tâches.",
      tagline: "Des agents qui travaillent 24h/24",
      description:
        "Nous mettons l'IA et l'automatisation au service de votre croissance. Des agents IA qui répondent à vos clients comme un humain, des workflows qui éliminent les tâches répétitives et connectent vos outils : vous gagnez du temps et ne ratez plus aucune opportunité.",
      features: [
        "Agents IA de support client (SAV)",
        "Réponses personnalisées, au ton humain",
        "Relances & prises de rendez-vous automatiques",
        "Workflows n8n, Make ou Zapier",
        "Connexion de vos outils (CRM, mail, agenda…)",
        "Escalade vers l'humain quand c'est nécessaire",
      ],
    },
    {
      n: "/03",
      icon: "ads",
      title: "Publicité",
      text: "Campagnes Google, Meta et TikTok Ads pilotées par la donnée pour maximiser votre ROI.",
      tagline: "Des campagnes rentables, pilotées par la donnée",
      description:
        "Nous lançons et optimisons vos campagnes Google, Meta et TikTok Ads. Ciblage précis, créatives qui accrochent, suivi des conversions : chaque euro investi est mesuré et optimisé pour maximiser votre retour sur investissement.",
      features: [
        "Google Ads (Search, Display, Shopping)",
        "Meta Ads (Instagram & Facebook)",
        "TikTok Ads",
        "Ciblage & audiences sur-mesure",
        "Création des visuels & des messages",
        "Suivi des conversions & reporting clair",
      ],
    },
    {
      n: "/04",
      icon: "seo",
      title: "SEO",
      text: "Référencement technique, contenu et autorité pour vous installer durablement en haut de Google.",
      tagline: "Une visibilité durable en haut de Google",
      description:
        "Nous installons votre site durablement dans les premiers résultats. Optimisation technique, contenu qui répond aux recherches de vos clients et autorité : un trafic qualifié qui arrive tout seul, mois après mois.",
      features: [
        "Audit & optimisation technique",
        "Recherche de mots-clés",
        "Contenu optimisé & rédaction",
        "SEO local (fiche Google Business)",
        "Netlinking & autorité de domaine",
        "Suivi des positions & du trafic",
      ],
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

/* ============================================================
   Page « À propos » — reproduction du modèle Framer
   ============================================================ */
export const aboutPage = {
  hero: {
    titleSans: "Qui sommes-nous",
    titleItalic: "Kevio Labs",
  },
  intro: {
    label: "À propos de nous",
    paragraphs: [
      "Chez Kevio Labs, nous transformons des idées ambitieuses en produits digitaux qui performent. Sites, applications, automatisations, publicité, SEO : tout est conçu sur-mesure, jamais à partir de templates.",
      "Notre force, c'est l'exigence. Une équipe qui allie design, code et stratégie pour livrer vite, bien, et créer un impact réel sur votre croissance.",
    ],
  },
  // Section services dépliable (accordéon)
  growth: {
    label: "Construit avec passion",
    headingItalic: "Votre croissance,",
    headingSans: "notre mission",
    cta: "Discutons de votre projet",
    ctaHref: "/contact",
    items: [
      {
        n: "/01",
        icon: "web",
        title: "Développement web",
        text: "Sites vitrines, e-commerce et applications web & mobiles — en CMS ou codés sur-mesure, pensés pour convertir et grandir avec vous.",
        price: "Sur devis",
      },
      {
        n: "/02",
        icon: "automation",
        title: "Automatisation & IA",
        text: "Agents IA et workflows qui travaillent pour vous 24h/24 et automatisent vos tâches à forte valeur ajoutée.",
        price: "Sur devis",
      },
      {
        n: "/03",
        icon: "ads",
        title: "Publicité",
        text: "Campagnes Google, Meta et TikTok Ads pilotées par la donnée pour maximiser votre retour sur investissement.",
        price: "Sur devis",
      },
      {
        n: "/04",
        icon: "seo",
        title: "SEO",
        text: "Référencement technique, contenu et autorité pour vous installer durablement en haut de Google.",
        price: "Sur devis",
      },
    ],
  },
  // Section expertise / savoir-faire
  expertise: {
    label: "Notre expertise",
    headingItalic: "Notre savoir-faire",
    headingSans: "qui évolue sans cesse",
    intro:
      "Quatre domaines, une même exigence. Voici les expertises que nous cultivons pour donner à chaque projet une longueur d'avance.",
    items: [
      {
        n: "/01",
        icon: "web",
        title: "Développement web",
        tag: "Web & App",
        role: "Sites & applications sur-mesure",
        text: "Sites vitrines, e-commerce et applications codés à la main : un code propre, rapide et évolutif, taillé pour convertir et grandir.",
      },
      {
        n: "/02",
        icon: "ads",
        title: "Publicité",
        tag: "Ads",
        role: "Google · Meta · TikTok",
        text: "Des campagnes payantes pilotées par la donnée pour toucher les bonnes personnes au bon moment et maximiser votre retour sur investissement.",
      },
      {
        n: "/03",
        icon: "automation",
        title: "Automatisation",
        tag: "Agents IA",
        role: "Workflows intelligents",
        text: "Des agents IA et automatisations qui travaillent 24h/24 : support client, relances, tâches répétitives — nous libérons votre temps.",
      },
      {
        n: "/04",
        icon: "seo",
        title: "SEO",
        tag: "Référencement",
        role: "Technique & contenu",
        text: "Référencement technique, contenu et autorité pour vous installer durablement en haut de Google et capter un trafic qualifié.",
      },
    ],
  },
};

/* Projets --------------------------------------------------- */
export const projects = {
  label: "Projets récents",
  cta: { label: "Voir tous les projets", href: "/projets" },
  items: [
    {
      slug: "a-la-lyonnaise",
      subtitle: "Création complète du Site Web d'une Franchise de Fast-Food",
      title: "À La Lyonnaise®",
      tags: ["Optimisation SEO", "Développement web"],
      image: "/projects/project-1.webp",
    },
    {
      slug: "offgrid",
      subtitle: "Création Agent IA SAV",
      title: "OFFGRID®",
      tags: ["Automatisation IA"],
      image: "/projects/project-2.webp",
    },
    {
      slug: "arctic-flow",
      subtitle:
        "Création application web de gestion client avec une interface admin et client",
      title: "ARCTIC FLOW®",
      tags: ["UI / UX", "Développement web"],
      image: "/projects/project-3.webp",
    },
  ],
};

/* Fiches projet (case-study) -------------------------------- */
export type ProjectDetail = {
  liveUrl?: string;
  heroImage?: string; // remplace l'image du hero (sinon = image de la carte)
  image?: string; // grande image intercalée dans le corps
  sections: { heading: string; paragraphs: string[]; checklist?: string[] }[];
  // Résultats chiffrés (grands nombres)
  stats?: { value: string; label: string }[];
  // Scores PageSpeed Insights, par appareil
  scores?: { device: string; items: { label: string; value: number }[] }[];
  // Stack technique (tags)
  stack?: string[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "a-la-lyonnaise": {
    liveUrl: "https://a-lalyonnaise.com",
    image: "/projects/a-la-lyonnaise-2.webp",
    sections: [
      {
        heading: "Aperçu du projet",
        paragraphs: [
          "À La Lyonnaise est une franchise de restauration rapide en pleine expansion. La marque avait besoin d'un site à la hauteur de son image : moderne, rapide et capable de transformer les visiteurs en clients. Nous avons repensé toute leur présence web, de la page d'accueil jusqu'au parcours de commande.",
          "L'objectif était double : affirmer une identité visuelle forte et cohérente sur tous les écrans, et générer des commandes ainsi que des visites en restaurant grâce à un référencement local soigné.",
          "Le client était intransigeant sur un point : sa charte graphique devait être parfaitement respectée et présente à chaque écran — couleurs, typographies, logo, ton de la marque — répartie avec justesse et cohérence, sans le moindre écart. Nous l'avons appliquée au détail près, exactement comme il l'attendait.",
          "Le site est aussi un véritable levier de développement du réseau : une section dédiée au recrutement de franchisés met en avant le concept, les chiffres clés et les avantages de l'enseigne, avec un formulaire de candidature intégré pour transformer les visiteurs intéressés en futurs partenaires.",
        ],
      },
      {
        heading: "Conception & développement",
        paragraphs: [
          "Nous avons démarré par des maquettes centrées sur le mobile — l'essentiel du trafic d'une enseigne food vient du téléphone. Chaque écran a été pensé pour aller droit au but : découvrir le menu, trouver le restaurant le plus proche et commander en quelques secondes.",
          "Côté technique, le site est 100 % sur-mesure et codé de A à Z — aucun template : un rendu côté serveur pour un référencement optimal, un score de performance Lighthouse supérieur à 95/100 et un chargement quasi instantané. L'architecture est pensée pour évoluer : ajouter un nouveau restaurant se fait en quelques clics, sans refonte.",
        ],
        checklist: [
          "Site responsive, pensé mobile-first",
          "Parcours de commande simple et rapide",
          "Section « Devenir franchisé » avec formulaire de candidature",
          "Page dédiée par restaurant (adresse, horaires, contact)",
          "Site 100 % sur-mesure et codé de A à Z, rendu serveur (SSR) pour le SEO",
          "Scores PageSpeed de 90 à 100 (mobile & ordinateur), chargement quasi instantané",
          "Architecture évolutive : ajout de restaurants en quelques clics",
          "Optimisation SEO locale et fiches d'établissement",
        ],
      },
      {
        heading: "Résultat",
        paragraphs: [
          "Dès le premier mois, le site a généré plus de 1 500 clics et s'est hissé en tête des recherches sur le nom de la marque. Grâce à un paramétrage SEO irréprochable, la franchise a multiplié par 3 sa visibilité sur les recherches locales.",
          "Un site ultra-rapide qui convertit, une image de marque nette et différenciante, et une présence en ligne solide — de quoi accompagner sereinement l'ouverture de nouveaux points de vente.",
        ],
      },
    ],
    stats: [
      { value: "1 500+", label: "clics le 1er mois" },
      { value: "×3", label: "visibilité sur Google local" },
      { value: "1er", label: "sur son nom dans les recherches" },
    ],
    scores: [
      {
        device: "Mobile",
        items: [
          { label: "Performances", value: 92 },
          { label: "Accessibilité", value: 90 },
          { label: "Bonnes pratiques", value: 100 },
          { label: "SEO", value: 100 },
        ],
      },
      {
        device: "Ordinateur",
        items: [
          { label: "Performances", value: 97 },
          { label: "Accessibilité", value: 90 },
          { label: "Bonnes pratiques", value: 100 },
          { label: "SEO", value: 100 },
        ],
      },
    ],
  },

  offgrid: {
    image: "/projects/offgrid-2.webp",
    sections: [
      {
        heading: "Aperçu du projet",
        paragraphs: [
          "OFFGRID est un agent IA de service après-vente conçu pour répondre automatiquement aux demandes et aux messages des clients — 24h/24, 7j/7, sans temps d'attente. Il comprend la demande, apporte la bonne réponse et oriente chaque client avec précision, comme le ferait votre meilleur conseiller.",
          "Surtout, chaque réponse est entièrement personnalisée : l'agent s'adresse au client par son nom, tient compte de son historique et de sa situation, et rédige des messages naturels et sur-mesure — au point qu'il est impossible de deviner qu'un véritable conseiller humain n'est pas derrière l'écran.",
          "L'objectif : décharger les équipes des questions répétitives, offrir une réponse instantanée et cohérente, et garantir à chaque client d'être pris en charge immédiatement, quelle que soit l'heure.",
          "Là où OFFGRID fait la différence : il sait reconnaître les demandes importantes ou sensibles — litige, urgence, cas complexe — et prévient aussitôt le client qu'un conseiller humain prend le relais, tout en transmettant à l'équipe l'intégralité du contexte de l'échange. Le client n'est jamais laissé sans réponse, et rien d'important ne passe entre les mailles.",
        ],
      },
      {
        heading: "Conception & développement",
        paragraphs: [
          "OFFGRID est entraîné sur vos produits, vos procédures et votre ton de marque, puis connecté à vos canaux (site, e-mail, messagerie). Résultat : des réponses justes, homogènes et parfaitement à votre image, comme si l'équipe répondait elle-même.",
          "Côté technique, l'agent est 100 % sur-mesure : il s'appuie sur votre base de connaissances, répond en temps réel et s'améliore en continu. Un moteur de règles décide précisément de ce qui doit être escaladé à un humain, pour ne jamais laisser passer une demande critique.",
        ],
        checklist: [
          "Réponses automatiques 24/7 aux messages et e-mails clients",
          "Compréhension du contexte et orientation précise de chaque demande",
          "Ton et réponses parfaitement alignés sur votre marque",
          "Détection des demandes importantes → transfert à un conseiller humain",
          "Le client est prévenu : « un conseiller prend le relais », avec le contexte transmis à l'équipe",
          "Connecté à vos canaux (site, e-mail, messagerie) et à votre base de connaissances",
          "100 % sur-mesure, entraîné sur vos produits et vos procédures",
        ],
      },
      {
        heading: "Résultat",
        paragraphs: [
          "Un service après-vente disponible en permanence, des clients rassurés et mieux orientés, des équipes déchargées des tâches répétitives — et zéro demande importante oubliée. OFFGRID transforme le SAV en véritable atout de satisfaction.",
        ],
      },
    ],
    stats: [
      { value: "24/7", label: "disponible, sans temps d'attente" },
      { value: "< 30s", label: "temps de réponse moyen" },
      { value: "~70%", label: "des demandes traitées sans humain" },
    ],
    stack: [
      "LLM (GPT-4 class)",
      "RAG · base de connaissances vectorielle",
      "Moteur de règles d'escalade",
      "API multi-canaux (site, e-mail, messagerie)",
      "Webhooks temps réel",
    ],
  },

  "arctic-flow": {
    heroImage: "/projects/arctic-flow-2.webp",
    image: "/projects/project-3.webp",
    sections: [
      {
        heading: "Aperçu du projet",
        paragraphs: [
          "ARCTIC FLOW est l'application web de gestion sur-mesure de l'entreprise de climatisation du même nom. Codée de A à Z spécifiquement pour elle, elle centralise absolument tout : facturation, suivi des interventions, communication client, suivi des chiffres, maintenance… Un seul outil pour piloter toute l'activité, de bout en bout.",
          "Deux espaces distincts et sécurisés cohabitent : une interface admin pour gérer les clients, les interventions et l'entreprise ; une interface client pour consulter les services souscrits, les factures et l'historique — chacun avec ses propres identifiants.",
          "Fini les fichiers éparpillés et les outils qui ne se parlent pas : tout est réuni, à jour et accessible en un clic, pour l'équipe comme pour le client.",
        ],
      },
      {
        heading: "Conception & développement",
        paragraphs: [
          "Nous avons conçu ARCTIC FLOW autour du quotidien réel de l'entreprise : chaque écran répond à un besoin concret, du devis à la maintenance, en passant par le suivi des chiffres. L'interface admin donne une vue d'ensemble et le contrôle total ; l'interface client apporte transparence et autonomie.",
          "Côté technique, l'application est 100 % sur-mesure et codée de A à Z : authentification sécurisée avec rôles et permissions, données synchronisées en temps réel, rendu côté serveur pour des performances élevées, et une architecture évolutive prête à accompagner la croissance de l'entreprise.",
        ],
        checklist: [
          "Interface admin : gestion des clients, interventions et équipes",
          "Interface client : services souscrits, factures et historique",
          "Comptes sécurisés, identifiants propres à chaque utilisateur",
          "Facturation et devis intégrés",
          "Suivi des interventions et planning de maintenance",
          "Communication client centralisée (notifications, messages)",
          "Tableau de bord et suivi des chiffres en temps réel",
          "100 % sur-mesure et codé de A à Z, architecture évolutive",
        ],
      },
      {
        heading: "Résultat",
        paragraphs: [
          "Une entreprise pilotée depuis un seul endroit, des clients autonomes et informés, et un gain de temps considérable sur toute la gestion quotidienne — de la facture à la maintenance. ARCTIC FLOW remplace une pile d'outils par une plateforme unique, claire et évolutive.",
        ],
      },
    ],
    stats: [
      { value: "2", label: "interfaces sécurisées (admin & client)" },
      { value: "6", label: "modules métier réunis en un seul outil" },
      { value: "24/7", label: "données synchronisées en temps réel" },
    ],
    stack: [
      "Next.js · React",
      "TypeScript",
      "Base de données PostgreSQL",
      "Authentification, rôles & permissions",
      "Synchronisation temps réel",
      "Rendu serveur (SSR)",
    ],
  },
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
  titleItalic: "Ils nous font confiance",
  titleSans: "et grandissent avec Kevio Labs",
  items: [
    {
      quote:
        "Le site est encore plus beau et abouti que ce que j'attendais. Il attire aussi bien les clients que les candidats franchisés. Merci pour votre professionnalisme du début à la fin.",
      name: "Abubakr Bouziane",
      company: "Fondateur, À La Lyonnaise®",
    },
    {
      quote:
        "Leur agent IA répond à nos clients comme un vrai membre de l'équipe, 24h/24. Personnalisé, humain, et il sait quand nous alerter. Bluffant. Merci pour votre disponibilité et votre suivi sans faille.",
      name: "Yanis Moreau",
      company: "Responsable SAV, OFFGRID®",
    },
    {
      quote:
        "Ils nous ont codé sur-mesure l'application qui fait tourner toute l'entreprise : facturation, suivi, clients. On ne pourrait plus s'en passer. Merci pour votre fiabilité, on vous fait confiance les yeux fermés.",
      name: "Marc Delaunay",
      company: "Gérant, ARCTIC FLOW®",
    },
    {
      quote:
        "Honnêtement, je n'y croyais plus trop à la pub en ligne… et là nos campagnes tournent vraiment. Je sais exactement où part chaque euro et ce qu'il nous ramène. Ça change tout au quotidien !",
      name: "Camille Perrin",
      company: "Responsable marketing digital, Studio Néroli",
    },
    {
      quote:
        "They totally got the vibe of our brand from the very first call. Clients keep telling me the site looks stunning — honestly, exactly what I was hoping for.",
      name: "Emma Whitmore",
      company: "Co-founder, Whitmore Studio",
    },
    {
      quote:
        "What really impressed me is that they took the time to understand our business before pitching a single idea. You can tell you're working with people who genuinely care, not just another vendor.",
      name: "James Callahan",
      company: "Head of Operations, Northbridge Group",
    },
  ],
};

/* FAQ ------------------------------------------------------- */
export const faq = {
  label: "FAQ",
  titleItalic: "Questions",
  titleSans: "fréquentes",
  items: [
    {
      q: "Combien de temps prend la création d'un site web ?",
      a: "En moyenne, un site vitrine est livré en 1 à 4 semaines selon sa complexité, un site e-commerce est livré entre 2 à 6 semaines selon sa complexité.",
    },
    {
      q: "Quels sont vos tarifs ?",
      a: "Nos tarifs dépendent de la complexité du projet. Nous proposons un appel découverte gratuit pour comprendre vos besoins et vous fournir un devis sur-mesure transparent.",
    },
    {
      q: "Est-ce que vous gérez aussi la publicité digitale ?",
      a: "Oui, nous gérons vos campagnes Google Ads, Meta Ads et TikTok Ads. De la stratégie à l'optimisation, nous maximisons votre ROI publicitaire.",
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
      a: "Oui, 100%. Le code source, le nom de domaine, les contenus et les accès vous appartiennent entièrement. Vous n'êtes lié à aucun abonnement ni dépendance technique. Si vous souhaitez changer de prestataire un jour, vous repartez avec tout.",
    },
    {
      q: "Quel genre d'applications développez-vous ?",
      a: "Nous développons tout type d'applications : applications mobiles iOS et Android, applications web (PWA), plateformes web sur mesure, portails clients, espaces de gestion, outils métier internes et dashboards. Quel que soit votre besoin, nous concevons une solution taillée pour votre activité.",
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
  // Section Contact (design fidèle au thème) : carte titre + carte formulaire
  headingSans: "Parlons de",
  headingItalic: "votre prochaine idée",
  formHeading: "Remplissez le formulaire ci-dessous",
  fields: {
    name: { label: "Votre nom", placeholder: "Veuillez saisir votre nom complet" },
    email: { label: "Votre email", placeholder: "Saisissez votre adresse e-mail" },
    message: {
      label: "Votre projet",
      placeholder: "Parlez-nous de votre projet",
    },
  },
  submit: "Envoyer le message",
  // Formulaire de contact détaillé (2 sections)
  form: {
    title: "Nous contacter",
    section1: "Informations personnelles",
    section2: "Votre projet",
    fields: {
      name: {
        label: "Prénom & Nom",
        placeholder: "Jean Dupont",
        required: true,
      },
      email: { label: "Email", placeholder: "jean@exemple.com", required: true },
      phone: {
        label: "Téléphone",
        placeholder: "+33 6 00 00 00 00",
        required: false,
      },
      company: {
        label: "Entreprise",
        placeholder: "Nom de votre entreprise",
        required: false,
      },
      projectType: {
        label: "Type de projet",
        required: true,
        placeholder: "Sélectionnez...",
        options: [
          "Site Web",
          "Publicité Digitale",
          "Automatisation IA",
          "SEO & Référencement",
          "Tout à la fois",
        ],
      },
      budget: {
        label: "Budget estimé",
        required: false,
        placeholder: "Sélectionnez...",
        options: [
          "< 2 000 €",
          "2 000 — 5 000 €",
          "5 000 — 10 000 €",
          "> 10 000 €",
        ],
      },
      message: {
        label: "Message / Présentation",
        placeholder: "Décrivez votre projet, vos objectifs et vos attentes...",
        required: false,
      },
    },
    submit: "Envoyer ma demande",
    rgpd: "En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité.",
    success: "Message envoyé avec succès ! Nous vous répondons sous 24h.",
  },
};

/* Footer ---------------------------------------------------- */
export const footer = {
  // Colonne 1
  locationLabel: "Localisation",
  address: ["Basés à Lyon", "Nous opérons partout, à l'international"],
  contactLabel: "Contact",
  contactCta: { label: "Écrivez-nous", href: "/contact" },
  contactNote: "Réponse sous 24h",
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
    { label: "Instagram", href: "https://www.instagram.com/keviolabs" },
    { label: "X (Twitter)", href: "https://x.com/keviolabs" },
    { label: "TikTok", href: "https://www.tiktok.com/@kevio.labs" },
  ],
  // Liens légaux (barre du bas)
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/confidentialite" },
    { label: "CGV", href: "/cgv" },
  ],
  // Bas de page
  copyright: "Tous droits réservés.",
  backToTop: "Retour en haut de page",
};
