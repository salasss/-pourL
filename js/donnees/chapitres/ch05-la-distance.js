/* ============================================================
   CHAPITRE 5 — « La distance »
   Les masters, les deux soutenances, le CDI, Perpignan,
   et aujourd'hui. Le dernier chapitre écrit — pour l'instant.
   ============================================================ */

export default {
  id: "ch05",
  numero: "5",
  titre: "La distance",
  sousTitre: "2023 — aujourd'hui",
  peau: "souvenir",

  noeuds: [

    /* ---------- 1. Les masters ---------- */

    { type: "carton", texte: "L'année d'après", sousTitre: "Elle en M1, toi en M2", duree: 2600 },
    { type: "musique", piste: "souvenir", fadeIn: 2400 },
    { type: "decor", image: "univ-cour-jour", transition: "fondu", duree: 1200 },

    { type: "narration", texte: "La fac vous reprend tous les deux, mais plus au même étage : elle attaque son Master 1, toi tu finis ton Master 2." },
    { type: "narration", texte: "Vos emplois du temps ne se ressemblent plus. Alors vous vous croisez entre deux cours, dix minutes par-ci, un café par-là." },

    { type: "perso", id: "lamia", pose: "sourire", position: "centre" },
    { type: "dialogue", perso: "lamia", texte: "J'ai vingt minutes. Raconte vite." },
    { type: "pensee", texte: "Dix minutes volées entre deux amphis. Il y a deux ans, tu aurais donné une semaine pour dix minutes comme ça." },
    { type: "retirerPerso", id: "lamia" },

    /* ---------- 2. Ta soutenance ---------- */

    { type: "carton", texte: "Ta soutenance", duree: 2400 },
    { type: "decor", image: "salle-soutenance", transition: "fondu", duree: 1100 },

    { type: "narration", texte: "Le grand jour arrive pour toi en premier. La salle, le jury, les slides que tu connais par cœur et qui te semblent soudain écrites par quelqu'un d'autre." },
    { type: "pensee", texte: "Vingt minutes de présentation. Tu as déjà survécu à pire : un exposé sur l'UI et l'UX, un jour, avec un regard vert au fond de la salle." },
    { type: "narration", texte: "Et cette fois, le regard vert n'est pas au fond de la salle pour te déstabiliser. Elle est là pour toi. À tes côtés." },
    { type: "attendre", duree: 900 },
    { type: "narration", texte: "Tu soutiens. Ça passe. Les félicitations, les accolades, les photos." },
    { type: "pensee", texte: "Dans le brouillard de ce jour-là, tu retiens une image : elle, quelque part dans la salle, qui sourit sans essayer de le cacher. Pour une fois." },
    { type: "souvenir", id: "sv-soutenance-lui" },

    /* ---------- 3. Le CDI ---------- */

    { type: "decor", image: "vide", transition: "noir", duree: 900 },
    { type: "narration", texte: "Ensuite, tout s'enchaîne vite : le stage de fin d'études se passe bien, la boîte te garde. CDI. Direct." },
    { type: "narration", texte: "Tu deviens quelqu'un qui se lève le matin pour aller travailler. Ça fait bizarre à écrire, mais c'est arrivé." },
    { type: "pensee", texte: "Étudiant hier, salarié aujourd'hui. Personne ne te prévient que la frontière est aussi fine." },

    /* ---------- 4. Sa soutenance ---------- */

    { type: "carton", texte: "Sa soutenance à elle", duree: 2400 },
    { type: "decor", image: "couloir-soutenance", transition: "fondu", duree: 1100 },

    { type: "narration", texte: "Un an après toi, c'est son tour. Master validé, mémoire soutenu — mais la salle est fermée au public : elle et les trois jurés. Personne d'autre." },
    { type: "narration", texte: "Alors tu attends dans le couloir, avec ses amis. Une chaise en plastique, une porte close, et le bruit assourdi d'une voix que tu connais par cœur." },
    { type: "pensee", texte: "C'est une torture très particulière d'entendre la personne que tu aimes passer l'oral le plus important de sa vie à travers une porte." },
    { type: "attendre", duree: 1200 },
    { type: "narration", texte: "La porte s'ouvre." },
    { type: "attendre", duree: 900 },

    { type: "cg", image: "cg-soutenance-photos", legende: "Elle a réussi", carte: "carte-11-toque" },

    { type: "narration", texte: "À la sortie, vous prenez toutes les photos qu'il est humainement possible de prendre. Toutes. Elle rit sur chacune." },
    { type: "narration", texte: "Elle est heureuse. Tu es heureux. Après l'année grise, cette image-là vaut de l'or." },
    { type: "souvenir", id: "sv-soutenance-elle" },

    /* ---------- 5. Perpignan ---------- */

    { type: "musique", arret: true },
    { type: "carton", texte: "Un an plus tard", duree: 2400 },
    { type: "musique", piste: "tendre", fadeIn: 2600 },
    { type: "decor", image: "vide", transition: "noir", duree: 900 },

    { type: "narration", texte: "Après environ un an de CDI, un mail arrive. L'université de Perpignan. Accepté." },
    { type: "attendre", duree: 1000 },
    { type: "narration", texte: "C'est une bonne nouvelle. C'est même exactement la nouvelle que tu attendais. Alors pourquoi tu la relis quatre fois avec une boule au ventre ?" },
    { type: "pensee", texte: "Parce que Perpignan, c'est de l'autre côté de la mer. Et que de l'autre côté de la mer, il y a elle." },

    { type: "decor", image: "aeroport", transition: "fondu", duree: 1300 },
    { type: "narration", texte: "Tu pars. Pas parce que c'est facile — parce que c'est la suite logique, et que vous avez déjà survécu à plus dur qu'une mer." },

    { type: "cg", image: "cg-aeroport", legende: "Le départ", carte: "carte-12-billet" },
    { type: "souvenir", id: "sv-perpignan" },

    /* ---------- 6. Aujourd'hui ---------- */

    { type: "carton", texte: "Aujourd'hui", sousTitre: "Perpignan — Béjaïa", duree: 2600 },
    { type: "decor", image: "chambre-appel-video", transition: "fondu", duree: 1300 },

    { type: "narration", texte: "Ça fait un an que tu es en France. La distance, vous l'avez apprivoisée comme le reste : sans mode d'emploi, à deux." },
    { type: "narration", texte: "Vous vous parlez tout le temps. Les appels vidéo le soir, les messages dans la journée, les mêmes bêtises qu'à la cafétéria — juste avec un écran au milieu." },

    { type: "cg", image: "cg-appel-video", legende: "Deux lumières, une conversation" },

    { type: "attendre", duree: 1000 },
    { type: "narration", texte: "Quatre ans. Et quelques." },
    { type: "attendre", duree: 1200 },

    { type: "pensee", texte: "Il y a quatre ans, sur la placette, elle t'a demandé : « Pourquoi faire ? »" },
    { type: "pensee", texte: "Tu as répondu : pour bâtir une famille. Être ensemble pour la vie. S'aimer toute la vie." },
    { type: "attendre", duree: 1400 },
    { type: "narration", texte: "Jusqu'ici, tout se déroule exactement comme prévu." },

    { type: "attendre", duree: 1200 },
    { type: "carte", id: "carte-13-yeux" },
    { type: "souvenir", id: "sv-aujourdhui" },

    { type: "musique", arret: true },
    { type: "carton", texte: "Ce n'est pas une fin.", sousTitre: "L'histoire continue — sans écran, cette fois", duree: 3600 },

    { type: "finChapitre", suivant: "reve01" }
  ]
};
