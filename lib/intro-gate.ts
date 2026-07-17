/* ============================================================
   Portail d'intro : les vidéos de fond (HeroVideo) attendent la fin du
   rideau d'ouverture avant de se charger, pour laisser toute la bande
   passante à la vidéo de l'intro (démarrage net, sans lapse).
   ============================================================ */

let resolved = false;
const waiters = new Set<() => void>();

function resolve() {
  if (resolved) return;
  resolved = true;
  waiters.forEach((w) => w());
  waiters.clear();
}

/** Appelé par l'intro quand le rideau s'ouvre (ou si aucune intro ne joue). */
export function markIntroDone() {
  resolve();
}

/** Exécute `cb` quand l'intro est finie (ou tout de suite si déjà finie). */
export function whenIntroDone(cb: () => void) {
  if (resolved) {
    cb();
    return;
  }
  waiters.add(cb);
}

// Garde-fou dur : on ne bloque jamais les vidéos indéfiniment.
if (typeof window !== "undefined") {
  setTimeout(resolve, 10000);
}
