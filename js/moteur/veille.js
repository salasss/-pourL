/* ============================================================
   VEILLE — la boucle de tour.

   Le joueur agit, l'adversaire répond. Ça s'arrête quand l'emprise
   tombe à zéro (victoire) ou la mémoire à zéro (échec). L'échec n'est
   pas une mort : le chapitre reprend, en moins bien.

   Rien d'aléatoire. Les manœuvres de l'adversaire défilent en boucle,
   dans l'ordre écrit : le joueur qui observe peut les apprendre, et
   « Regarder » les lui donne directement.
   ============================================================ */

import { etat, aFlag } from "./etat.js";
import { ACTIONS, VEILLES } from "../donnees/veilles.js";
import { cacherBoite } from "../ui/dialogue.js";

let els = null;

export function initVeille() {
  const $ = id => document.getElementById(id);
  els = {
    bloc: $("veille"), nom: $("veille-nom"),
    emprise: $("veille-emprise"), empriseTxt: $("veille-emprise-txt"),
    memoire: $("veille-memoire"), memoireTxt: $("veille-memoire-txt"),
    journal: $("veille-journal"), actions: $("veille-actions")
  };
  return !!els.bloc;
}

function jauge(el, txt, valeur, max, bas = false) {
  if (!el) return;
  el.style.scale = Math.max(0, Math.min(1, valeur / max)) + " 1";
  el.classList.toggle("bas", bas);
  if (txt) txt.textContent = Math.max(0, valeur) + " / " + max;
}

/** Les actions utilisables : celles de la veille, moins celles que le
 *  joueur n'a pas encore débloquées, moins celles déjà rangées. */
function disponibles(veille, rangees) {
  const libres = veille.actions.filter(id => {
    const a = ACTIONS[id];
    if (!a) return false;
    if (a.flag && !aFlag(a.flag)) return false;
    return !rangees.has(id);
  });
  // on ne laisse jamais le joueur sans rien à faire
  return libres.length ? libres : ["regarder"];
}

function dessinerActions(veille, rangees, surChoix) {
  els.actions.innerHTML = "";
  for (const id of disponibles(veille, rangees)) {
    const a = ACTIONS[id];
    const b = document.createElement("button");
    b.className = "veille-action";
    b.type = "button";
    b.innerHTML =
      `<span class="veille-action__nom">${a.nom}</span>` +
      `<span class="veille-action__mot">${a.mot || "sans un mot"}</span>`;
    b.addEventListener("click", () => surChoix(id), { once: true });
    els.actions.appendChild(b);
  }
}

function attendreAction(veille, rangees) {
  return new Promise(resolve => dessinerActions(veille, rangees, resolve));
}

function dire(texte) {
  els.journal.innerHTML = texte;
  return new Promise(r => setTimeout(r, 900));
}

/**
 * Joue une veille entière.
 * @returns {Promise<{issue:"victoire"|"echec", tours:number}>}
 */
export async function jouerVeille(id) {
  const v = VEILLES[id];
  if (!v || !els || !els.bloc) return { issue: "victoire", tours: 0 };

  let emprise = v.emprise;
  let memoire = v.memoire;
  let garde = 0;              // atténue le prochain effacement
  let ouvert = false;         // l'adversaire s'est découvert : effet doublé
  let revele = null;          // la prochaine manœuvre, si on a regardé
  const rangees = new Set();  // actions que le Greffier a classées
  let tour = 0;

  cacherBoite(true);
  els.bloc.hidden = false;
  els.nom.textContent = v.nom;
  jauge(els.emprise, els.empriseTxt, emprise, v.emprise);
  jauge(els.memoire, els.memoireTxt, memoire, v.memoire);
  await dire(v.intro + (v.aide ? ` <em>${v.aide}</em>` : ""));

  while (emprise > 0 && memoire > 0) {
    const choisi = await attendreAction(v, rangees);
    const a = ACTIONS[choisi];
    tour++;

    /* ---- ce que fait le joueur ---- */
    let ligne = a.dit;
    const inefficace = (v.immunise || []).includes(choisi);

    // `bonus` laisse une veille rendre tranchante une action qui ne l'est
    // pas ailleurs : contre la Procession, c'est Regarder qui ouvre.
    const base = (v.bonus && v.bonus[choisi]) || a.desserre || 0;

    if (base) {
      let d = inefficace ? 0 : base;
      if (d && v.faible === choisi) d *= 2;
      if (d && ouvert) d *= 2;
      emprise -= d;
      ligne += inefficace
        ? " <em>Ça ne prend pas. Pas sur ça.</em>"
        : (ouvert || v.faible === choisi ? " <em>L'emprise lâche d'un coup.</em>" : "");
    } else if (inefficace) {
      ligne += " <em>Ça ne prend pas. Pas sur ça.</em>";
    }
    if (a.garde)  garde = a.garde;
    if (a.repose) memoire = Math.min(v.memoire, memoire + a.repose);
    if (a.revele) {
      // la manoeuvre imminente est celle d'indice (tour - 1), pas la suivante
      revele = v.manoeuvres[(tour - 1) % v.manoeuvres.length];
      ligne += ` <em>Tu vois venir : ${revele.dit}</em>`;
    }
    ouvert = false;

    jauge(els.emprise, els.empriseTxt, emprise, v.emprise);
    jauge(els.memoire, els.memoireTxt, memoire, v.memoire, memoire <= v.memoire / 3);
    await dire(ligne);
    if (emprise <= 0) break;

    /* ---- ce que fait l'adversaire ---- */
    const m = v.manoeuvres[(tour - 1) % v.manoeuvres.length];
    let perte = Math.max(0, (m.efface || 0) - garde);
    garde = 0;
    memoire -= perte;
    ouvert = !!m.ouvert;
    revele = null;

    let riposte = m.dit;
    if (m.range) {
      // jamais `regarder` (le joueur resterait sans rien) ni la faiblesse
      // de la veille : s'il pouvait classer ce qui le bat, le combat
      // deviendrait inachevable des le premier tour.
      const reste = disponibles(v, rangees)
        .filter(x => x !== "regarder" && x !== v.faible);
      if (reste.length) {
        const pris = reste[reste.length - 1];
        rangees.add(pris);
        riposte += ` <em>« ${ACTIONS[pris].nom} » — classé.</em>`;
      }
    }
    if (m.ouvert) riposte += " <em>Il s'est découvert.</em>";

    jauge(els.memoire, els.memoireTxt, memoire, v.memoire, memoire <= v.memoire / 3);
    await dire(riposte);
  }

  const gagne = emprise <= 0;
  els.actions.innerHTML = "";
  await dire(gagne ? v.victoire : v.echec);
  await new Promise(r => setTimeout(r, 1400));

  els.bloc.hidden = true;
  cacherBoite(false);
  return { issue: gagne ? "victoire" : "echec", tours: tour };
}
