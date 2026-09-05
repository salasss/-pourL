/* ============================================================
   PERSONNAGES
   Salas n'a pas de sprite : on joue à travers ses yeux.
   Il n'apparaît que dans les illustrations plein écran.
   ============================================================ */

const S = "assets/sprites/";

export const PERSONNAGES = {
  lamia: {
    nom: "Lamia",
    position: "centre",
    poses: {
      neutre:   S + "lamia-neutre.webp",
      sourire:  S + "lamia-sourire.webp",
      rire:     S + "lamia-rire.webp",
      regard:   S + "lamia-regard.webp",
      genee:    S + "lamia-genee.webp",
      boudeuse: S + "lamia-boudeuse.webp",
      surprise: S + "lamia-surprise.webp",
      pensive:  S + "lamia-pensive.webp",
      triste:   S + "lamia-triste.webp",
      fatiguee: S + "lamia-fatiguee.webp"
    }
  },

  /* La tenue de l'été 2022 et de l'année grise : top côtelé crème à petites
     fleurs, colliers en cordon noir (croix d'Agadez + pendentif berbère).
     Tant que les fichiers lamia-ete-*.webp n'existent pas, le moteur retombe
     sur la tenue étudiante — jamais sur un placeholder. */
  "lamia-ete": {
    nom: "Lamia",
    position: "centre",
    poses: {
      neutre:   [S + "lamia-ete-neutre.webp",   S + "lamia-neutre.webp"],
      sourire:  [S + "lamia-ete-sourire.webp",  S + "lamia-sourire.webp"],
      rire:     [S + "lamia-ete-rire.webp",     S + "lamia-rire.webp"],
      genee:    [S + "lamia-ete-genee.webp",    S + "lamia-genee.webp"],
      surprise: [S + "lamia-ete-surprise.webp", S + "lamia-surprise.webp"],
      pensive:  [S + "lamia-ete-pensive.webp",  S + "lamia-pensive.webp"],
      triste:   [S + "lamia-ete-triste.webp",   S + "lamia-triste.webp"],
      fatiguee: [S + "lamia-ete-fatiguee.webp", S + "lamia-fatiguee.webp"]
    }
  },

  "lamia-cendres": {
    nom: "Lamia",
    position: "centre",
    poses: {
      neutre:     S + "lamia-cendres-neutre.webp",
      determinee: S + "lamia-cendres-determinee.webp",
      epuisee:    S + "lamia-cendres-epuisee.webp",
      marquee:    S + "lamia-cendres-marquee.webp"
    }
  },

  kenza:    { nom: "Kenza",    position: "gauche", poses: { neutre: S + "kenza.webp" } },
  zilasene: { nom: "Zilasène", position: "gauche", poses: { neutre: S + "zilasene.webp" } },

  /* voix sans sprite */
  salas: { nom: "Salas", poses: {} },
  voix:  { nom: "…",     poses: {} }
};
