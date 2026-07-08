# Kevio — site d'agence

Site multi-pages inspiré du thème Framer **Agenciy**, reconstruit proprement en
Next.js pour être 100 % modifiable (avec Claude Code) et déployable sur Vercel.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (thème sombre, tokens dans `app/globals.css`)
- **Framer Motion** — animations d'entrée, hover, cartes empilées
- **GSAP ScrollTrigger** — révélation de texte au scroll (section « À propos »)
- **Lenis** — smooth scroll (Chrome + Safari)

## Démarrer

```bash
npm run dev     # développement (http://localhost:3000)
npm run build   # build de production
npm start       # serveur de production
```

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| **Tous les textes, listes, liens** | `lib/content.ts` ← commence ici |
| Couleurs / typo | `app/globals.css` (variables `:root`) |
| Une section de l'accueil | `components/home/*.tsx` |
| L'ordre des sections | `app/page.tsx` |
| La navigation / le footer | `components/Nav.tsx`, `components/Footer.tsx` |
| Une page | `app/<page>/page.tsx` |

## Images

Dépose tes fichiers dans `public/projects`, `public/team`, `public/blog`.
Les chemins attendus sont dans `lib/content.ts` (champ `image`).
Tant qu'une image est absente, un dégradé placeholder s'affiche automatiquement
(composant `components/Media.tsx`) — rien ne casse.

## Objet 3D du hero

Placeholder CSS (`components/GlossyOrb.tsx`). Pour mettre ton propre rendu,
remplace-le par une image/vidéo via `<Media/>` dans `components/home/Hero.tsx`.

## Formulaire de contact

`components/ContactSection.tsx` ouvre le client mail (mailto). Pour recevoir les
messages sur un vrai backend, branche un service type Formspree ou Resend.

## Déployer sur Vercel

1. Pousser ce dossier sur un repo GitHub.
2. Sur vercel.com : **New Project → importer le repo**. Next.js est détecté
   automatiquement, aucun réglage requis.
3. Deploy. ✅
