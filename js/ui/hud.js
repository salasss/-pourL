/* ============================================================
   HUD — barre du haut : chapitre, jauge de complicité, menu
   ============================================================ */

import { etat, palier, ratioComplicite } from "../moteur/etat.js";
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

