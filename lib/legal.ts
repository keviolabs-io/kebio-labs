/* ============================================================
   Pages légales — Mentions légales, Confidentialité (RGPD), CGV.
   ⚠️ Modèles standards à relire et compléter (placeholders [À COMPLÉTER]).
   Ne constitue pas un conseil juridique.
   ============================================================ */

export type LegalSection = {
  heading?: string;
  paragraphs?: string[];
  items?: string[];
};

export type LegalDoc = {
  title: string;
  updated: string;
  sections: LegalSection[];
};

const UPDATED = "Juillet 2026";

/* -------------------- Mentions légales -------------------- */
export const mentionsLegales: LegalDoc = {
  title: "Mentions légales",
  updated: UPDATED,
  sections: [
    {
      heading: "Éditeur du site",
      paragraphs: [
        "Le présent site est édité par Kevio Labs.",
        "Statut juridique : [À COMPLÉTER : ex. micro-entreprise / SASU / EURL].",
        "Numéro SIRET : [À COMPLÉTER].",
        "Adresse : [À COMPLÉTER : adresse de l'entreprise], Lyon, France.",
        "Email : [À COMPLÉTER : email de contact].",
        "TVA intracommunautaire : [À COMPLÉTER si applicable, sinon « TVA non applicable, art. 293 B du CGI »].",
      ],
    },
    {
      heading: "Directeur de la publication",
      paragraphs: [
        "Le directeur de la publication est [À COMPLÉTER : prénom et nom du responsable].",
      ],
    },
    {
      heading: "Hébergement",
      paragraphs: [
        "Le site est hébergé par Vercel Inc.",
        "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
        "Site : vercel.com",
      ],
    },
    {
      heading: "Propriété intellectuelle",
      paragraphs: [
        "L'ensemble des éléments présents sur ce site (textes, images, logos, graphismes, mise en page, code) est la propriété de Kevio Labs, sauf mention contraire, et est protégé par le droit de la propriété intellectuelle.",
        "Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite.",
      ],
    },
    {
      heading: "Responsabilité",
      paragraphs: [
        "Kevio Labs s'efforce d'assurer l'exactitude des informations diffusées sur ce site, mais ne saurait être tenue responsable des erreurs, omissions ou d'une indisponibilité temporaire.",
        "Les liens éventuels vers des sites tiers n'engagent pas la responsabilité de Kevio Labs quant à leur contenu.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Pour toute question relative au site, vous pouvez nous contacter via le formulaire de la page Contact.",
      ],
    },
  ],
};

/* -------------------- Politique de confidentialité -------------------- */
export const confidentialite: LegalDoc = {
  title: "Politique de confidentialité",
  updated: UPDATED,
  sections: [
    {
      paragraphs: [
        "Kevio Labs accorde une grande importance à la protection de vos données personnelles. Cette politique explique quelles données nous collectons, pourquoi, et quels sont vos droits, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.",
      ],
    },
    {
      heading: "Responsable du traitement",
      paragraphs: [
        "Le responsable du traitement des données est Kevio Labs — [À COMPLÉTER : statut et coordonnées]. Pour toute question, contactez-nous à [À COMPLÉTER : email de contact].",
      ],
    },
    {
      heading: "Données que nous collectons",
      paragraphs: [
        "Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de contact :",
      ],
      items: [
        "Prénom & nom",
        "Adresse email",
        "Numéro de téléphone (facultatif)",
        "Nom de votre entreprise (facultatif)",
        "Type de projet et budget estimé",
        "Le contenu de votre message",
      ],
    },
    {
      heading: "Pourquoi nous collectons ces données",
      paragraphs: [
        "Ces informations sont utilisées exclusivement pour répondre à votre demande, échanger avec vous sur votre projet et, le cas échéant, vous établir un devis. Elles ne sont jamais vendues ni cédées à des tiers à des fins commerciales.",
      ],
    },
    {
      heading: "Base légale",
      paragraphs: [
        "Le traitement repose sur votre consentement (envoi du formulaire) et sur les mesures précontractuelles prises à votre demande.",
      ],
    },
    {
      heading: "Destinataires et sous-traitants",
      paragraphs: [
        "Vos données sont accessibles uniquement à Kevio Labs. Pour fonctionner, le site s'appuie sur des prestataires techniques (sous-traitants au sens du RGPD) :",
      ],
      items: [
        "Vercel Inc. — hébergement du site (États-Unis).",
        "Resend — acheminement des emails du formulaire de contact (États-Unis).",
      ],
    },
    {
      heading: "Transferts hors Union européenne",
      paragraphs: [
        "Certains de nos prestataires étant situés aux États-Unis, vos données peuvent y être transférées. Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types de la Commission européenne).",
      ],
    },
    {
      heading: "Durée de conservation",
      paragraphs: [
        "Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, puis au maximum 3 ans à compter de notre dernier échange, à des fins de suivi commercial. Vous pouvez demander leur suppression à tout moment.",
      ],
    },
    {
      heading: "Vos droits",
      paragraphs: [
        "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Pour les exercer, écrivez-nous à [À COMPLÉTER : email de contact].",
        "Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "Ce site n'utilise pas de cookies de suivi ni de traceurs publicitaires. Seuls des éléments techniques strictement nécessaires au bon fonctionnement du site peuvent être utilisés.",
      ],
    },
  ],
};

