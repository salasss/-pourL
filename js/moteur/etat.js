/* ============================================================
   ÉTAT — état global du jeu + sauvegarde localStorage
   ============================================================ */

const CLE = "vn-lamia-v1";
const VERSION = 1;

/** Numéro de build — sert à vérifier d'un coup d'œil que le navigateur
 *  ne sert pas une vieille version en cache. Visible dans les Réglages. */
export const VERSION_JEU = "2026.10.12a";

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
    /* ---- arc Cendres : l'économie du Serment ----
       Trois monnaies, aucune gratuite. La cendre est ce que ça coûte à son
       corps et elle NE REDESCEND JAMAIS de tout l'arc. Les abandons sont ce
       qu'elle a laissé partir. Les mots sont la voix du joueur : chaque mot
       dit pour la sauver est un mot qu'il ne pourra plus lui dire à la fin. */
    cendre: 0,
    abandons: 0,
    mots: { chaleur: "absent", mur: "absent", ombre: "absent", boite: "absent" },
    lexique: 0,        // nombre de mots en main — dérivé de `mots`, tenu à jour
    rumeur: 0,         // ce que la ville raconte d'elle
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

/* ---------- arc Cendres ---------- */

/** Les mots que la voix a récupérés : 0 au début, 4 à la fin. */
export const LEXIQUE_MAX = 4;

export const PALIERS_RUMEUR = [
  { min: 10, nom: "Le monstre de Bgayet" },
  { min: 6,  nom: "La Dévoreuse" },
  { min: 3,  nom: "On chuchote" },
  { min: 0,  nom: "Une ombre qui passe" }
];

export function palierRumeur(valeur = etat.rumeur) {
  return PALIERS_RUMEUR.find(p => valeur >= p.min).nom;
}

export function aFlag(nom)   { return !!etat.flags[nom]; }
export function aCarte(id)   { return etat.cartes.includes(id); }
export function aFini(idCh)  { return etat.chapitresFinis.includes(idCh); }

/* ---------- l'économie du Serment ---------- */

/* Calibrage de la cendre. Valeurs de travail : l'échelle définitive dépend
   du format 3/3/4 et sera figée quand les coûts de TENIR le seront. */
export const CENDRE_MAX     = 15;   // échelle de la jauge
export const CENDRE_ALERTE  = 9;    // « la cendre lui monte au poignet »
export const SEUIL_COUVERTE = 12;   // au-delà, elle ne peut plus rien TENIR

/** Couverte : ses mains sont de la cendre. Seule règle dérivée du système. */
export function couverte() { return etat.cendre >= SEUIL_COUVERTE; }


/** Les quatre fragments, dans l'ordre où le serment les dit. */
export const MOTS = [
  { id: "chaleur", nom: "LA CHALEUR" },
  { id: "mur",     nom: "LE MUR" },
  { id: "ombre",   nom: "L'OMBRE" },
  { id: "boite",   nom: "LA BOÎTE" }
];

/** « absent » pas encore trouvé · « intacte » / « ternie » en main · « dit » dépensé. */
export function motsEnMain() {
  return MOTS.filter(m => ["intacte", "ternie"].includes(etat.mots[m.id])).length;
}

export function aLeMot(id) {
  return ["intacte", "ternie"].includes(etat.mots[id]);
}

/** Un lieu rend un fragment. `ternie` si on l'a mal défendu en chemin. */
export function acquerirMot(id, etatMot = "intacte") {
  if (!etat.mots[id] || etat.mots[id] === "absent") {
    etat.mots[id] = etatMot;
    etat.lexique = motsEnMain();
    sauver();
  }
}

/** Dépenser un mot : définitif. C'est le prix, pas une ressource qui revient. */
export function direMot(id) {
  if (!aLeMot(id)) return false;
  etat.mots[id] = "dit";
  etat.lexique = motsEnMain();
  sauver();
  return true;
}

/** La cendre ne redescend jamais. C'est toute la règle. */
export function monterCendre(n) {
  etat.cendre = Math.max(0, etat.cendre + n);
  sauver();
}

export function abandonner(n = 1) {
  etat.abandons += n;
  sauver();
}

/* ---------- écritures ---------- */

export function appliquerEffets(effets = {}) {
  const obtenus = [];
  if (typeof effets.complicite === "number") {
    etat.complicite = Math.max(0, etat.complicite + effets.complicite);
  }
  if (typeof effets.rumeur === "number") {
    etat.rumeur = Math.max(0, etat.rumeur + effets.rumeur);
  }
  if (typeof effets.lexique === "number") {
    etat.lexique = Math.max(0, Math.min(LEXIQUE_MAX, etat.lexique + effets.lexique));
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
