/* ============================================================
   ÉTAT — état global du jeu + sauvegarde localStorage
   ============================================================ */

const CLE = "vn-lamia-v1";
const VERSION = 1;

export const PALIERS = [
  { min: 40, nom: "Évidence" },
  { min: 25, nom: "C'est plus que ça" },
  { min: 10, nom: "On se cherche" },
  { min: 0,  nom: "Camarades de classe" }
];

function neuf() {
  return {
    version: VERSION,
    chapitre: null,
    index: 0,
    complicite: 0,
    flags: {},
    cartes: [],
    souvenirs: [],
    chapitresFinis: [],
    luDejaVu: {},
    reglages: {
      v: 2,               // version des réglages (migrations de volume)
      vitesseTexte: 26,   // ms par caractère
      musique: 0.3,
      bruitages: 0.5,
      animations: true
    }
  };
}

export const etat = neuf();

/* ---------- persistance ---------- */

export function charger() {
  let brut;
  try { brut = localStorage.getItem(CLE); } catch { return false; }
  if (!brut) return false;

  let sauve;
  try { sauve = JSON.parse(brut); } catch { return false; }

  // migration : on ne plante jamais sur une vieille sauvegarde
  if (!sauve || sauve.version !== VERSION) {
    try { localStorage.removeItem(CLE); } catch { /* rien */ }
    return false;
  }

  Object.assign(etat, neuf(), sauve);
  etat.reglages = Object.assign(neuf().reglages, sauve.reglages || {});
  // migration v2 : les volumes par défaut ont été baissés — on ramène les
  // anciennes sauvegardes au nouveau niveau, une seule fois. On teste la
  // valeur BRUTE de la sauvegarde : le défaut comblerait le trou sinon.
  if (!sauve.reglages || sauve.reglages.v !== 2) {
    etat.reglages.musique = Math.min(etat.reglages.musique, 0.3);
    etat.reglages.bruitages = Math.min(etat.reglages.bruitages, 0.5);
    etat.reglages.v = 2;
  }
  return true;
}

let enAttente = null;
export function sauver() {
  clearTimeout(enAttente);
  enAttente = setTimeout(() => {
    try { localStorage.setItem(CLE, JSON.stringify(etat)); } catch { /* quota */ }
  }, 120);
}

export function effacer() {
  try { localStorage.removeItem(CLE); } catch { /* rien */ }
  Object.assign(etat, neuf());
}

export function aUneSauvegarde() {
  try { return !!localStorage.getItem(CLE); } catch { return false; }
}

/* ---------- lectures ---------- */

export function palier(valeur = etat.complicite) {
  return PALIERS.find(p => valeur >= p.min).nom;
}

export function ratioComplicite() {
  return Math.max(0, Math.min(1, etat.complicite / 45));
}

export function aFlag(nom)   { return !!etat.flags[nom]; }
export function aCarte(id)   { return etat.cartes.includes(id); }
export function aFini(idCh)  { return etat.chapitresFinis.includes(idCh); }

/* ---------- écritures ---------- */

export function appliquerEffets(effets = {}) {
  const obtenus = [];
  if (typeof effets.complicite === "number") {
    etat.complicite = Math.max(0, etat.complicite + effets.complicite);
  }
  if (effets.flags) Object.assign(etat.flags, effets.flags);
  if (effets.carte && !etat.cartes.includes(effets.carte)) {
    etat.cartes.push(effets.carte);
    obtenus.push(effets.carte);
  }
  if (effets.souvenir && !etat.souvenirs.includes(effets.souvenir)) {
    etat.souvenirs.push(effets.souvenir);
  }
  sauver();
  return obtenus;
}

export function debloquerCarte(id) {
  if (etat.cartes.includes(id)) return false;
  etat.cartes.push(id);
  sauver();
  return true;
}

export function debloquerSouvenir(id) {
  if (etat.souvenirs.includes(id)) return false;
  etat.souvenirs.push(id);
  sauver();
  return true;
}

export function marquerLu(texte) {
  if (!texte) return;
  // hachage court, juste pour l'avance rapide
  let h = 0;
  for (let i = 0; i < texte.length; i++) h = (h * 31 + texte.charCodeAt(i)) | 0;
  etat.luDejaVu[h] = 1;
}

export function dejaLu(texte) {
  if (!texte) return false;
  let h = 0;
  for (let i = 0; i < texte.length; i++) h = (h * 31 + texte.charCodeAt(i)) | 0;
  return !!etat.luDejaVu[h];
}

export function terminerChapitre(id) {
  if (!etat.chapitresFinis.includes(id)) etat.chapitresFinis.push(id);
  sauver();
}
