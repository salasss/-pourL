/* ============================================================
   AUDIO — musique de fond et bruitages.
   Démarre muet tant que l'utilisateur n'a pas interagi
   (politique d'autoplay des navigateurs).
   ============================================================ */

import { etat } from "./etat.js";
import { MUSIQUES, BRUITAGES } from "../donnees/musiques.js";

let debloque = false;
let courante = null;      // { id, audio }
const cacheSfx = new Map();

export function initAudio() {
  const debloquer = () => {
    debloque = true;
    if (courante) courante.audio.play().catch(() => {});
    window.removeEventListener("pointerdown", debloquer);
    window.removeEventListener("keydown", debloquer);
  };
  window.addEventListener("pointerdown", debloquer, { once: true });
  window.addEventListener("keydown", debloquer, { once: true });

  document.addEventListener("visibilitychange", () => {
    if (!courante) return;
    if (document.hidden) courante.audio.pause();
    else if (debloque) courante.audio.play().catch(() => {});
  });
}

function fondre(audio, de, vers, duree) {
  return new Promise(resolve => {
    const debut = performance.now();
    const pas = maintenant => {
      const t = Math.min(1, (maintenant - debut) / duree);
      audio.volume = Math.max(0, Math.min(1, de + (vers - de) * t));
      if (t < 1) requestAnimationFrame(pas);
      else resolve();
    };
    requestAnimationFrame(pas);
  });
}

const dispo = new Map();

/** Vérifie une fois qu'un fichier audio existe. Tant qu'il n'est pas
 *  fourni, le jeu reste simplement silencieux. */
async function existe(src) {
  if (dispo.has(src)) return dispo.get(src);
  let ok = false;
  try { ok = (await fetch(src, { method: "HEAD" })).ok; } catch { ok = false; }
  dispo.set(src, ok);
  return ok;
}

export async function jouerMusique(id, { fadeIn = 1600 } = {}) {
  if (courante && courante.id === id) return;
  const def = MUSIQUES[id];
  if (!def) return;
  if (!(await existe(def.src))) return;

  const ancienne = courante;
  const audio = new Audio(def.src);
  audio.loop = true;
  audio.volume = 0;
  audio.preload = "auto";
  courante = { id, audio };

  // Adoucit la boucle : la plupart des morceaux libres de droits se terminent
  // par un fondu, ce qui donne une coupure sèche au redémarrage.
  const FONDU = 2;
  audio.addEventListener("timeupdate", () => {
    if (!courante || courante.audio !== audio) return;
    const cible = etat.reglages.musique;
    const d = audio.duration;
    if (!isFinite(d) || d < FONDU * 3) return;
    const reste = d - audio.currentTime;
    if (reste < FONDU)                audio.volume = cible * (reste / FONDU);
    else if (audio.currentTime < FONDU) audio.volume = cible * (audio.currentTime / FONDU);
    else                              audio.volume = cible;
  });

  if (debloque) {
    try { await audio.play(); } catch { return; }
  }
  if (ancienne) {
    fondre(ancienne.audio, ancienne.audio.volume, 0, 900)
      .then(() => ancienne.audio.pause());
  }
  await fondre(audio, 0, etat.reglages.musique, fadeIn);
}

export async function arreterMusique({ fadeOut = 1200 } = {}) {
  if (!courante) return;
  const { audio } = courante;
  courante = null;
  await fondre(audio, audio.volume, 0, fadeOut);
  audio.pause();
}

export function volumeMusique(v) {
  etat.reglages.musique = v;
  if (courante) courante.audio.volume = v;
}

export function jouerSfx(id) {
  const def = BRUITAGES[id];
  if (!def || !debloque) return;
  if (dispo.get(def.src) === false) return;
  if (!dispo.has(def.src)) {
    // premier appel : on sonde, et on joue dès que la sonde confirme
    existe(def.src).then(ok => { if (ok) jouerSfx(id); });
    return;
  }
  let a = cacheSfx.get(id);
  if (!a) { a = new Audio(def.src); cacheSfx.set(id, a); }
  a.currentTime = 0;
  a.volume = etat.reglages.bruitages;
  a.play().catch(() => {});
}
