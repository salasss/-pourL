/* ============================================================
   DIALOGUE — boîte de texte, machine à écrire, choix
   ============================================================ */

import { etat, dejaLu, marquerLu } from "../moteur/etat.js";
import { jouerSfx } from "../moteur/audio.js";

const $ = id => document.getElementById(id);
const els = {};

export function initDialogue() {
  els.boite    = $("boite");
  els.nom      = $("boite-nom");
  els.texte    = $("boite-texte");
  els.suite    = $("boite-suite");
  els.choix    = $("choix");
  els.question = $("choix-question");
  els.liste    = $("choix-liste");
  els.avancer  = $("avancer");
}

/* ---------- attente d'une interaction ---------- */

let resolveurClic = null;

function surInteraction(e) {
  // un écran (menu, galerie, titre) est ouvert : la scène ne réagit pas
  const ec = document.getElementById("ecran");
  if (ec && !ec.hidden) return;
  if (e.type === "keydown") {
    if (!["Enter", " ", "Spacebar"].includes(e.key)) return;
    if (document.activeElement && document.activeElement.tagName === "BUTTON"
        && document.activeElement !== els.avancer) return;
    e.preventDefault();
  } else if (e.target && e.target.closest) {
    // clic : le HUD, les choix et les fenêtres par-dessus ne font pas avancer
    if (e.target.closest(".hud, .choix, .carte-detail")) return;
  }
  if (resolveurClic) {
    const r = resolveurClic;
    resolveurClic = null;
    jouerSfx("clic");
    r();
  }
}

export function brancherInteractions() {
  // On écoute sur toute la scène : la boîte de dialogue (z 25) et les
  // illustrations plein écran (z 30) passent au-dessus du calque d'avance,
  // un clic dessus doit quand même faire avancer le récit.
  document.getElementById("scene").addEventListener("click", surInteraction);
  document.addEventListener("keydown", surInteraction);
}

/** Attend un clic ou Espace/Entrée. */
export function attendreClic() {
  return new Promise(r => { resolveurClic = r; });
}

/* ---------- machine à écrire ---------- */

let annuleFrappe = null;

function ecrire(texte) {
  return new Promise(resolve => {
    const vitesse = etat.reglages.vitesseTexte;
    els.texte.textContent = "";
    els.suite.classList.remove("boite__suite--visible");

    if (vitesse <= 0) {
      els.texte.textContent = texte;
      els.suite.classList.add("boite__suite--visible");
      return resolve(true);
    }

    let i = 0;
    let fini = false;
    const tout = () => {
      if (fini) return;
      fini = true;
      clearTimeout(minuteur);
      els.texte.textContent = texte;
      els.suite.classList.add("boite__suite--visible");
      annuleFrappe = null;
      resolve(false);            // false = l'utilisateur a coupé la frappe
    };
    annuleFrappe = tout;

    let minuteur;
    const pas = () => {
      if (fini) return;
      i++;
      els.texte.textContent = texte.slice(0, i);
      if (i >= texte.length) {
        fini = true;
        annuleFrappe = null;
        els.suite.classList.add("boite__suite--visible");
        return resolve(true);
      }
      // on ralentit sur la ponctuation, ça change tout au rythme
      const c = texte[i - 1];
      const delai = ".!?…".includes(c) ? vitesse * 9
                  : ",;:".includes(c)  ? vitesse * 4
                  : vitesse;
      minuteur = setTimeout(pas, delai);
    };
    minuteur = setTimeout(pas, vitesse);
  });
}

/**
 * Affiche une réplique et attend que le joueur avance.
 * Premier clic : termine la frappe. Deuxième : passe au nœud suivant.
 */
export async function replique({ nom = null, texte = "", style = "" }) {
  els.boite.classList.remove("boite--cachee", "boite--narration", "boite--pensee");
  if (style) els.boite.classList.add("boite--" + style);

  els.nom.textContent = nom || "";
  els.nom.hidden = !nom;

  const promesseFrappe = ecrire(texte);

  // 1er clic pendant la frappe : tout afficher d'un coup
  await Promise.race([
    promesseFrappe,
    attendreClic().then(() => { if (annuleFrappe) annuleFrappe(); })
  ]);
  await promesseFrappe;

  // clic suivant : on passe au nœud d'après
  await attendreClic();
  marquerLu(texte);
}

export function cacherBoite(cacher = true) {
  els.boite.classList.toggle("boite--cachee", cacher);
}

/* ---------- choix ---------- */

export function proposerChoix(question, options) {
  return new Promise(resolve => {
    els.question.textContent = question || "";
    els.question.hidden = !question;
    els.liste.innerHTML = "";
    cacherBoite(true);
    els.avancer.hidden = true;

    options.forEach((opt, i) => {
      const b = document.createElement("button");
      b.className = "option";
      if (dejaLu("choix:" + opt.texte)) b.classList.add("option--lue");
      b.textContent = opt.texte;
      b.style.animationDelay = (i * 70) + "ms";
      b.addEventListener("click", () => {
        marquerLu("choix:" + opt.texte);
        els.choix.hidden = true;
        els.avancer.hidden = false;
        cacherBoite(false);
        resolve(opt);
      });
      els.liste.appendChild(b);
    });

    els.choix.hidden = false;
    requestAnimationFrame(() => els.liste.firstChild?.focus());
  });
}
