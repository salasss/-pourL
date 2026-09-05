/* ============================================================
   PLACEHOLDER — remplace en SVG toute image manquante.
   Le jeu doit être jouable de bout en bout sans un seul asset.
   ============================================================ */

const cache = new Map();
const existe = new Map();

function couleursPeau() {
  const s = getComputedStyle(document.documentElement);
  return {
    a: s.getPropertyValue("--fond-profond").trim() || "#e2d3bf",
    b: s.getPropertyValue("--accent").trim() || "#c9a227",
    t: s.getPropertyValue("--encre-douce").trim() || "#5b4d40"
  };
}

export function svgManquant(label, ratio = "16/9") {
  const cle = label + ratio + document.documentElement.className;
  if (cache.has(cle)) return cache.get(cle);

  const { a, b, t } = couleursPeau();
  const [w, h] = ratio === "3/4" ? [768, 1024] : [1600, 900];
  const propre = String(label).replace(/[<>&"]/g, "");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs>
  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${a}"/>
    <stop offset="1" stop-color="${b}" stop-opacity=".55"/>
  </linearGradient>
  <pattern id="h" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(38)">
    <line x1="0" y1="0" x2="0" y2="26" stroke="${t}" stroke-opacity=".10" stroke-width="9"/>
  </pattern>
</defs>
<rect width="${w}" height="${h}" fill="url(#g)"/>
<rect width="${w}" height="${h}" fill="url(#h)"/>
<text x="50%" y="49%" text-anchor="middle" fill="${t}" fill-opacity=".62"
      font-family="Georgia, serif" font-size="${Math.round(w / 26)}"
      font-style="italic">${propre}</text>
<text x="50%" y="57%" text-anchor="middle" fill="${t}" fill-opacity=".38"
      font-family="system-ui, sans-serif" font-size="${Math.round(w / 52)}"
      letter-spacing="4">IMAGE À VENIR</text>
</svg>`;

  const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  cache.set(cle, url);
  return url;
}

function sonde(chemin) {
  return new Promise(resolve => {
    if (existe.has(chemin)) return resolve(existe.get(chemin));
    const img = new Image();
    img.onload  = () => { existe.set(chemin, true);  resolve(true); };
    img.onerror = () => { existe.set(chemin, false); resolve(false); };
    img.src = chemin;
  });
}

/** Charge une image ; accepte un chemin ou une liste de chemins de repli
 *  (le premier qui existe gagne). Si rien n'existe : placeholder SVG. */
export async function urlOuPlaceholder(chemin, label, ratio) {
  const candidats = (Array.isArray(chemin) ? chemin : [chemin]).filter(Boolean);
  for (const c of candidats) {
    if (await sonde(c)) return c;
  }
  return svgManquant(label, ratio);
}

/** Précharge une liste de chemins sans bloquer. */
export function precharger(chemins) {
  chemins.filter(Boolean).forEach(c => {
    if (existe.has(c)) return;
    const img = new Image();
    img.onload  = () => existe.set(c, true);
    img.onerror = () => existe.set(c, false);
    img.src = c;
  });
}