/* -------------------- Conditions Générales de Vente -------------------- */
export const cgv: LegalDoc = {
  title: "Conditions Générales de Vente",
  updated: UPDATED,
  sections: [
    {
      heading: "Objet",
      paragraphs: [
        "Les présentes conditions générales de vente (CGV) régissent les prestations de services proposées par Kevio Labs : création de sites web et d'applications, publicité digitale, automatisation & intelligence artificielle, et référencement (SEO). Toute commande implique l'acceptation sans réserve des présentes CGV.",
      ],
    },
    {
      heading: "Devis et commande",
      paragraphs: [
        "Chaque prestation fait l'objet d'un devis personnalisé et gratuit. La commande est considérée comme ferme dès la validation du devis par le client (signature ou accord écrit) et, le cas échéant, le versement de l'acompte prévu.",
      ],
    },
    {
      heading: "Prix et modalités de paiement",
      paragraphs: [
        "Les prix sont indiqués en euros et précisés sur le devis. Sauf mention contraire, un acompte de [À COMPLÉTER : ex. 30 %] est demandé à la commande, le solde étant dû à la livraison. Les modalités et échéances de paiement figurent sur le devis.",
        "Tout retard de paiement pourra entraîner des pénalités dans les conditions prévues par la loi.",
      ],
    },
    {
      heading: "Délais d'exécution",
      paragraphs: [
        "Les délais sont communiqués à titre indicatif sur le devis et dépendent de la fourniture par le client des éléments nécessaires (contenus, accès, validations). Un retard raisonnable ne peut donner lieu à annulation ou indemnité.",
      ],
    },
    {
      heading: "Obligations du client",
      paragraphs: [
        "Le client s'engage à fournir en temps utile l'ensemble des informations, contenus et accès nécessaires à la réalisation de la prestation, et à collaborer activement (retours, validations).",
      ],
    },
    {
      heading: "Propriété intellectuelle et livraison",
      paragraphs: [
        "Sauf accord contraire, les livrables (code, site, application, créations) deviennent la propriété pleine et entière du client après paiement intégral. Le client dispose alors du code source, du nom de domaine, des contenus et des accès, sans dépendance technique ni abonnement imposé.",
        "Kevio Labs se réserve le droit de mentionner la réalisation dans son portfolio, sauf demande contraire du client.",
      ],
    },
    {
      heading: "Responsabilité",
      paragraphs: [
        "Kevio Labs est tenue à une obligation de moyens. Sa responsabilité ne saurait être engagée pour les dommages indirects, ni pour les dysfonctionnements liés à des prestataires tiers ou à une utilisation non conforme des livrables.",
      ],
    },
    {
      heading: "Confidentialité",
      paragraphs: [
        "Kevio Labs s'engage à conserver confidentielles toutes les informations transmises par le client dans le cadre de la prestation.",
      ],
    },
    {
      heading: "Droit applicable et litiges",
      paragraphs: [
        "Les présentes CGV sont soumises au droit français. En cas de litige, les parties rechercheront une solution amiable avant toute action judiciaire. À défaut, le litige sera porté devant les tribunaux compétents.",
      ],
    },
  ],
};

export const legalDocs = { mentionsLegales, confidentialite, cgv };
