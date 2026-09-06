/* ============================================================
   DÉCORS et ILLUSTRATIONS
   Un fichier absent → placeholder SVG automatique. Rien ne casse.
   ============================================================ */

const D = "assets/decors/";
const C = "assets/cg/";
const U = "assets/ui/";

export const DECORS = {
  /* ---- arc Souvenir : décors ---- */
  "univ-cour-jour":   { src: D + "univ-cour-jour.webp",   label: "La cour de l'université" },
  "univ-amphi":       { src: D + "univ-amphi.webp",       label: "L'amphi" },
  "univ-td":          { src: D + "univ-td.webp",          label: "La salle de TD" },
  "univ-cafet":       { src: D + "univ-cafet.webp",       label: "La cafétéria" },
  "placette-jour":    { src: D + "placette-jour.webp",    label: "La placette" },
  "placette-7-mai":   { src: D + "placette-7-mai.webp",   label: "La placette, 7 mai" },
  "route-bus-dore":   { src: D + "route-bus-dore.webp",   label: "La route du bus" },

  /* ---- à générer plus tard : le placeholder prend le relais ---- */
  "alger-ecole":      { src: D + "alger-ecole.webp",      label: "Alger — l'école" },
  "fastfood-soir":    { src: D + "fastfood-soir.webp",    label: "Le fast-food" },
  "resto-soir":       { src: D + "resto-soir.webp",       label: "Le restaurant" },
  "couloir-soutenance": { src: D + "couloir-soutenance.webp", label: "Le couloir" },
  "salle-soutenance": { src: D + "salle-soutenance.webp", label: "La soutenance" },
  "aeroport":         { src: D + "aeroport.webp",         label: "L'aéroport" },
  "perpignan-rue":    { src: D + "perpignan-rue.webp",    label: "Perpignan" },
  "chambre-appel-video": { src: D + "chambre-appel-video.webp", label: "La chambre" },

  /* ---- arc Cendres ---- */
  "bgayet-cendres":   { src: D + "bgayet-cendres.webp",   label: "Bgayet sous la cendre" },
  "gardienne-endormie": { src: D + "gardienne-endormie.webp", label: "La Gardienne endormie" },
  "remparts-nuit":    { src: D + "remparts-nuit.webp",    label: "Les remparts" },
  "mer-sans-reflet":  { src: D + "mer-sans-reflet.webp",  label: "La mer sans reflet" },
  "bibliotheque-memoires": { src: D + "bibliotheque-memoires.webp", label: "La bibliothèque des mémoires" },
  "pic-singes-cendres":  { src: D + "pic-singes-cendres.webp",  label: "Le pic des Singes" },
  "casbah-cendres":      { src: D + "casbah-cendres.webp",      label: "La Casbah" },
  "cap-carbon-cendres":  { src: D + "cap-carbon-cendres.webp",  label: "Le cap Carbon" },
  "kefrida-cendres":     { src: D + "kefrida-cendres.webp",     label: "La cascade suspendue" },

  /* ---- le noir, pour les souvenirs qui manquent ---- */
  "vide":             { src: null, label: "" },

  /* ---- illustrations plein écran ---- */
  "cg-premiere-fois":  { src: C + "cg-premiere-fois.webp",  label: "La première fois" },
  "cg-le-collier":     { src: C + "cg-le-collier.webp",     label: "Le collier" },
  "cg-le-biscuit":     { src: C + "cg-le-biscuit.webp",     label: "Le biscuit" },
  "cg-placette-7-mai": { src: C + "cg-placette-7-mai.webp", label: "7 mai 2022" },
  "cg-alger-perdue":   { src: C + "cg-alger-perdue.webp",   label: "Alger" },
  "cg-resto-septembre": { src: C + "cg-resto-septembre.webp", label: "Le restaurant" },
  "cg-soutenance-photos": { src: C + "cg-soutenance-photos.webp", label: "La sortie de soutenance" },
  "cg-aeroport":       { src: C + "cg-aeroport.webp",       label: "Le départ" },
  "cg-appel-video":    { src: C + "cg-appel-video.webp",    label: "L'appel vidéo" },
  "cg-la-question":    { src: C + "cg-la-question.webp",    label: "La question" },
  "cg-il-a-de-la-chance": { src: C + "cg-il-a-de-la-chance.webp", label: "Il a de la chance" },

  /* ---- interface ---- */
  "ecran-titre":         { src: U + "ecran-titre.webp",         label: "La placette" },
  "ecran-titre-cendres": { src: U + "ecran-titre-cendres.webp", label: "La placette sous la cendre" }
};

/* Le fond noir absolu, pour les scènes sans décor. */
export const DECOR_VIDE = "vide";
