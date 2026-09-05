/* ============================================================
   LE RÊVE — mini-chapitre pont, juste après le chapitre 5.
   Trente secondes de l'autre monde, aucun spoiler, un
   cliffhanger : la suite se réveille le 1er octobre.
   ============================================================ */

export default {
  id: "reve01",
  numero: "✦",
  titre: "Le rêve",
  sousTitre: "Cette nuit-là",
  peau: "souvenir",

  noeuds: [

    /* ---------- 1. Après l'appel ---------- */

    { type: "carton", texte: "Cette nuit-là", sousTitre: "Béjaïa", duree: 2800 },
    { type: "musique", piste: "tendre", fadeIn: 2400 },
    { type: "decor", image: "vide", transition: "fondu", duree: 1000 },

    { type: "narration", texte: "L'appel s'est terminé tard, comme d'habitude. Deux « bonne nuit », puis un troisième, puis un « vas-y raccroche », puis personne ne raccroche." },
    { type: "narration", texte: "À Béjaïa, elle pose son téléphone, écran contre la table de nuit. Elle s'endort vite. Elle s'endort toujours vite quand la journée s'est bien finie." },

    { type: "attendre", duree: 1400 },
    { type: "musique", arret: true },
    { type: "attendre", duree: 1200 },

    /* ---------- 2. Le rêve ---------- */

    { type: "peau", nom: "cendres" },
    { type: "decor", image: "bgayet-cendres", transition: "fondu", duree: 2000 },

    { type: "narration", texte: "Et cette nuit-là, elle rêve." },
    { type: "attendre", duree: 1200 },

    { type: "narration", texte: "Une ville de pierre, penchée sur une mer noire. Elle la connaît sans la connaître — comme on reconnaît une maison dans laquelle on n'a jamais vécu." },
    { type: "narration", texte: "Il neige. Non. Ce n'est pas de la neige. C'est tiède, c'est gris, et ça ne fait aucun bruit en touchant le sol." },

    { type: "perso", id: "lamia-cendres", pose: "neutre", position: "centre" },
    { type: "attendre", duree: 1500, cacherBoite: true },

    { type: "narration", texte: "Elle baisse les yeux : elle porte des vêtements qu'elle n'a jamais eus. Une cape lourde. Des sangles de cuir. Et au cou, un pendentif qu'elle connaît — mais en fer noir, comme passé au feu." },
    { type: "dialogue", perso: "lamia-cendres", texte: "…c'est quoi, cet endroit ?" },

    { type: "attendre", duree: 1300 },
    { type: "narration", texte: "Personne ne répond. La ville entière se tait. Même la mer, en bas, ne fait pas le bruit d'une mer." },

    { type: "attendre", duree: 1100 },
    { type: "narration", texte: "Et puis, très loin, au bout d'une rue grise, elle la voit." },
    { type: "attendre", duree: 900 },
    { type: "narration", texte: "Une tache rouge. La seule couleur de tout le rêve." },
    { type: "dialogue", perso: "lamia-cendres", pose: "surprise", texte: "Attends. Je te connais, toi." },

    { type: "narration", texte: "Elle fait un pas. La cendre se resserre autour d'elle comme une foule polie." },
    { type: "narration", texte: "Quelque part derrière son épaule, une voix l'appelle. Pas par son prénom — comme si la voix n'en avait plus le droit. Ou plus le souvenir." },
    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Qui est là ?" },

    { type: "attendre", duree: 1500, cacherBoite: true },
    { type: "secousse", duree: 500 },
    { type: "voile", style: "flash", duree: 500 },

    /* ---------- 3. Le réveil ---------- */

    { type: "retirerPerso", id: "lamia-cendres" },
    { type: "peau", nom: "souvenir" },
    { type: "decor", image: "vide", transition: "fondu", duree: 900 },

    { type: "narration", texte: "Elle se réveille d'un coup, assise dans son lit, le cœur à cent vingt." },
    { type: "narration", texte: "Dehors, Béjaïa dort normalement. Pas de cendre. Juste la nuit, la vraie." },

    { type: "attendre", duree: 1000 },
    { type: "narration", texte: "Au matin, elle t'envoie un message : « j'ai fait un rêve trop bizarre. je te raconte ce soir. »" },
    { type: "pensee", texte: "Elle ne te racontera pas ce soir. Certaines histoires choisissent leur date toutes seules." },

    { type: "musique", arret: true },
    { type: "carton", texte: "À suivre…", sousTitre: "La suite se réveille le 1ᵉʳ octobre", duree: 4200 },

    { type: "finChapitre" }
  ]
};
