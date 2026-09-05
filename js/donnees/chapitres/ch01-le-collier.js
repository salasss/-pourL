/* ============================================================
   CHAPITRE 1 — « Le collier »
   L3, rentrée 2021. La première vraie phrase.
   ============================================================ */

export default {
  id: "ch01",
  numero: "1",
  titre: "Le collier",
  sousTitre: "Troisième année — 2021",
  peau: "souvenir",
  suivant: "ch02",

  noeuds: [

    /* ---------- 1. La présentation ---------- */

    { type: "carton", texte: "Troisième année", sousTitre: "Module Interaction Homme-Machine", duree: 2600 },
    { type: "musique", piste: "souvenir", fadeIn: 2200 },
    { type: "decor", image: "univ-td", transition: "fondu", duree: 1100 },

    { type: "narration", texte: "Vingt minutes d'exposé sur l'UI et l'UX. Tu as préparé tes slides trois soirs de suite. Tu connais ton texte par cœur." },
    { type: "pensee", texte: "L'interface, c'est ce que l'utilisateur voit. L'expérience, c'est ce qu'il ressent. Facile." },

    { type: "narration", texte: "Tu commences. Ça se passe bien. La salle écoute à peu près, ce qui, un mardi matin, est un triomphe." },

    { type: "attendre", duree: 800 },
    { type: "narration", texte: "Et puis tu regardes le fond de la classe." },
    { type: "perso", id: "lamia", pose: "regard", position: "centre" },
    { type: "attendre", duree: 1400, cacherBoite: true },

    { type: "narration", texte: "Elle est assise tout au fond, avec une autre fille. Elle ne prend pas de notes. Elle te regarde." },
    { type: "pensee", texte: "Ce n'est pas un regard insistant. C'est pire. C'est un regard calme." },

    { type: "narration", texte: "Tu perds le fil au milieu d'une phrase." },
    { type: "secousse", duree: 400 },
    { type: "pensee", texte: "…l'expérience utilisateur, donc, c'est… c'est ce que… " },
    { type: "pensee", texte: "Ce que l'utilisateur ressent. C'est écrit sur la slide. C'est écrit derrière toi, en gros, en gras." },

    { type: "narration", texte: "Tu retrouves ta phrase. Tu finis ton exposé. Personne n'a rien remarqué." },

    { type: "choix", question: "Quinze secondes de blanc. Tu fais quoi ?", options: [
      { texte: "Tu enchaînes comme si de rien n'était. Personne n'a rien vu.",
        effets: { complicite: 1 }, aller: "c1_enchaine" },
      { texte: "Tu regardes ailleurs pour le reste de la présentation.",
        effets: { complicite: 0 }, aller: "c1_evite" },
      { texte: "Tu la regardes en face et tu continues.",
        effets: { complicite: 3, flags: { a_soutenu_regard: true } }, aller: "c1_face" }
    ]},

    { type: "label", nom: "c1_enchaine" },
    { type: "narration", texte: "Tu reprends au mot près. Tu es plutôt fier de toi. Le prof met 14, ce qui est sa façon à lui de dire que c'était bien." },
    { type: "aller", label: "c1_suite" },

    { type: "label", nom: "c1_evite" },
    { type: "narration", texte: "Tu passes les cinq dernières minutes à parler au mur du fond à gauche. C'est efficace. C'est aussi lâche, et tu le sais." },
    { type: "aller", label: "c1_suite" },

    { type: "label", nom: "c1_face" },
    { type: "narration", texte: "Tu la regardes. Elle ne détourne pas les yeux." },
    { type: "dialogue", perso: "lamia", pose: "sourire", texte: "…" },
    { type: "pensee", texte: "Elle a haussé un sourcil. Un seul. Tu vas y penser jusqu'à ce soir." },
    { type: "aller", label: "c1_suite" },

    { type: "label", nom: "c1_suite" },
    { type: "souvenir", id: "sv-presentation" },
    { type: "retirerPerso", id: "lamia" },

    /* ---------- 2. Le collier ---------- */

    { type: "attendre", duree: 700 },
    { type: "narration", texte: "C'est en rangeant ton portable que tu le vois. Elle est passée devant toi pour sortir." },

    { type: "cg", image: "cg-le-collier", legende: "Les Ailes de la Liberté", carte: "carte-02-ailes" },

    { type: "pensee", texte: "Une aile blanche, une aile bleue, croisées. Les Ailes de la Liberté." },
    { type: "pensee", texte: "Le Bataillon d'Exploration. Attack on Titan." },

    { type: "narration", texte: "Tu restes planté deux secondes de trop dans le couloir." },
    { type: "pensee", texte: "Personne ne porte ça par hasard. On ne met pas le logo du Bataillon d'Exploration autour de son cou si on n'a pas passé un certain nombre d'heures à regarder des gens se faire manger." },
    { type: "pensee", texte: "Ce qui veut dire qu'il existe un sujet. Un vrai. Un sur lequel tu es imbattable." },

    { type: "souvenir", id: "sv-collier" },

    /* ---------- 3. L'infiltration ---------- */

    { type: "decor", image: "univ-cour-jour", transition: "fondu", duree: 900 },
    { type: "narration", texte: "Les semaines suivantes, le hasard fait bien les choses. Enfin — le hasard, avec un léger coup de pouce." },

    { type: "narration", texte: "Tu te retrouves de plus en plus souvent avec le même groupe qu'elle. Zilasène, Yasmine, Saïd, Yassine. Des gens bien, d'ailleurs. Ça, tu ne l'avais pas prévu." },
    { type: "pensee", texte: "Tu es en train de te faire de vrais amis en essayant d'approcher une fille. Il y a pire comme dégât collatéral." },

    { type: "narration", texte: "Et pendant tout ce temps, tu ne lui adresses toujours pas la parole. Pas directement. Un « salut » collectif, un rire à une blague qui n'était pas la tienne." },
    { type: "pensee", texte: "Tu as une raison de lui parler autour du cou, et tu attends. Franchement, tu attends quoi ?" },

    /* ---------- 4. L'amphi — le plan qui rate ---------- */

    { type: "carton", texte: "Cours de Génie Logiciel", sousTitre: "Amphi B", duree: 2200 },
    { type: "decor", image: "univ-amphi", transition: "fondu", duree: 1000 },

    { type: "narration", texte: "Rang du milieu. Le prof parle de cycles en V depuis quarante minutes. Elle est assise trois places plus loin, derrière Zilasène." },
    { type: "pensee", texte: "Bon. Plan." },
    { type: "pensee", texte: "Tu ne vas pas lui demander à elle — ce serait trop direct, elle comprendrait tout de suite. Tu vas lancer le sujet à côté, tranquillement, et elle rebondira d'elle-même." },
    { type: "pensee", texte: "C'est élégant. C'est subtil. C'est un plan de génie." },

    { type: "choix", question: "Tu te penches vers Zilasène.", options: [
      { texte: "« Zilasène, tu regardes Attack on Titan, toi ? »",
        effets: { complicite: 0, flags: { plan_zilasene: true } }, aller: "z_plan" },
      { texte: "Non. Tu lui demandes à elle. Directement.",
        effets: { complicite: 4, flags: { a_ose_tot: true } }, aller: "z_direct" },
      { texte: "Tu ne dis rien. Encore une fois.",
        effets: { complicite: -1 }, aller: "z_rien" }
    ]},

    { type: "label", nom: "z_plan" },
    { type: "perso", id: "zilasene", pose: "neutre", position: "gauche" },
    { type: "dialogue", perso: "zilasene", texte: "Attack on quoi ?" },
    { type: "pensee", texte: "…" },
    { type: "dialogue", perso: "zilasene", texte: "C'est un film ? C'est quoi, c'est un truc de jeu vidéo ?" },
    { type: "narration", texte: "Zilasène te regarde avec une gentillesse absolue et une incompréhension totale. Il ne connaît pas. Il n'a jamais connu. Il ne connaîtra jamais." },
    { type: "pensee", texte: "Le plan est mort. Il est mort si vite qu'il n'a même pas eu le temps d'être un plan." },
    { type: "dialogue", perso: "zilasene", texte: "Attends, envoie-moi le nom en message, je vais regarder." },
    { type: "narration", texte: "Il ne regardera pas." },
    { type: "retirerPerso", id: "zilasene" },
    { type: "souvenir", id: "sv-zilasene" },
    { type: "aller", label: "z_suite" },

    { type: "label", nom: "z_direct" },
    { type: "perso", id: "lamia", pose: "surprise", position: "centre" },
    { type: "narration", texte: "Tu te penches. Pas vers Zilasène. Vers elle." },
    { type: "dialogue", perso: "lamia", pose: "surprise", texte: "Hein ? Moi ?" },
    { type: "dialogue", perso: "lamia", pose: "sourire", texte: "Ouais, je regarde. Pourquoi, ça se voit ?" },
    { type: "pensee", texte: "Elle a un pendentif du Bataillon d'Exploration autour du cou. Oui, ça se voit un peu." },
    { type: "dialogue", perso: "lamia", pose: "boudeuse", texte: "Bon, ça va. Chut, il parle." },
    { type: "narration", texte: "Elle se retourne vers le tableau. Elle sourit encore trois secondes après, et tu le vois." },
    { type: "retirerPerso", id: "lamia" },
    { type: "aller", label: "z_suite" },

    { type: "label", nom: "z_rien" },
    { type: "narration", texte: "Tu ne dis rien. Le cours se termine. Tu ranges tes affaires en te traitant de tous les noms, ce qui est devenu une routine assez confortable." },
    { type: "aller", label: "z_suite" },

    { type: "label", nom: "z_suite" },

    /* ---------- 5. La vraie première phrase ---------- */

    { type: "decor", image: "univ-cour-jour", transition: "fondu", duree: 900 },
    { type: "narration", texte: "Fin de l'amphi. Tout le groupe descend vers le TD de génie logiciel, au bloc d'à côté. Cinq minutes de marche. Tout le monde parle en même temps." },
    { type: "perso", id: "lamia", pose: "neutre", position: "centre" },
    { type: "narration", texte: "Elle marche à côté de toi. Pas exprès. Juste parce que c'est comme ça que le groupe s'est réparti." },

    { type: "pensee", texte: "Cinq minutes. Tu as cinq minutes." },

    { type: "choix", question: "C'est maintenant.", options: [
      { texte: "« Ah, mais tu connais Attack on Titan ? »",
        effets: { complicite: 5, flags: { a_ose: true }, souvenir: "sv-premiere-phrase" },
        aller: "q_ose" },
      { texte: "« Il est bien, ton collier. »",
        effets: { complicite: 3, flags: { a_complimente: true }, souvenir: "sv-premiere-phrase" },
        aller: "q_collier" },
      { texte: "Tu parles du TD. C'est un sujet, techniquement.",
        effets: { complicite: 1 }, aller: "q_td" }
    ]},

    { type: "label", nom: "q_ose" },
    { type: "narration", texte: "Ça sort. Tu ne sais pas très bien comment, mais ça sort." },
    { type: "dialogue", perso: "lamia", pose: "surprise", texte: "Attends — tu regardes ?" },
    { type: "pensee", texte: "Tu sais déjà qu'elle regarde. Tu as vu le collier il y a trois semaines. Tu n'as fait que poser une question dont tu connaissais la réponse." },
    { type: "pensee", texte: "Ce n'est pas de la triche. C'est de la préparation." },
    { type: "dialogue", perso: "lamia", pose: "rire", texte: "Non mais franchement, personne dans cette classe ne regarde. Personne." },
    { type: "aller", label: "q_suite" },

    { type: "label", nom: "q_collier" },
    { type: "dialogue", perso: "lamia", pose: "genee", texte: "Ah — merci." },
    { type: "attendre", duree: 700 },
    { type: "dialogue", perso: "lamia", pose: "regard", texte: "…tu sais ce que c'est, ou tu dis ça comme ça ?" },
    { type: "pensee", texte: "C'est un test. C'est clairement un test." },
    { type: "dialogue", perso: "lamia", pose: "surprise", texte: "Le Bataillon d'Exploration. D'accord. D'accord !" },
    { type: "aller", label: "q_suite" },

    { type: "label", nom: "q_td" },
    { type: "dialogue", perso: "lamia", pose: "neutre", texte: "Ouais, il paraît qu'il ramasse les comptes rendus aujourd'hui." },
    { type: "narration", texte: "Vous parlez du TD pendant deux minutes trente. Deux minutes trente que tu ne récupéreras jamais." },
    { type: "pensee", texte: "Puis, sans prévenir, tu changes de sujet." },
    { type: "dialogue", perso: "lamia", pose: "surprise", texte: "Attack on Titan ? Attends, tu regardes ?" },
    { type: "aller", label: "q_suite" },

    { type: "label", nom: "q_suite" },
    { type: "attendre", duree: 600 },

    { type: "narration", texte: "Et là, ça part." },
    { type: "dialogue", perso: "lamia", pose: "rire", texte: "Non parce que moi j'ai vu la saison 3 deux fois. Deux fois." },
    { type: "dialogue", perso: "lamia", pose: "neutre", texte: "One Piece aussi, mais bon, One Piece c'est pas pareil, c'est une religion." },
    { type: "pensee", texte: "Elle parle vite quand elle parle de ça. Tu ne l'avais jamais entendue parler vite." },
    { type: "dialogue", perso: "lamia", pose: "sourire", texte: "Hunter x Hunter, franchement, la meilleure écriture. Je prends pas de débat." },

    { type: "choix", question: "Elle ne prend pas de débat.", options: [
      { texte: "« D'accord. Mais Dragon Ball existe. »",
        effets: { complicite: 3, flags: { a_taquine: true } }, aller: "d_taquine" },
      { texte: "« Ouais, non, t'as raison. »",
        effets: { complicite: 1 }, aller: "d_daccord" },
      { texte: "Tu la laisses parler.",
        effets: { complicite: 2, flags: { a_ecoute: true } }, aller: "d_ecoute" }
    ]},

    { type: "label", nom: "d_taquine" },
    { type: "dialogue", perso: "lamia", pose: "boudeuse", texte: "Dragon Ball c'est de la nostalgie, c'est pas de l'écriture." },
    { type: "dialogue", perso: "lamia", pose: "rire", texte: "Mais vas-y, continue, j'aime bien quand les gens ont tort avec confiance." },
    { type: "pensee", texte: "Note pour plus tard : elle aime qu'on lui réponde." },
    { type: "aller", label: "d_suite" },

    { type: "label", nom: "d_daccord" },
    { type: "dialogue", perso: "lamia", pose: "boudeuse", texte: "Non mais dis pas oui juste pour dire oui, hein." },
    { type: "pensee", texte: "Grillé en une seconde et demie." },
    { type: "aller", label: "d_suite" },

    { type: "label", nom: "d_ecoute" },
    { type: "narration", texte: "Tu ne dis rien. Tu écoutes. Elle enchaîne trois arguments, se contredit sur le deuxième, s'en rend compte, et rit toute seule." },
    { type: "dialogue", perso: "lamia", pose: "rire", texte: "Bon j'ai perdu le fil. C'est de ta faute, tu réponds pas." },
    { type: "aller", label: "d_suite" },

    { type: "label", nom: "d_suite" },
    { type: "attendre", duree: 700 },

    { type: "dialogue", perso: "lamia", pose: "pensive", texte: "Attends. Berserk, tu connais ?" },
    { type: "pensee", texte: "Non." },
    { type: "dialogue", perso: "lamia", pose: "surprise", texte: "Comment ça non ?" },
    { type: "dialogue", perso: "lamia", pose: "boudeuse", texte: "Non mais tu peux pas dire que Hunter x Hunter c'est bien et pas connaître Berserk. Ça marche pas comme ça." },
    { type: "dialogue", perso: "lamia", pose: "neutre", texte: "Bon. Tu commences ce soir. On en reparle." },

    { type: "narration", texte: "Vous arrivez au bloc. Le TD commence dans deux minutes. Elle rentre avec les autres." },
    { type: "retirerPerso", id: "lamia" },

    { type: "attendre", duree: 800 },
    { type: "pensee", texte: "« On en reparle. »" },
    { type: "pensee", texte: "Elle a dit « on en reparle »." },

    { type: "decor", image: "vide", transition: "noir", duree: 800 },
    { type: "narration", texte: "Tu commences Berserk le soir même." },
    { type: "narration", texte: "Et le lendemain tu enchaînes. Et le surlendemain encore, jusqu'à trois heures du matin, avec les cours à huit heures. Hunter x Hunter y passe aussi." },
    { type: "narration", texte: "En moins d'une semaine, tu as rattrapé tout ce qu'elle a cité, dans l'ordre, comme on révise pour un examen dont personne ne t'a parlé." },
    { type: "pensee", texte: "Uniquement pour avoir de quoi lui répondre." },
    { type: "pensee", texte: "Tu ne le lui diras jamais." },
    { type: "carte", id: "carte-08-veillees" },

    /* ---------- 6. Le tableau ---------- */

    { type: "decor", image: "univ-td", transition: "fondu", duree: 1000 },
    { type: "musique", piste: "leger", fadeIn: 2000 },
    { type: "narration", texte: "À partir de là, il y a des semaines entières qui se ressemblent, et tu les aimes toutes." },

    { type: "narration", texte: "Elle monte au tableau pour écrire une correction. Le prof lui tend le feutre, elle recopie son exercice, tout le monde recopie derrière." },
    { type: "pensee", texte: "Tu regardes le tableau. Le tableau. Les équations sur le tableau." },
    { type: "attendre", duree: 900 },
    { type: "pensee", texte: "Bon. Tu n'as pas regardé que le tableau." },

    { type: "narration", texte: "Ce n'est pas seulement ça, d'ailleurs, et c'est ce qui t'embête. Ce serait plus simple si c'était seulement ça." },
    { type: "pensee", texte: "C'est sa façon de s'habiller. C'est sa façon de tenir un feutre comme si elle en voulait à quelqu'un. C'est ses yeux, surtout." },
    { type: "pensee", texte: "Ils sont verts. Et ils ne sont pas du même vert en octobre et en mars. Tu as vérifié. Plusieurs fois." },

    { type: "narration", texte: "Elle redescend, te croise, ne dit rien, et reprend sa place." },

    /* ---------- 7. Le retard ---------- */

    { type: "attendre", duree: 800 },
    { type: "narration", texte: "Un autre jour. Le cours a commencé depuis dix minutes." },
    { type: "sfx", son: "clic" },
    { type: "narration", texte: "La porte s'ouvre. Elle s'excuse à mi-voix auprès du prof et cherche une place des yeux." },

    { type: "narration", texte: "Il en reste une. À côté de toi." },
    { type: "perso", id: "lamia", pose: "genee", position: "centre" },

    { type: "pensee", texte: "Ne souris pas. Ne souris surtout pas." },

    { type: "choix", question: "Elle pose son sac.", options: [
      { texte: "« T'es en retard. »",
        effets: { complicite: 3, flags: { a_taquine_retard: true } }, aller: "r_taquine" },
      { texte: "Tu pousses tes affaires pour lui faire de la place. Sans un mot.",
        effets: { complicite: 2 }, aller: "r_place" },
      { texte: "Tu continues à prendre des notes comme si de rien n'était.",
        effets: { complicite: 1, flags: { a_fait_le_detache: true } }, aller: "r_detache" }
    ]},

    { type: "label", nom: "r_taquine" },
    { type: "dialogue", perso: "lamia", pose: "boudeuse", texte: "Le bus. Me parle pas." },
    { type: "attendre", duree: 500 },
    { type: "dialogue", perso: "lamia", pose: "sourire", texte: "…bon, si, parle-moi. Il raconte quoi depuis dix minutes ?" },
    { type: "aller", label: "r_suite" },

    { type: "label", nom: "r_place" },
    { type: "narration", texte: "Tu pousses ta trousse et ton classeur de vingt centimètres. Elle s'assoit." },
    { type: "dialogue", perso: "lamia", pose: "sourire", texte: "Merci." },
    { type: "attendre", duree: 600 },
    { type: "dialogue", perso: "lamia", pose: "neutre", texte: "Il raconte quoi depuis dix minutes ?" },
    { type: "aller", label: "r_suite" },

    { type: "label", nom: "r_detache" },
    { type: "narration", texte: "Tu ne lèves pas la tête. Tu écris. Tu écris même des choses que le prof n'a pas dites, tellement tu tiens à avoir l'air occupé." },
    { type: "dialogue", perso: "lamia", pose: "boudeuse", texte: "Eh. Bonjour quand même." },
    { type: "pensee", texte: "Raté." },
    { type: "aller", label: "r_suite" },

    { type: "label", nom: "r_suite" },
    { type: "attendre", duree: 600 },

    { type: "narration", texte: "Vous parlez tout le cours. À voix basse, penchés vers le milieu de la table, en faisant semblant de suivre." },
    { type: "narration", texte: "De rien, en fait. Du prof. D'un examen. D'un truc idiot qu'a dit Yassine la semaine d'avant." },

    { type: "perso", id: "lamia", pose: "regard", position: "centre" },
    { type: "attendre", duree: 1200, cacherBoite: true },

    { type: "pensee", texte: "Et à un moment, elle se tourne vers toi pour te répondre, et tu la regardes en face." },
    { type: "pensee", texte: "De près. Pas à travers une cour, pas depuis le fond d'un amphi. De près." },

    { type: "attendre", duree: 900 },
    { type: "pensee", texte: "Tu as l'air complètement détaché. Tu as travaillé cet air-là pendant des semaines et il est parfait." },
    { type: "pensee", texte: "À l'intérieur, il n'en reste rien du tout." },

    { type: "retirerPerso", id: "lamia" },
    { type: "musique", arret: true },

    { type: "carton", texte: "Fin du chapitre 1", sousTitre: "Il reste la cafétéria", duree: 2600 },

    { type: "finChapitre", suivant: "ch02" }
  ]
};
