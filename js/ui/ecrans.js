/* ============================================================
   ÉCRANS — titre, chapitres, galerie, journal, réglages, fin
   ============================================================ */

import { etat, sauver, effacer, aUneSauvegarde, palier } from "../moteur/etat.js";
import { CARTES, ORDRE_CARTES } from "../donnees/cartes.js";
import { SOUVENIRS, ORDRE_SOUVENIRS } from "../donnees/souvenirs.js";
import { ORDRE, metaParId, estAccessible, scelleParDate, chapitreParId } from "../donnees/chapitres/index.js";
import { urlOuPlaceholder, svgManquant } from "../moteur/placeholder.js";
import { DECORS } from "../donnees/decors.js";
import { volumeMusique } from "../moteur/audio.js";

const $ = id => document.getElementById(id);
const ecran = () => $("ecran");
const scene = () => $("scene");

const echappe = s => String(s).replace(/[&<>"]/g, c =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

let actions = {};   // injecté par main.js

export function initEcrans(a) { actions = a; }

function montrer(html) {
  const e = ecran();
  e.innerHTML = html;
  e.hidden = false;
  e.scrollTop = 0;
  scene().hidden = true;
}

export function fermerEcran() {
  ecran().hidden = true;
  ecran().innerHTML = "";
  scene().hidden = false;
}

function envelopper(contenu) {
  return `<div class="ecran__inner">${contenu}</div>`;
}

/* ============================================================
   ÉCRAN-TITRE
   ============================================================ */

export async function ecranTitre() {
  // le titre est toujours dans la lumière — même en sortant de l'arc Cendres
  const html = document.documentElement;
  html.classList.remove("peau-cendres");
  html.classList.add("peau-souvenir");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.content = "#f3f0ea";

  const fond = await urlOuPlaceholder(DECORS["ecran-titre"].src, "La placette", "16/9");
  const reprise = aUneSauvegarde() && etat.chapitre;
  const meta = reprise ? metaParId(etat.chapitre) : null;

  montrer(`
    <div class="affiche">
      <img class="affiche__fond" src="${fond}" alt="">
      <div class="affiche__scrim" aria-hidden="true"></div>

      <header class="affiche__tete">
        <h1 class="affiche__nom">pourL</h1>
        <span class="affiche__filet" aria-hidden="true"></span>
        <p class="affiche__dedicace">
          Tu ne le savais pas, mais je t'avais déjà vue deux fois.
          Voilà ce qui s'est passé après.
        </p>
      </header>

      <div class="affiche__bas">
        <nav class="affiche__menu">
          ${reprise ? `<button class="affiche__lien affiche__lien--principal" data-act="reprendre">
              Reprendre — ${echappe(meta ? meta.titre : "")}
            </button>` : `<button class="affiche__lien affiche__lien--principal" data-act="nouveau">Commencer</button>`}
          ${reprise ? `<button class="affiche__lien" data-act="nouveau">Recommencer</button>` : ""}
          <button class="affiche__lien" data-act="chapitres">Chapitres</button>
          <button class="affiche__lien" data-act="galerie">Souvenirs</button>
          <button class="affiche__lien" data-act="journal">Journal</button>
          <button class="affiche__lien" data-act="reglages">Réglages</button>
        </nav>
      </div>
    </div>
  `);

  ecran().querySelectorAll("[data-act]").forEach(b => {
    b.addEventListener("click", () => router(b.dataset.act));
  });
}

function router(act) {
  switch (act) {
    case "reprendre": actions.reprendre(); break;
    case "nouveau":   actions.nouvellePartie(); break;
    case "chapitres": ecranChapitres(); break;
    case "galerie":   ecranGalerie(); break;
    case "journal":   ecranJournal(); break;
    case "reglages":  ecranReglages(); break;
    case "titre":     ecranTitre(); break;
    case "continuer": fermerEcran(); break;
  }
}

function pied(retourVers = "titre", label = "Retour au titre") {
  return `<div class="barre-boutons">
    <button class="bouton bouton--fantome" data-act="${retourVers}">${echappe(label)}</button>
  </div>`;
}

function brancher() {
  ecran().querySelectorAll("[data-act]").forEach(b => {
    b.addEventListener("click", () => router(b.dataset.act));
  });
}

/* ============================================================
   CHAPITRES
   ============================================================ */

export async function ecranChapitres() {
  const cartes = await Promise.all(ORDRE.map(async c => {
    const ecrit = !!chapitreParId(c.id);
    const ouvert = ecrit && estAccessible(c.id, etat.chapitresFinis);
    const fini = etat.chapitresFinis.includes(c.id);
    const scelle = scelleParDate(c);

    const visuel = c.cendres
      ? `<span class="pola__vide" aria-hidden="true">✦</span>`
      : `<img class="pola__img" src="${await urlOuPlaceholder(c.image, c.titre, "16/9")}" alt="">`;

    return `<button class="pola ${c.cendres ? "pola--cendres" : ""}" data-ch="${c.id}"
              ${ouvert ? "" : "disabled"}>
      ${fini ? `<span class="pola__lu">lu</span>` : ""}
      ${visuel}
      <span class="pola__legende">
        <span class="pola__num">${c.cendres ? "bonus" : "chapitre " + echappe(c.numero)}</span>
        <span class="pola__titre">${echappe(c.titre)}</span>
        <span class="pola__sous">${scelle ? "se réveille le 1ᵉʳ octobre…"
          : ouvert || fini ? echappe(c.sousTitre) : "pas encore"}</span>
      </span>
    </button>`;
  }));

  montrer(envelopper(`
    <p class="ecran__sur">notre histoire</p>
    <h2 class="ecran__titre">Chapitres</h2>
    <p class="ecran__intro">
      Chaque carte est un morceau de l'histoire. Elles se déverrouillent dans l'ordre —
      et tu peux rejouer celles que tu as déjà lues.
    </p>
    <div class="mur">${cartes.join("")}</div>
    ${pied()}
  `));

  ecran().querySelectorAll("[data-ch]").forEach(b => {
    b.addEventListener("click", () => actions.jouerChapitre(b.dataset.ch));
  });
  brancher();
}

/* ============================================================
   GALERIE DE CARTES
   ============================================================ */

export async function ecranGalerie() {
  const obtenues = etat.cartes.length;
  const total = ORDRE_CARTES.length;

  const vignettes = await Promise.all(ORDRE_CARTES.map(async id => {
    const c = CARTES[id];
    const debloque = etat.cartes.includes(id);
    const src = debloque
      ? await urlOuPlaceholder(c.src, c.titre, "3/4")
      : svgManquant("", "3/4");
    return `<button class="carte ${debloque ? "" : "carte--verrou"}" data-carte="${id}"
              ${debloque ? "" : "disabled"}>
      <img src="${src}" alt="${debloque ? echappe(c.titre) : "Carte non débloquée"}">
      <span class="carte__legende">${echappe(c.titre)}</span>
    </button>`;
  }));

  montrer(envelopper(`
    <p class="ecran__sur">${obtenues} souvenirs retrouvés sur ${total}</p>
    <h2 class="ecran__titre">Souvenirs</h2>
    <p class="ecran__intro">
      Chaque objet de l'histoire se débloque en jouant. Clique pour lire ce qu'il raconte.
    </p>
    <div class="galerie">${vignettes.join("")}</div>
    ${pied()}
  `));

  ecran().querySelectorAll("[data-carte]").forEach(b => {
    b.addEventListener("click", () => detailCarte(b.dataset.carte));
  });
  brancher();
}

async function detailCarte(id) {
  const c = CARTES[id];
  if (!c) return;
  const src = await urlOuPlaceholder(c.src, c.titre, "3/4");
  const boite = document.createElement("div");
  boite.className = "carte-detail";
  boite.innerHTML = `
    <div class="carte-detail__boite" role="dialog" aria-label="${echappe(c.titre)}">
      <img src="${src}" alt="">
      <div class="carte-detail__texte">
        <h3 class="carte-detail__titre">${echappe(c.titre)}</h3>
        <p class="carte-detail__verso">${echappe(c.verso)}</p>
      </div>
    </div>`;
  boite.addEventListener("click", () => boite.remove());
  document.body.appendChild(boite);
}

/* ============================================================
   JOURNAL
   ============================================================ */

export function ecranJournal() {
  const acquis = ORDRE_SOUVENIRS.filter(id => etat.souvenirs.includes(id));

  const corps = acquis.length
    ? acquis.map(id => {
        const s = SOUVENIRS[id];
        return `<div class="journal__entree">
          <p class="journal__date">${echappe(s.date)}</p>
          <p class="journal__titre">${echappe(s.titre)}</p>
          <p class="journal__texte">${echappe(s.texte)}</p>
        </div>`;
      }).join("")
    : `<p class="journal__vide">Rien encore. Le journal se remplit tout seul, en jouant.</p>`;

  montrer(envelopper(`
    <p class="ecran__sur">${acquis.length} entrées sur ${ORDRE_SOUVENIRS.length}</p>
    <h2 class="ecran__titre">Journal</h2>
    <p class="ecran__intro">Toute l'histoire, dans l'ordre, telle qu'elle s'est passée.</p>
    <div class="journal">${corps}</div>
    ${pied()}
  `));
  brancher();
}

/* ============================================================
   RÉGLAGES
   ============================================================ */

export function ecranReglages() {
  const r = etat.reglages;
  montrer(envelopper(`
    <p class="ecran__sur">confort de lecture</p>
    <h2 class="ecran__titre">Réglages</h2>
    <div class="reglages">
      <label class="reglage">
        <span><span class="reglage__nom">Vitesse du texte</span><br>
          <span class="reglage__aide">Tout à droite : le texte s'affiche d'un coup.</span></span>
        <input type="range" id="r-vitesse" min="0" max="60" step="2" value="${60 - r.vitesseTexte}">
      </label>
      <label class="reglage">
        <span class="reglage__nom">Musique</span>
        <input type="range" id="r-musique" min="0" max="100" value="${Math.round(r.musique * 100)}">
      </label>
      <label class="reglage">
        <span class="reglage__nom">Bruitages</span>
        <input type="range" id="r-sfx" min="0" max="100" value="${Math.round(r.bruitages * 100)}">
      </label>
      <label class="reglage">
        <span><span class="reglage__nom">Animations</span><br>
          <span class="reglage__aide">Décor qui respire, sprites qui bougent.</span></span>
        <input type="checkbox" id="r-anim" ${r.animations ? "checked" : ""}>
      </label>
    </div>
    <div class="barre-boutons">
      <button class="bouton bouton--fantome" data-act="titre">Retour au titre</button>
      <button class="bouton bouton--fantome" id="r-effacer">Effacer la sauvegarde</button>
    </div>
  `));

  $("r-vitesse").addEventListener("input", e => {
    etat.reglages.vitesseTexte = 60 - Number(e.target.value); sauver();
  });
  $("r-musique").addEventListener("input", e => {
    volumeMusique(Number(e.target.value) / 100); sauver();
  });
  $("r-sfx").addEventListener("input", e => {
    etat.reglages.bruitages = Number(e.target.value) / 100; sauver();
  });
  $("r-anim").addEventListener("change", e => {
    etat.reglages.animations = e.target.checked;
    document.documentElement.style.setProperty(
      "--pause-anim", e.target.checked ? "running" : "paused");
    document.querySelectorAll(".decor, .sprite").forEach(el => {
      el.style.animationPlayState = e.target.checked ? "running" : "paused";
    });
    sauver();
  });
  $("r-effacer").addEventListener("click", () => {
    if (!confirm("Effacer toute la progression ? C'est définitif.")) return;
    effacer();
    ecranTitre();
  });
  brancher();
}

/* ============================================================
   MENU EN COURS DE PARTIE
   ============================================================ */

export function ecranMenu() {
  montrer(envelopper(`
    <p class="ecran__sur">on reprend quand tu veux</p>
    <h2 class="ecran__titre">Menu</h2>
    <p class="ecran__intro">La partie est sauvegardée automatiquement à chaque réplique.</p>
    <div class="chapitres">
      <button class="chapitre-carte" data-act="continuer">
        <span class="chapitre-carte__num"></span>
        <span class="chapitre-carte__titre">Reprendre la lecture</span>
        <span class="chapitre-carte__etat"></span>
      </button>
      <button class="chapitre-carte" data-act="galerie">
        <span class="chapitre-carte__num"></span>
        <span class="chapitre-carte__titre">Souvenirs</span>
        <span class="chapitre-carte__etat">${etat.cartes.length} sur ${ORDRE_CARTES.length}</span>
      </button>
      <button class="chapitre-carte" data-act="journal">
        <span class="chapitre-carte__num"></span>
        <span class="chapitre-carte__titre">Journal</span>
        <span class="chapitre-carte__etat"></span>
      </button>
      <button class="chapitre-carte" data-act="chapitres">
        <span class="chapitre-carte__num"></span>
        <span class="chapitre-carte__titre">Chapitres</span>
        <span class="chapitre-carte__etat"></span>
      </button>
      <button class="chapitre-carte" data-act="reglages">
        <span class="chapitre-carte__num"></span>
        <span class="chapitre-carte__titre">Réglages</span>
        <span class="chapitre-carte__etat"></span>
      </button>
      <button class="chapitre-carte" data-act="titre">
        <span class="chapitre-carte__num"></span>
        <span class="chapitre-carte__titre">Écran-titre</span>
        <span class="chapitre-carte__etat"></span>
      </button>
    </div>
  `));
  brancher();
}

/* ============================================================
   FIN DE CHAPITRE
   ============================================================ */

export async function ecranFinChapitre(ch, cartesGagnees, suivant) {
  const vignettes = await Promise.all(cartesGagnees.map(async id => {
    const c = CARTES[id];
    const src = await urlOuPlaceholder(c.src, c.titre, "3/4");
    return `<img src="${src}" alt="${echappe(c.titre)}">`;
  }));

  const metaSuivant = suivant ? metaParId(suivant) : null;
  const suivantEcrit = suivant && !!chapitreParId(suivant);

  montrer(envelopper(`
    <div class="fin">
      <p class="fin__sur">fin du chapitre ${echappe(ch.numero)}</p>
      <h2 class="fin__titre">${echappe(ch.titre)}</h2>
      <span class="fin__palier">${echappe(palier())}</span>
      ${vignettes.length ? `<div class="fin__cartes">${vignettes.join("")}</div>` : ""}
      <p class="fin__bilan">
        ${etat.cartes.length} souvenir${etat.cartes.length > 1 ? "s" : ""} sur ${ORDRE_CARTES.length}.
        ${etat.souvenirs.length} entrée${etat.souvenirs.length > 1 ? "s" : ""} au journal.
      </p>
      <div class="barre-boutons">
        ${suivantEcrit
          ? `<button class="bouton" data-suite="${suivant}">Chapitre suivant — ${echappe(metaSuivant ? metaSuivant.titre : "")}</button>`
          : suivant
            ? `<button class="bouton bouton--fantome" data-act="chapitres">La suite arrive bientôt</button>`
            : `<button class="bouton" data-act="galerie">Revoir les souvenirs</button>`}
        <button class="bouton bouton--fantome" data-rejouer="${ch.id}">Rejouer ce chapitre</button>
        <button class="bouton bouton--fantome" data-act="titre">Écran-titre</button>
      </div>
    </div>
  `));

  ecran().querySelector("[data-suite]")
    ?.addEventListener("click", e => actions.jouerChapitre(e.target.dataset.suite));
  ecran().querySelector("[data-rejouer]")
    ?.addEventListener("click", e => actions.jouerChapitre(e.target.dataset.rejouer));
  brancher();
}
