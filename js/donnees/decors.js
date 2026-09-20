/* ============================================================
   DÉCORS et ILLUSTRATIONS
   Un fichier absent → placeholder SVG automatique. Rien ne casse.

   Tout ce qui est déclaré ici est utilisé quelque part. Une entrée
   qu'aucun chapitre n'appelle fait mentir l'inventaire des images
   qui restent à produire — on n'en garde pas « pour plus tard ».
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
  "fastfood-soir":    { src: D + "fastfood-soir.webp",    label: "Le fast-food" },
  "resto-soir":       { src: D + "resto-soir.webp",       label: "Le restaurant" },
  "couloir-soutenance": { src: D + "couloir-soutenance.webp", label: "Le couloir" },
  "salle-soutenance": { src: D + "salle-soutenance.webp", label: "La soutenance" },
  "aeroport":         { src: D + "aeroport.webp",         label: "L'aéroport" },
  "chambre-appel-video": { src: D + "chambre-appel-video.webp", label: "La chambre" },

  /* ---- arc Cendres — les 7 décors, lots 33 à 39 ---- */
  "bgayet-cendres":      { src: D + "bgayet-cendres.webp",      label: "Bgayet sous la cendre" },
  "remparts-nuit":       { src: D + "remparts-nuit.webp",       label: "Les remparts" },
  "bibliotheque-memoires": { src: D + "bibliotheque-memoires.webp", label: "La bibliothèque des mémoires" },
  "pic-singes-cendres":  { src: D + "pic-singes-cendres.webp",  label: "Le Pic des Voleurs" },
  "casbah-cendres":      { src: D + "casbah-cendres.webp",      label: "La Doyenne" },
  "cap-carbon-cendres":  { src: D + "cap-carbon-cendres.webp",  label: "La Lanterne Morte" },
  "kefrida-cendres":     { src: D + "kefrida-cendres.webp",     label: "L'Eau Debout" },

  /* ---- le noir, pour les souvenirs qui manquent ---- */
  "vide":             { src: null, label: "" },

  /* ---- illustrations plein écran ---- */
  "cg-premiere-fois":  { src: C + "cg-premiere-fois.webp",  label: "La première fois" },
  "cg-le-collier":     { src: C + "cg-le-collier.webp",     label: "Le collier" },
  "cg-le-biscuit":     { src: C + "cg-le-biscuit.webp",     label: "Le biscuit" },
  "cg-placette-7-mai": { src: C + "cg-placette-7-mai.webp", label: "7 mai 2022" },
  "cg-soutenance-photos": { src: C + "cg-soutenance-photos.webp", label: "La sortie de soutenance" },
  "cg-aeroport":       { src: C + "cg-aeroport.webp",       label: "Le départ" },
  "cg-appel-video":    { src: C + "cg-appel-video.webp",    label: "L'appel vidéo" },

  /* ---- interface ---- */
  "ecran-titre":       { src: U + "ecran-titre.webp",       label: "La placette" }
};

/* Le fond noir absolu, pour les scènes sans décor. */
export const DECOR_VIDE = "vide";
