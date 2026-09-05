/* ============================================================
   REGISTRE DES CHAPITRES
   ============================================================ */

import ch00 from "./ch00-prologue.js";
import ch01 from "./ch01-le-collier.js";
import ch02 from "./ch02-la-cafeteria.js";
import ch03 from "./ch03-7-mai.js";
import ch04 from "./ch04-annee-grise.js";
import ch05 from "./ch05-la-distance.js";
import reve01 from "./reve01-le-reve.js";
import cendres01 from "./cendres01-la-veilleuse.js";

/** Chapitres écrits et jouables. */
export const CHAPITRES = { ch00, ch01, ch02, ch03, ch04, ch05, reve01, cendres01 };

/** L'ordre du jeu. `image` sert de vignette sur le mur des chapitres. */
export const ORDRE = [
  { id: "ch00", numero: "0", titre: "Trois fois",       sousTitre: "Avant qu'elle te voie",       image: "assets/cg/cg-premiere-fois.webp" },
  { id: "ch01", numero: "1", titre: "Le collier",       sousTitre: "La première vraie phrase",    image: "assets/cg/cg-le-collier.webp" },
  { id: "ch02", numero: "2", titre: "La cafétéria",     sousTitre: "L'Instagram, le biscuit",     image: "assets/cg/cg-le-biscuit.webp" },
  { id: "ch03", numero: "3", titre: "7 mai 2022",       sousTitre: "La placette",                 image: "assets/cg/cg-placette-7-mai.webp" },
  { id: "ch04", numero: "4", titre: "L'année grise",    sousTitre: "Le visa, le restaurant",      image: "assets/decors/resto-soir.webp" },
  { id: "ch05", numero: "5", titre: "La distance",      sousTitre: "Perpignan — aujourd'hui",     image: "assets/cg/cg-appel-video.webp" },
  { id: "reve01", numero: "✦", titre: "Le rêve",         sousTitre: "Cette nuit-là", cendres: true },
  { id: "cendres01", numero: "✦", titre: "La Veilleuse", sousTitre: "La suite du rêve", cendres: true,
    disponibleLe: "2026-10-01" }
];

export function chapitreParId(id) { return CHAPITRES[id] || null; }

export function metaParId(id) { return ORDRE.find(c => c.id === id) || null; }

/** Un chapitre encore scellé par une date ? (la suite du rêve attend le 1er octobre) */
export function scelleParDate(meta) {
  return !!(meta && meta.disponibleLe &&
            Date.now() < Date.parse(meta.disponibleLe + "T00:00:00"));
}

/** Accessible si c'est le premier, que le précédent est fini, et que la date est passée. */
export function estAccessible(id, chapitresFinis) {
  const meta = metaParId(id);
  if (scelleParDate(meta)) return false;
  const i = ORDRE.findIndex(c => c.id === id);
  if (i <= 0) return true;
  return chapitresFinis.includes(ORDRE[i - 1].id);
}
