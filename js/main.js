/* ============================================================
   MAIN — assemblage et boucle de jeu
   ============================================================ */

import { etat, charger, sauver, VERSION_JEU } from "./moteur/etat.js?v=20261011k";
import { ORDRE } from "./donnees/chapitres/index.js?v=20261011k";
import { initScene, viderSprites } from "./moteur/scene.js?v=20261011k";
import { initAudio, arreterMusique } from "./moteur/audio.js?v=20261011k";
import { initDialogue, brancherInteractions, cacherBoite } from "./ui/dialogue.js?v=20261011k";
import { initVeille } from "./moteur/veille.js?v=20261011k";
import { initHud, majHud, afficherHud } from "./ui/hud.js?v=20261011k";
import * as ecrans from "./ui/ecrans.js?v=20261011k";
import { jouerChapitre as lireChapitre, stopper } from "./moteur/directeur.js?v=20261011k";
import { chapitreParId, estAccessible } from "./donnees/chapitres/index.js?v=20261011k";

let enCours = false;

/* ---------- actions exposées aux écrans ---------- */

const actions = {
  async nouvellePartie() {
    // On garde les cles du bonus : elles ont ete donnees une fois, a la main.
    // Les effacer refermerait l'arc Cendres sans moyen de le rouvrir.
    const cles = {};
    for (const k of Object.keys(etat.flags)) if (k.startsWith("cle_")) cles[k] = etat.flags[k];
    etat.chapitre = "ch00";
    etat.index = 0;
    etat.complicite = 0;
    etat.flags = cles;
    sauver();
    await lancer("ch00", 0);
  },

  async reprendre() {
    let id = etat.chapitre;
    // Sans chapitre en cours — ou si celui-ci est deja termine — on reprend
    // au premier qui reste a lire. Retomber sur "ch00" rouvrait l'histoire
    // vraie par-dessus le verrou du mur, juste apres un effacement.
    if (!id || !chapitreParId(id) || etat.chapitresFinis.includes(id)) {
      const suite = ORDRE.find(c => chapitreParId(c.id)
        && !etat.chapitresFinis.includes(c.id)
        && estAccessible(c.id, etat.chapitresFinis, etat.flags));
      if (!suite) return ecrans.ecranChapitres();   // tout est lu
      return lancer(suite.id, 0);
    }
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
  console.log("pourL — build " + VERSION_JEU);
  initScene();
  initDialogue();
  initAudio();
  initHud(ouvrirMenu);
  brancherInteractions();
  initVeille();
  ecrans.initEcrans(actions);

  charger();

  // Mode développement : en local, on atterrit à la fin de l'histoire —
  // tous les chapitres réels lus, le sceau du bonus prêt à être testé.
  // « ?vierge » dans l'URL pour repartir d'une sauvegarde normale.
  const enLocal = ["localhost", "127.0.0.1"].includes(location.hostname);
  const vierge = new URLSearchParams(location.search).has("vierge");
  if (enLocal && !vierge && !etat.flags.__grainDev) {
    // Seulement l'histoire vraie. Marquer aussi les chapitres bonus les
    // faisait passer pour deja joues : cendres03 apparaissait deverrouille
    // sans avoir joue les deux premiers, donc sans aucun mot du Lexique et
    // sans avoir croise les deux premieres Veilles.
    ORDRE.filter(c => !c.cendres).forEach(c => {
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
