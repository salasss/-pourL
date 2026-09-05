/* ============================================================
   SCÈNE — décors, sprites, voiles, illustrations, cartons
   ============================================================ */

import { urlOuPlaceholder } from "./placeholder.js";
import { DECORS } from "../donnees/decors.js";
import { PERSONNAGES } from "../donnees/personnages.js";

const $ = id => document.getElementById(id);

const els = {};
export function initScene() {
  els.decors  = $("decors");
  els.sprites = $("sprites");
  els.voile   = $("voile");
  els.cg      = $("cg");
  els.cgImg   = $("cg-img");
  els.cgLeg   = $("cg-legende");
  els.carton  = $("carton");
  els.cartonT = $("carton-texte");
  els.cartonS = $("carton-sous");
  els.scene   = $("scene");
}

export const attendre = ms => new Promise(r => setTimeout(r, ms));

/* ---------- décor ---------- */

let decorActuel = null;

export async function poserDecor(id, { transition = "fondu", duree = 800 } = {}) {
  if (decorActuel === id) return;
  decorActuel = id;

  // décor « vide » : on retire tout et on laisse le fond de la peau
  if (id === "vide" || !DECORS[id]?.src) {
    const anciens = [...els.decors.querySelectorAll(".decor")];
    anciens.forEach(a => a.classList.remove("decor--visible"));
    setTimeout(() => anciens.forEach(a => a.remove()), duree + 60);
    await attendre(duree);
    return;
  }

  const def = DECORS[id] || {};
  const src = await urlOuPlaceholder(def.src, def.label || id, "16/9");

  const img = document.createElement("img");
  img.className = "decor";
  img.alt = "";
  img.src = src;
  img.decoding = "async";

  if (transition === "noir" || transition === "flash") {
    await voiler(transition === "noir" ? "noir" : "flash", duree / 2);
  }

  els.decors.appendChild(img);
  await attendre(30);
  img.classList.add("decor--visible");

  // retire les anciens décors après la transition
  const anciens = [...els.decors.querySelectorAll(".decor")].slice(0, -1);
  setTimeout(() => anciens.forEach(a => a.remove()), duree + 60);

  if (transition === "noir" || transition === "flash") {
    await attendre(duree / 2);
    await devoiler(duree / 2);
  }
}

export function decorCourant() { return decorActuel; }

/* ---------- sprites ---------- */

const spritesAffiches = new Map();   // id -> <img>

export async function poserPerso(id, { pose = "neutre", position = "centre" } = {}) {
  const perso = PERSONNAGES[id];
  if (!perso) return;

  const chemin = perso.poses?.[pose] || perso.poses?.neutre;
  const src = await urlOuPlaceholder(chemin, perso.nom, "3/4");

  let img = spritesAffiches.get(id);
  if (!img) {
    img = document.createElement("img");
    img.className = "sprite sprite--respire";
    img.alt = "";
    img.dataset.perso = id;
    els.sprites.appendChild(img);
    spritesAffiches.set(id, img);
    img.src = src;
    img.classList.add("sprite--" + position);
    await attendre(30);
    img.classList.add("sprite--visible");
  } else {
    // changement de pose : petit fondu croisé
    if (img.getAttribute("src") !== src) {
      img.style.transition = "opacity 160ms linear";
      img.style.opacity = ".25";
      await attendre(150);
      img.src = src;
      await attendre(30);
      img.style.opacity = "";
      img.style.transition = "";
    }
    img.classList.remove("sprite--gauche", "sprite--centre", "sprite--droite");
    img.classList.add("sprite--" + position, "sprite--visible");
  }
}

export async function retirerPerso(id) {
  const img = spritesAffiches.get(id);
  if (!img) return;
  spritesAffiches.delete(id);
  img.classList.remove("sprite--visible");
  await attendre(320);
  img.remove();
}

export async function viderSprites() {
  const tous = [...spritesAffiches.keys()];
  spritesAffiches.clear();
  els.sprites.querySelectorAll(".sprite").forEach(s => s.classList.remove("sprite--visible"));
  if (tous.length) await attendre(320);
  els.sprites.innerHTML = "";
}

/** Met en avant celui qui parle. */
export function focusPerso(id) {
  spritesAffiches.forEach((img, key) => {
    img.classList.toggle("sprite--recule", !!id && key !== id);
  });
}

/* ---------- voiles ---------- */

export async function voiler(type = "doux", duree = 400) {
  els.voile.className = "scene__voile scene__voile--" + type;
  await attendre(duree);
}

export async function devoiler(duree = 400) {
  els.voile.className = "scene__voile";
  await attendre(duree);
}

export async function secouer(duree = 600) {
  els.scene.classList.add("secoue");
  await attendre(duree);
  els.scene.classList.remove("secoue");
}

/* ---------- illustration plein écran ---------- */

export async function montrerCG(id, legende, attendreClic) {
  const def = DECORS[id] || {};
  const src = await urlOuPlaceholder(def.src, def.label || id, "16/9");
  els.cgImg.src = src;
  els.cgLeg.textContent = legende || "";
  els.cgLeg.hidden = !legende;
  els.cg.hidden = false;
  await attendreClic();
  els.cg.hidden = true;
}

/* ---------- carton de date ---------- */

export async function montrerCarton(texte, sous, duree = 2400) {
  els.cartonT.textContent = texte || "";
  els.cartonS.textContent = sous || "";
  els.cartonS.hidden = !sous;
  els.carton.hidden = false;
  await attendre(duree);
  els.carton.style.transition = "opacity 600ms";
  els.carton.style.opacity = "0";
  await attendre(600);
  els.carton.hidden = true;
  els.carton.style.opacity = "";
  els.carton.style.transition = "";
}

/* ---------- bascule de peau ---------- */

export async function basculerPeau(nom) {
  const html = document.documentElement;
  const cible = "peau-" + nom;
  if (html.classList.contains(cible)) return;

  await voiler("noir", 900);
  html.classList.remove("peau-souvenir", "peau-cendres");
  html.classList.add(cible);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = nom === "cendres" ? "#0d1014" : "#efe6d9";
  decorActuel = null;
  await attendre(700);
  await devoiler(900);
}
