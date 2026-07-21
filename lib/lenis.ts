import type Lenis from "lenis";

// Référence partagée vers l'instance Lenis (posée par SmoothScroll),
// utilisée pour défiler vers une ancre en respectant le smooth scroll.
let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}
export function getLenis() {
  return instance;
}
