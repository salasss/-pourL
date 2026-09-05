/* ============================================================
   AUDIO — pistes attendues.
   Les fichiers n'existent pas encore : le moteur ne joue rien
   et ne plante pas. Voir LISEZMOI.md pour la liste à trouver.
   ============================================================ */

const A = "assets/audio/";

export const MUSIQUES = {
  "theme-titre":    { src: A + "theme-titre.mp3",    desc: "Piano seul, lent, chaleureux, un peu nostalgique. L'écran-titre." },
  "souvenir":       { src: A + "souvenir.mp3",       desc: "Guitare acoustique et nappes discrètes. Les chapitres de fac." },
  "leger":          { src: A + "leger.mp3",          desc: "Plus rythmé, léger, presque joyeux. La cafétéria, le flirt." },
  "tendre":         { src: A + "tendre.mp3",         desc: "Cordes douces, très calme. La placette, le 7 mai." },
  "gris":           { src: A + "gris.mp3",           desc: "Piano dépouillé, mineur, sans percussion. L'année grise." },
  "cendres":        { src: A + "cendres.mp3",        desc: "Drone grave, cordes frottées, cloche lointaine. L'arc dark fantasy." }
};

export const BRUITAGES = {
  "clic":     { src: A + "clic.mp3",     desc: "Clic feutré, très court. Avancer dans le dialogue." },
  "carte":    { src: A + "carte.mp3",    desc: "Petit carillon clair. Une carte se débloque." },
  "coeur":    { src: A + "coeur.mp3",    desc: "Note douce ascendante. La complicité monte." },
  "cour":     { src: A + "cour.mp3",     desc: "Ambiance de cour d'université, voix lointaines, en boucle." }
};
