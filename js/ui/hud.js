/* ============================================================
   HUD — barre du haut : chapitre, jauge de complicité, menu
   ============================================================ */

import { etat, palier, ratioComplicite, palierRumeur, LEXIQUE_MAX } from "../moteur/etat.js";
import { CARTES } from "../donnees/cartes.js";
import { urlOuPlaceholder } from "../moteur/placeholder.js";
import { jouerSfx } from "../moteur/audio.js";

const $ = id => document.getElementById(id);
const els = {};

export function initHud(surMenu) {
  els.chapitre = $("hud-chapitre");
  els.rect     = $("coeur-rect");
  els.coeur    = $("hud-coeur");
  els.palier   = $("hud-palier");
  els.cendres  = $("hud-cendres");
  els.lexique  = $("hud-lexique");
  els.rumeur   = $("hud-rumeur");
  els.toast    = $("toast");
  els.toastImg = $("toast-img");
  els.toastTit = $("toast-titre");
  $("btn-menu").addEventListener("click", surMenu);
  majHud();
}

export function titreChapitre(texte) {
  els.chapitre.textContent = texte || "";
}

export function majHud({ anime = false } = {}) {
  // Deux jauges selon la peau : le cœur dans les chapitres réels,
  // le lexique + la rumeur dans l'arc Cendres.
  const cendres = document.documentElement.classList.contains("peau-cendres");
  els.coeur.hidden = cendres;
  els.cendres.hidden = !cendres;

  if (cendres) {
    els.lexique.textContent =
      "●".repeat(etat.lexique) + "○".repeat(Math.max(0, LEXIQUE_MAX - etat.lexique));
    els.rumeur.textContent = palierRumeur();
    if (anime) {
      els.cendres.classList.remove("hud__cendres--bat");
      void els.cendres.offsetWidth;
      els.cendres.classList.add("hud__cendres--bat");
      jouerSfx("coeur");
    }
    return;
  }

  const r = ratioComplicite();
  // le cœur se remplit par le bas
  els.rect.setAttribute("y", String(22 - 22 * r));
  els.rect.setAttribute("height", String(22 * r));
  els.palier.textContent = palier();
  if (anime) {
    els.coeur.classList.remove("hud__coeur--bat");
    void els.coeur.offsetWidth;
    els.coeur.classList.add("hud__coeur--bat");
    jouerSfx("coeur");
  }
}

let minuteurToast;
export async function toastCarte(idCarte) {
  const c = CARTES[idCarte];
  if (!c) return;
  els.toastImg.src = await urlOuPlaceholder(c.src, c.titre, "3/4");
  els.toastTit.textContent = c.titre;
  els.toast.hidden = false;
  jouerSfx("carte");
  clearTimeout(minuteurToast);
  minuteurToast = setTimeout(() => {
    els.toast.style.transition = "opacity 400ms";
    els.toast.style.opacity = "0";
    setTimeout(() => {
      els.toast.hidden = true;
      els.toast.style.opacity = "";
      els.toast.style.transition = "";
    }, 400);
  }, 2600);
}

export function afficherHud(visible) {
  $("hud").hidden = !visible;
}

