/* ============================================================
   DIRECTEUR — lit un chapitre nœud par nœud et l'exécute.
   Les conditions sont des objets déclaratifs : jamais d'eval.
   ============================================================ */

import {
  etat, sauver, appliquerEffets, debloquerCarte, debloquerSouvenir,
  terminerChapitre, aFlag, aCarte, aFini
} from "./etat.js";
import * as scene from "./scene.js";
import * as audio from "./audio.js";
import { replique, proposerChoix, cacherBoite, attendreClic } from "../ui/dialogue.js";
import { majHud, toastCarte, titreChapitre } from "../ui/hud.js";
import { PERSONNAGES } from "../donnees/personnages.js";
import { CARTES } from "../donnees/cartes.js";
import { DECORS } from "../donnees/decors.js";
import { precharger } from "./placeholder.js";

/* ---------- conditions déclaratives ---------- */

export function evalue(cond) {
  if (!cond) return true;
  if (cond.et) return cond.et.every(evalue);
  if (cond.ou) return cond.ou.some(evalue);
  if (cond.flag !== undefined)        return aFlag(cond.flag);
  if (cond.flagFaux !== undefined)    return !aFlag(cond.flagFaux);
  if (cond.compliciteMin !== undefined) return etat.complicite >= cond.compliciteMin;
  if (cond.compliciteMax !== undefined) return etat.complicite <= cond.compliciteMax;
  if (cond.carte !== undefined)       return aCarte(cond.carte);
  if (cond.chapitreFini !== undefined) return aFini(cond.chapitreFini);
  return true;
}

/* ---------- lecture d'un chapitre ---------- */

let chapitreCourant = null;
let arret = false;

export function stopper() { arret = true; }

function aplatir(noeuds) {
  // les nœuds `si` sont résolus à la volée, on garde la liste telle quelle
  return noeuds;
}

function indexDuLabel(noeuds, nom) {
  const i = noeuds.findIndex(n => n.type === "label" && n.nom === nom);
  return i === -1 ? null : i;
}

function prechargerChapitre(ch) {
  const chemins = [];
  ch.noeuds.forEach(n => {
    if (n.type === "decor" || n.type === "cg") {
      const d = DECORS[n.image]; if (d?.src) chemins.push(d.src);
    }
    if (n.type === "perso" || n.type === "dialogue") {
      const p = PERSONNAGES[n.id || n.perso];
      if (p?.poses) Object.values(p.poses).forEach(s => chemins.push(s));
    }
    if (n.type === "carte") { const c = CARTES[n.id]; if (c?.src) chemins.push(c.src); }
  });
  precharger([...new Set(chemins)]);
}

/**
 * Joue un chapitre depuis `depuis`.
 * @returns {Promise<{fin:string, suivant?:string}>}
 */
export async function jouerChapitre(ch, depuis = 0, surFin) {
  chapitreCourant = ch;
  arret = false;
  etat.chapitre = ch.id;
  titreChapitre(ch.titre);
  prechargerChapitre(ch);

  if (ch.peau) await scene.basculerPeau(ch.peau);

  const noeuds = aplatir(ch.noeuds);
  let i = depuis;

  while (i < noeuds.length) {
    if (arret) return { fin: "interrompu" };
    etat.index = i;
    sauver();

    const n = noeuds[i];
    const saut = await executer(n, noeuds);

    if (saut && saut.aller !== undefined) {
      const cible = indexDuLabel(noeuds, saut.aller);
      i = cible === null ? i + 1 : cible + 1;
      continue;
    }
    if (saut && saut.fin) {
      terminerChapitre(ch.id);
      etat.index = 0;
      sauver();
      return { fin: "termine", suivant: saut.suivant };
    }
    i++;
  }

  terminerChapitre(ch.id);
  etat.index = 0;
  sauver();
  return { fin: "termine", suivant: ch.suivant };
}

/* ---------- exécution d'un nœud ---------- */

async function executer(n, noeuds) {
  switch (n.type) {

    case "decor":
      await scene.poserDecor(n.image, { transition: n.transition, duree: n.duree || 800 });
      return;

    case "perso":
      await scene.poserPerso(n.id, { pose: n.pose, position: n.position });
      return;

    case "retirerPerso":
      await scene.retirerPerso(n.id);
      return;

    case "viderPersos":
      await scene.viderSprites();
      return;

    case "narration":
      scene.focusPerso(null);
      await replique({ texte: n.texte, style: "narration" });
      return;

    case "pensee":
      scene.focusPerso(null);
      await replique({ texte: n.texte, style: "pensee" });
      return;

    case "dialogue": {
      const p = PERSONNAGES[n.perso] || { nom: n.perso };
      if (n.pose) await scene.poserPerso(n.perso, { pose: n.pose, position: n.position || p.position });
      scene.focusPerso(n.perso);
      if (n.effet === "secousse") scene.secouer(400);
      await replique({ nom: p.nom, texte: n.texte });
      return;
    }

    case "choix": {
      const dispo = (n.options || []).filter(o => evalue(o.condition));
      const choisi = await proposerChoix(n.question, dispo);
      const obtenus = appliquerEffets(choisi.effets || {});
      if (choisi.effets?.complicite) majHud({ anime: true });
      for (const c of obtenus) await toastCarte(c);
      if (choisi.aller !== undefined) return { aller: choisi.aller };
      return;
    }

    case "label":
      return;

    case "aller":
      return { aller: n.label };

    case "si": {
      const branche = evalue(n.condition) ? n.alors : n.sinon;
      for (const sous of (branche || [])) {
        const saut = await executer(sous, noeuds);
        if (saut) return saut;
      }
      return;
    }

    case "cg":
      cacherBoite(true);
      await scene.montrerCG(n.image, n.legende, attendreClic);
      cacherBoite(false);
      if (n.carte) { if (debloquerCarte(n.carte)) await toastCarte(n.carte); }
      return;

    case "carte":
      if (debloquerCarte(n.id)) await toastCarte(n.id);
      return;

    case "souvenir":
      debloquerSouvenir(n.id);
      return;

    case "carton":
      cacherBoite(true);
      await scene.montrerCarton(n.texte, n.sousTitre, n.duree || 2400);
      cacherBoite(false);
      return;

    case "musique":
      if (n.arret) audio.arreterMusique();
      else audio.jouerMusique(n.piste, { fadeIn: n.fadeIn || 1600 });
      return;

    case "sfx":
      audio.jouerSfx(n.son);
      return;

    case "attendre":
      cacherBoite(n.cacherBoite !== false);
      await scene.attendre(n.duree || 800);
      cacherBoite(false);
      return;

    case "secousse":
      await scene.secouer(n.duree || 600);
      return;

    case "voile":
      if (n.retirer) await scene.devoiler(n.duree || 500);
      else await scene.voiler(n.style || "doux", n.duree || 500);
      return;

    case "peau":
      await scene.basculerPeau(n.nom);
      return;

    case "complicite":
      appliquerEffets({ complicite: n.valeur });
      majHud({ anime: true });
      return;

    case "flag":
      appliquerEffets({ flags: n.flags });
      return;

    case "finChapitre":
      return { fin: true, suivant: n.suivant };

    default:
      console.warn("Nœud inconnu :", n.type);
  }
}

export function chapitre() { return chapitreCourant; }
