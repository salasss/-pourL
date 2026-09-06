/* ============================================================
   MAIN — assemblage et boucle de jeu
   ============================================================ */

import { etat, charger, sauver } from "./moteur/etat.js";
import { ORDRE } from "./donnees/chapitres/index.js";
import { initScene, viderSprites } from "./moteur/scene.js";
import { initAudio, arreterMusique } from "./moteur/audio.js";
import { initDialogue, brancherInteractions, cacherBoite } from "./ui/dialogue.js";
import { initHud, majHud, afficherHud } from "./ui/hud.js";
import * as ecrans from "./ui/ecrans.js";
import { jouerChapitre as lireChapitre, stopper } from "./moteur/directeur.js";
import { chapitreParId } from "./donnees/chapitres/index.js";

let enCours = false;

/* ---------- actions exposées aux écrans ---------- */

const actions = {
  async nouvellePartie() {
    etat.chapitre = "ch00";
    etat.index = 0;
    etat.complicite = 0;
    etat.flags = {};
    sauver();
    await lancer("ch00", 0);
  },

  async reprendre() {
    const id = etat.chapitre || "ch00";
    if (!chapitreParId(id)) return actions.nouvellePartie();
    await lancer(id, etat.index || 0);
  },

  async jouerChapitre(id) {
    const ch = chapitreParId(id);
    if (!ch) return;
    etat.index = 0;
    await lancer(id, 0);
  }
};

/* ---------- boucle ---------- */

async function lancer(id, depuis) {
  const ch = chapitreParId(id);
  if (!ch) return ecrans.ecranTitre();

  if (enCours) { stopper(); await new Promise(r => setTimeout(r, 60)); }
  enCours = true;

  const cartesAvant = [...etat.cartes];

  ecrans.fermerEcran();
  afficherHud(true);
  cacherBoite(false);
  majHud();

  const res = await lireChapitre(ch, depuis);
  enCours = false;

  if (res.fin === "interrompu") return;

  await viderSprites();
  await arreterMusique({ fadeOut: 900 });

  const gagnees = etat.cartes.filter(c => !cartesAvant.includes(c));
  await ecrans.ecranFinChapitre(ch, gagnees, res.suivant);
}

/* ---------- menu en jeu ---------- */

function ouvrirMenu() {
  ecrans.ecranMenu();
}

/* ---------- démarrage ---------- */

function demarrer() {
  initScene();
  initDialogue();
  initAudio();
  initHud(ouvrirMenu);
  brancherInteractions();
  ecrans.initEcrans(actions);

  charger();

  // Mode développement : en local, on atterrit à la fin de l'histoire —
  // tous les chapitres réels lus, le sceau du bonus prêt à être testé.
  // « ?vierge » dans l'URL pour repartir d'une sauvegarde normale.
  const enLocal = ["localhost", "127.0.0.1"].includes(location.hostname);
  const vierge = new URLSearchParams(location.search).has("vierge");
  if (enLocal && !vierge && !etat.flags.__grainDev) {
    ORDRE.filter(c => !c.codeJJMM).forEach(c => {
      if (!etat.chapitresFinis.includes(c.id)) etat.chapitresFinis.push(c.id);
    });
    etat.flags.__grainDev = true;
    sauver();
  }

  // Échap = menu pendant une partie, retour au titre depuis un écran
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    const ecranOuvert = !document.getElementById("ecran").hidden;
    if (ecranOuvert) ecrans.fermerEcran();
    else if (enCours) ouvrirMenu();
  });

  ecrans.ecranTitre();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", demarrer);
} else {
  demarrer();
}
