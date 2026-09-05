/* ============================================================
   CHAPITRE 4 — « L'année grise »
   L'été heureux, la chaîne, le visa, et le restaurant de
   septembre. Aucun héroïsme, aucune grande phrase : deux gamins
   de 22 ans qui ne savent pas quoi faire, et qui restent.
   ============================================================ */

export default {
  id: "ch04",
  numero: "4",
  titre: "L'année grise",
  sousTitre: "Été 2022 — septembre",
  peau: "souvenir",
  suivant: "ch05",

  noeuds: [

    /* ---------- 1. L'été des hamburgers ---------- */

    { type: "carton", texte: "Été 2022", sousTitre: "Les vacances", duree: 2600 },
    { type: "musique", piste: "leger", fadeIn: 2200 },
    { type: "decor", image: "fastfood-soir", transition: "fondu", duree: 1200 },

    { type: "narration", texte: "Les vacances arrivent, et avec elles un problème inédit : vous ne vous croisez plus par défaut. Il faut se voir exprès, maintenant." },
    { type: "narration", texte: "Alors vous vous voyez exprès. Quatre fois ? Cinq ? Tu n'as jamais réussi à recompter." },

    { type: "perso", id: "lamia-ete", pose: "sourire", position: "centre" },
    { type: "narration", texte: "Le programme est toujours à peu près le même : un fast-food, des hamburgers, et des heures à parler de rien." },
    { type: "dialogue", perso: "lamia-ete", pose: "rire", texte: "Tu commandes la même chose à chaque fois. À chaque fois." },
    { type: "pensee", texte: "C'est faux. Une fois, tu as pris des frites en plus." },
    { type: "carte", id: "carte-10-hamburger" },
    { type: "souvenir", id: "sv-ete" },

    { type: "attendre", duree: 900 },

    /* ---------- 2. La chaîne ---------- */

    { type: "narration", texte: "Et puis il y a ton anniversaire." },
    { type: "dialogue", perso: "lamia-ete", pose: "genee", texte: "Tiens. C'est pas grand-chose." },
    { type: "narration", texte: "C'est une chaîne, fine, en argent. Au bout, une croix touarègue — une croix du Sud, gravée de petits motifs." },

    { type: "attendre", duree: 1000 },
    { type: "pensee", texte: "Tu la mets tout de suite. Évidemment que tu la mets tout de suite." },
    { type: "dialogue", perso: "lamia-ete", pose: "sourire", texte: "Ça te va bien." },
    { type: "narration", texte: "Ce que tu ne sais pas encore : tu ne l'enlèveras plus. Pas cette année, pas les suivantes. Elle est autour de ton cou pendant que tu lis ces lignes." },
    { type: "carte", id: "carte-06-chaine" },
    { type: "souvenir", id: "sv-chaine" },
    { type: "retirerPerso", id: "lamia-ete" },

    /* ---------- 3. L'engrenage ---------- */

    { type: "musique", arret: true },
    { type: "carton", texte: "La rentrée", duree: 2400 },
    { type: "musique", piste: "gris", fadeIn: 2600 },
    { type: "decor", image: "vide", transition: "noir", duree: 900 },

    { type: "narration", texte: "C'est là que l'année change de couleur." },
    { type: "narration", texte: "Elle a un projet : partir étudier. Un dossier, des documents, des délais, des frais. Elle s'y met sérieusement, comme elle fait tout." },
    { type: "narration", texte: "Et le stress monte. Doucement d'abord, puis plus doucement du tout." },

    { type: "attendre", duree: 900 },
    { type: "narration", texte: "Le visa ne vient pas." },
    { type: "attendre", duree: 1100 },
    { type: "narration", texte: "Pas de drame, pas de lettre solennelle. Juste un refus administratif, quelque part dans une file de refus administratifs. Pour eux, un dossier. Pour elle, un an de sa vie." },

    { type: "narration", texte: "Elle se rabat sur une formation en ligne. Ça devait être la solution de secours ; ça devient une deuxième source de stress. Elle n'arrive pas à s'y tenir — pas par paresse, par épuisement." },
    { type: "narration", texte: "Elle abandonne la formation. Puis elle prend la seule décision possible : une année sabbatique." },
    { type: "souvenir", id: "sv-visa" },

    { type: "attendre", duree: 900 },
    { type: "pensee", texte: "De ton côté, tu regardes tout ça d'un peu loin, et tu ne sais pas quoi faire. Alors tu fais ce que tu sais faire : tu es là. C'est peu. C'est ce que tu as." },

    /* ---------- 4. Le restaurant de septembre ---------- */

    { type: "carton", texte: "Septembre", sousTitre: "Le restaurant", duree: 2800 },
    { type: "decor", image: "resto-soir", transition: "fondu", duree: 1400 },

    { type: "narration", texte: "Vous vous retrouvez dans un restaurant, un soir. Ça faisait un moment." },
    { type: "perso", id: "lamia-ete", pose: "fatiguee", position: "centre" },
    { type: "narration", texte: "Elle va mal. Ça se voit avant même qu'elle parle — à la façon dont elle s'assoit, dont elle pose son téléphone face contre la table, dont elle sourit une demi-seconde trop tard." },

    { type: "narration", texte: "Vous parlez de tout. De sa situation, de la famille, des papiers, de ce que les gens disent. De tout, sauf de vous deux." },
    { type: "pensee", texte: "Et pourtant vous deux, c'est le sujet. Tu le sens dans chaque phrase qu'elle ne finit pas." },

    { type: "attendre", duree: 1200 },
    { type: "dialogue", perso: "lamia-ete", pose: "triste", texte: "Je suis venue pour te dire un truc." },
    { type: "attendre", duree: 1000 },
    { type: "dialogue", perso: "lamia-ete", pose: "triste", texte: "Je pense qu'il faut qu'on arrête." },

    { type: "attendre", duree: 1600, cacherBoite: true },

    { type: "pensee", texte: "Voilà. C'est dit. Le restaurant continue de vivre autour de vous comme si de rien n'était." },

    { type: "choix", question: "Elle te regarde. Elle attend que tu dises quelque chose.", options: [
      { texte: "Tu ne dis rien. Tu la laisses aller au bout.",
        effets: { complicite: 3, flags: { a_ecoute_resto: true } }, aller: "r_ecoute" },
      { texte: "« Non. Attends. Tu te trompes. »",
        effets: { complicite: -1 }, aller: "r_proteste" },
      { texte: "« D'accord. Si c'est ce que tu veux. »",
        effets: { complicite: 0 }, aller: "r_lache" }
    ]},

    { type: "label", nom: "r_ecoute" },
    { type: "narration", texte: "Tu ne dis rien. C'est la chose la plus difficile que tu aies faite de l'année, et l'année était déjà difficile." },
    { type: "narration", texte: "Alors elle parle. Vraiment. Le visa, la formation, l'impression d'être en retard sur tout le monde, la honte de ne rien construire pendant que tout le monde avance." },
    { type: "dialogue", perso: "lamia-ete", pose: "triste", texte: "J'ai rien à t'offrir, là. Je suis à l'arrêt. Toi tu avances, et moi je te freine." },
    { type: "aller", label: "r_coeur" },

    { type: "label", nom: "r_proteste" },
    { type: "narration", texte: "Tu protestes. Trop vite, trop fort. Elle se referme d'un cran — tu le vois à ses épaules." },
    { type: "dialogue", perso: "lamia-ete", pose: "fatiguee", texte: "Laisse-moi finir. S'il te plaît." },
    { type: "narration", texte: "Tu te tais. Elle reprend, plus bas. Le visa, la formation, l'impression d'être en retard sur tout, la honte de ne rien construire." },
    { type: "dialogue", perso: "lamia-ete", pose: "triste", texte: "J'ai rien à t'offrir, là. Je suis à l'arrêt. Toi tu avances, et moi je te freine." },
    { type: "aller", label: "r_coeur" },

    { type: "label", nom: "r_lache" },
    { type: "narration", texte: "Tu dis « d'accord » — et le mot te brûle en sortant. Elle te regarde, un peu surprise. Presque déçue." },
    { type: "dialogue", perso: "lamia-ete", pose: "triste", texte: "…c'est tout ? D'accord ?" },
    { type: "narration", texte: "Non. Ce n'est pas tout. Tu recommences, plus honnêtement cette fois. Et elle parle. Le visa, la formation, la honte de ne rien construire." },
    { type: "dialogue", perso: "lamia-ete", pose: "triste", texte: "J'ai rien à t'offrir, là. Je suis à l'arrêt. Toi tu avances, et moi je te freine." },
    { type: "aller", label: "r_coeur" },

    /* ---------- le cœur de la conversation ---------- */

    { type: "label", nom: "r_coeur" },
    { type: "attendre", duree: 1200 },

    { type: "choix", question: "Elle pense te rendre service en partant.", options: [
      { texte: "« Tu me freines pas. T'es pas un projet, Lamia. »",
        effets: { complicite: 4, flags: { a_trouve_les_mots: true } }, aller: "c_mots" },
      { texte: "« Mais non, ça va aller, tout va s'arranger. »",
        effets: { complicite: -1 }, aller: "c_rassure" },
      { texte: "« Alors on fait un plan. Étape par étape. Je peux t'aider à— »",
        effets: { complicite: 0 }, aller: "c_plan" }
    ]},

    { type: "label", nom: "c_mots" },
    { type: "narration", texte: "Ça sort comme ça. Pas préparé, pas brillant. Mais vrai." },
    { type: "dialogue", perso: "lamia-ete", pose: "triste", texte: "…" },
    { type: "narration", texte: "Elle regarde la table. Longtemps." },
    { type: "aller", label: "c_suite" },

    { type: "label", nom: "c_rassure" },
    { type: "narration", texte: "« Tout va s'arranger. » Tu l'entends sortir de ta bouche et tu sais déjà que c'est raté. Elle n'a pas besoin qu'on lui promette la météo." },
    { type: "dialogue", perso: "lamia-ete", pose: "fatiguee", texte: "Tu peux pas savoir ça." },
    { type: "narration", texte: "Non. Tu ne peux pas. Alors tu arrêtes de promettre, et tu dis la seule chose vraie que tu as." },
    { type: "aller", label: "c_suite" },

    { type: "label", nom: "c_plan" },
    { type: "narration", texte: "Tu commences à construire un plan, des étapes, des solutions. Elle t'arrête d'un regard." },
    { type: "dialogue", perso: "lamia-ete", pose: "fatiguee", texte: "J'ai pas besoin d'un conseiller d'orientation." },
    { type: "pensee", texte: "Non. Elle a besoin d'autre chose, et tu mets une seconde de trop à comprendre quoi." },
    { type: "aller", label: "c_suite" },

    { type: "label", nom: "c_suite" },
    { type: "attendre", duree: 1000 },

    { type: "narration", texte: "Alors tu poses les deux seules choses que tu as à offrir, et qui tiennent en deux phrases :" },
    { type: "narration", texte: "« Prends tout le temps qu'il te faut. Et moi je reste — quoi qu'il arrive. »" },

    { type: "attendre", duree: 1600 },
    { type: "narration", texte: "Silence. Le serveur passe, comprend qu'il ne faut pas, repart." },
    { type: "attendre", duree: 1200 },

    { type: "dialogue", perso: "lamia-ete", pose: "triste", texte: "Je voulais te quitter, ce soir. J'étais venue pour ça." },
    { type: "attendre", duree: 900 },
    { type: "dialogue", perso: "lamia-ete", pose: "pensive", texte: "Et je suis là, et j'y arrive pas. Je veux pas. C'est peut-être égoïste, mais je veux pas." },

    { type: "attendre", duree: 1400 },
    { type: "pensee", texte: "Tu ne sauras jamais exactement ce qui a fait pencher la soirée. Un mélange de choses, sans doute. Aucune héroïque." },
    { type: "narration", texte: "Vous restez encore une heure. Personne ne prononce de grande phrase. Vous êtes juste deux personnes de vingt-deux ans, fatiguées, qui décident de continuer." },
    { type: "souvenir", id: "sv-restaurant" },

    { type: "retirerPerso", id: "lamia-ete" },
    { type: "attendre", duree: 1000 },

    /* ---------- 5. La remontée ---------- */

    { type: "decor", image: "vide", transition: "noir", duree: 1000 },
    { type: "narration", texte: "Ce qui suit ne tient pas en une scène, parce que ça ne s'est pas passé en une scène." },
    { type: "narration", texte: "Ça s'est passé en semaines. En petits mieux. En jours sans nouvelles suivis de jours avec." },

    { type: "musique", piste: "souvenir", fadeIn: 2600 },
    { type: "decor", image: "univ-cour-jour", transition: "fondu", duree: 1400 },

    { type: "narration", texte: "Et puis, doucement, elle se reprend. Pas d'un coup — personne ne se reprend d'un coup. Mais la direction change." },
    { type: "narration", texte: "L'année sabbatique fait son travail : elle respire, elle range, elle décide. À la rentrée suivante, elle reprend ses études. Master 1." },
    { type: "pensee", texte: "Et vous deux, quelque part dans tout ça, vous êtes devenus plus solides. Pas parce que c'était facile. Précisément parce que ça ne l'était pas." },
    { type: "souvenir", id: "sv-remontee" },

    { type: "musique", arret: true },
    { type: "carton", texte: "Fin du chapitre 4", sousTitre: "Le pire est derrière", duree: 2800 },

    { type: "finChapitre", suivant: "ch05" }
  ]
};
