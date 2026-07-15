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
      slug: "a-la-lyonnaise",
      subtitle: "Création complète du Site Web d'une Franchise de Fast-Food",
      title: "À La Lyonnaise®",
      tags: ["Optimisation SEO", "Développement web"],
      image: "/projects/project-1.webp",
    },
    {
      slug: "offgrid",
      subtitle: "Création Agent IA SAV",
      title: "OFFGRID",
      tags: ["Automatisation IA"],
      image: "/projects/project-2.webp",
    },
    {
      slug: "arctic-flow",
      subtitle:
        "Création application web de gestion client avec une interface admin et client",
      title: "ARCTIC FLOW",
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
          "Score Lighthouse 95+/100 et chargement quasi instantané",
          "Architecture évolutive : ajout de restaurants en quelques clics",
          "Optimisation SEO locale et fiches d'établissement",
        ],
      },
      {
        heading: "Résultat",
        paragraphs: [
          "Une image de marque nette et différenciante, un site rapide qui convertit, et une visibilité renforcée sur les recherches locales — de quoi accompagner sereinement l'ouverture de nouveaux points de vente.",
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
        "Kevio Labs a transformé notre présence en ligne. Notre nouveau site convertit trois fois plus qu'avant.",
      name: "Camille Roche",
      company: "Fondatrice, Nova",
    },
    {
      quote:
        "Réactifs, précis et vraiment à l'écoute. Le projet a été livré dans les temps et au-delà de nos attentes.",
      name: "Yanis Belkacem",
      company: "CEO, Flux",
    },
    {
      quote:
        "Leur agent IA gère désormais 70 % de notre support client. Un gain de temps énorme au quotidien.",
      name: "Marie Lefèvre",
      company: "CMO, Atlas",
    },
    {
      quote:
        "Des campagnes enfin rentables. On sait exactement où va chaque euro et ce qu'il nous rapporte.",
      name: "Thomas Girard",
      company: "Fondateur, Loop",
    },
    {
      quote:
        "Un design qui nous démarque vraiment de la concurrence. Nos clients le remarquent tout de suite.",
      name: "Sarah Nguyen",
      company: "Directrice, Bloom",
    },
    {
      quote:
        "Du sur-mesure de bout en bout. On a enfin un partenaire qui comprend nos enjeux business.",
      name: "Karim Haddad",
      company: "CEO, Vireo",
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
      q: "Combien de temps prend la création d'un site ?",
      a: "En moyenne 1 à 4 semaines pour un site vitrine, 2 à 6 semaines pour un e-commerce, selon la complexité du projet.",
    },
    {
      q: "Quels sont vos tarifs ?",
      a: "Ils dépendent de votre projet. On propose un premier échange gratuit pour cerner vos besoins et vous envoyer un devis clair et transparent.",
    },
    {
      q: "Gérez-vous aussi la publicité digitale ?",
      a: "Oui — Google, Meta et TikTok Ads, de la stratégie à l'optimisation, pour maximiser votre retour sur investissement.",
    },
    {
      q: "Qu'est-ce qu'un agent IA peut m'apporter ?",
      a: "Il travaille pour vous 24h/24 : réponses clients, qualification de leads, automatisation de tâches. Vous gagnez du temps et des conversions.",
    },
    {
      q: "Serai-je propriétaire de mon site ?",
      a: "Oui, à 100 %. Code source, nom de domaine, contenus et accès vous appartiennent — sans abonnement ni dépendance technique.",
    },
    {
      q: "Proposez-vous un suivi après la livraison ?",
      a: "Bien sûr : rapports de performance, optimisations régulières et support réactif pour faire durer les résultats.",
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
