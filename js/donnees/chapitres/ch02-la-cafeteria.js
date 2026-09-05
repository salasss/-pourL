/* ============================================================
   CHAPITRE 2 — « La cafétéria »
   L'invitation refusée, l'Instagram, « il a de la chance »,
   le biscuit, la placette.
   ============================================================ */

export default {
  id: "ch02",
  numero: "2",
  titre: "La cafétéria",
  sousTitre: "Troisième année — hiver, puis printemps",
  peau: "souvenir",
  suivant: "ch03",

  noeuds: [

    /* ---------- 1. Le QG ---------- */

    { type: "carton", texte: "Toujours en troisième année", sousTitre: "La terrasse de la cafétéria", duree: 2600 },
    { type: "musique", piste: "leger", fadeIn: 2200 },
    { type: "decor", image: "univ-cafet", transition: "fondu", duree: 1100 },

    { type: "narration", texte: "Il y a des endroits qui deviennent le centre du monde sans prévenir. Pour votre bande, c'est la terrasse de la cafétéria." },
    { type: "narration", texte: "C'est là que tout le monde atterrit entre deux cours. On y refait les TD, les classements de shonen et le monde. Dans cet ordre." },
    { type: "pensee", texte: "Et c'est là qu'elle est, la plupart du temps. Ce qui n'a évidemment aucun rapport avec le fait que tu y sois aussi." },

    /* ---------- 2. L'invitation refusée ---------- */

    { type: "narration", texte: "Un après-midi, les cours finissent tôt. Le groupe s'installe pour réviser — enfin, pour poser des cahiers sur la table et parler d'autre chose." },
    { type: "perso", id: "lamia", pose: "neutre", position: "centre" },
    { type: "dialogue", perso: "lamia", texte: "On reste réviser là, nous. Tu restes ?" },

    { type: "pensee", texte: "Tes potes t'attendent pour rentrer. Le bus part dans vingt minutes, et après c'est plus de bus." },

    { type: "choix", question: "Le bus part dans vingt minutes.", options: [
      { texte: "« Non, je rentre avec mes potes. »",
        effets: { complicite: 0, flags: { a_refuse_reviser: true } }, aller: "inv_refus" },
      { texte: "« Vas-y, je reste. »",
        effets: { complicite: 1 }, aller: "inv_reste" },
      { texte: "« Réviser ? Vous ? »",
        effets: { complicite: 1 }, aller: "inv_esquive" }
    ]},

    { type: "label", nom: "inv_refus" },
    { type: "narration", texte: "Tu le dis avec le sourire, tranquille, sûr de toi. Un refus propre." },
    { type: "dialogue", perso: "lamia", pose: "neutre", texte: "OK. D'accord." },
    { type: "narration", texte: "Elle retourne vers les autres. Toi, tu attrapes ton sac, et tu pars vers ton bus." },
    { type: "pensee", texte: "Voilà. Efficace, net, zéro risque. Tu es très fort." },
    { type: "aller", label: "inv_suite" },

    { type: "label", nom: "inv_reste" },
    { type: "narration", texte: "Tu poses ton sac. Elle commence à sourire." },
    { type: "narration", texte: "Et c'est le moment exact que choisit Saïd pour surgir derrière toi : « Wesh, on y va ? Le bus. »" },
    { type: "pensee", texte: "Le bus. Tu avais promis. C'est toi qui as les tickets." },
    { type: "narration", texte: "Tu ramasses ton sac en t'excusant à moitié. Elle hausse les épaules." },
    { type: "dialogue", perso: "lamia", pose: "neutre", texte: "OK. D'accord." },
    { type: "aller", label: "inv_suite" },

    { type: "label", nom: "inv_esquive" },
    { type: "dialogue", perso: "lamia", pose: "boudeuse", texte: "Oui, réviser. Nous. Ça arrive." },
    { type: "narration", texte: "Tu ris, tu regardes l'heure, et l'heure tranche pour toi : le bus. Tu pars avec tes potes." },
    { type: "dialogue", perso: "lamia", pose: "neutre", texte: "OK. D'accord." },
    { type: "aller", label: "inv_suite" },

    { type: "label", nom: "inv_suite" },
    { type: "retirerPerso", id: "lamia" },
    { type: "attendre", duree: 800 },

    { type: "narration", texte: "Sur le moment, tu n'y penses plus. C'était rien. Deux phrases échangées debout, un mardi." },
    { type: "attendre", duree: 700 },
    { type: "narration", texte: "Des mois plus tard, elle te racontera la même scène, vue de son côté. Elle s'en fichait complètement, de réviser." },
    { type: "narration", texte: "Elle voulait juste profiter du groupe pour être avec toi. C'était de la drague. Et tu as répondu « non, je rentre avec mes potes » avec un grand sourire." },
    { type: "pensee", texte: "Heureusement que tu ne l'as pas su ce jour-là. Tu n'aurais plus jamais dormi." },

    /* ---------- 3. L'Instagram ---------- */

    { type: "carton", texte: "Un autre jour", sousTitre: "Même terrasse, même table", duree: 2200 },
    { type: "decor", image: "univ-cafet", transition: "fondu", duree: 800 },
    { type: "perso", id: "lamia", pose: "sourire", position: "centre" },

    { type: "narration", texte: "Vous parlez de tout et de n'importe quoi. Surtout de n'importe quoi." },
    { type: "dialogue", perso: "lamia", pose: "rire", texte: "Non mais je te jure que le prof d'analyse note au feeling. C'est prouvé. Y a des études." },
    { type: "narration", texte: "Et d'un coup, sans transition, au milieu d'une phrase sur autre chose :" },
    { type: "dialogue", perso: "lamia", pose: "neutre", texte: "T'as un Insta ?" },

    { type: "attendre", duree: 700 },
    { type: "pensee", texte: "Question posée comme on demande l'heure. Sauf que ton cœur vient de rater une marche." },
    { type: "pensee", texte: "Ce qu'elle ne sait pas : tu as trouvé son compte il y a des semaines. Recherche méthodique, recoupement des abonnés de Kenza, vérification par les photos où elle est taguée. Du travail propre." },
    { type: "pensee", texte: "Mais tu ne pouvais pas lui demander le sien. Pas toi en premier. Il fallait que ça vienne d'elle." },

    { type: "choix", question: "Elle attend.", options: [
      { texte: "Tu donnes ton pseudo, l'air de rien.",
        effets: { complicite: 2 }, aller: "insta_neutre" },
      { texte: "« Pourquoi, tu veux me suivre ? »",
        effets: { complicite: 3, flags: { a_taquine_insta: true } }, aller: "insta_taquine" },
      { texte: "« Attends, je sais plus mon pseudo. »",
        effets: { complicite: 2 }, aller: "insta_boulet" }
    ]},

    { type: "label", nom: "insta_neutre" },
    { type: "narration", texte: "Tu épelles ton pseudo sur un ton parfaitement détaché. Un chef-d'œuvre de détachement. Des années d'entraînement." },
    { type: "dialogue", perso: "lamia", pose: "sourire", texte: "Voilà. Suivi. T'as plus d'excuse pour répondre en retard." },
    { type: "aller", label: "insta_suite" },

    { type: "label", nom: "insta_taquine" },
    { type: "dialogue", perso: "lamia", pose: "boudeuse", texte: "Je veux compléter ma liste de comptes inutiles. T'y seras très bien." },
    { type: "narration", texte: "Tu donnes ton pseudo. Elle tape, elle appuie, et ton téléphone vibre dans ta poche." },
    { type: "dialogue", perso: "lamia", pose: "sourire", texte: "Voilà. T'as plus d'excuse pour répondre en retard." },
    { type: "aller", label: "insta_suite" },

    { type: "label", nom: "insta_boulet" },
    { type: "dialogue", perso: "lamia", pose: "rire", texte: "Tu sais plus ton propre pseudo. D'accord. Rassurant, pour un futur ingénieur." },
    { type: "narration", texte: "Tu retrouves ton pseudo. Elle tape, elle appuie, ton téléphone vibre." },
    { type: "aller", label: "insta_suite" },

    { type: "label", nom: "insta_suite" },

    { type: "narration", texte: "Tu ouvres son profil. Là, tout de suite, devant elle — officiellement pour vérifier que le suivi est bien passé." },
    { type: "narration", texte: "Pseudo : Tsundere. Photo de profil : Zoro — une image sombre, chargée, illisible pour quelqu'un qui la découvre." },
    { type: "pensee", texte: "Tu connais ce profil par cœur. Tu l'as trouvé il y a des semaines. Mais officiellement, c'est la première fois que tu le vois — alors joue bien." },

    { type: "narration", texte: "« Tsundere. Froide dehors, tendre dedans. Sympa, comme pseudo. »" },
    { type: "dialogue", perso: "lamia", pose: "surprise", texte: "Attends. Tu sais ce que ça veut dire ?" },
    { type: "attendre", duree: 700 },
    { type: "narration", texte: "Et là, sans préparation, sans trembler, tu sors la phrase la plus fausse de ta vie :" },
    { type: "narration", texte: "« Bien sûr. J'ai quelques notions de japonais. »" },
    { type: "attendre", duree: 900 },
    { type: "pensee", texte: "Tu n'as aucune notion de japonais. Aucune. Tu as des notions de son compte Instagram, ce qui est très différent." },
    { type: "dialogue", perso: "lamia", pose: "sourire", texte: "OK. T'es plein de surprises, en fait." },

    { type: "narration", texte: "Tu enchaînes, l'air de rien : « Et c'est Zoro, la photo, non ? »" },
    { type: "dialogue", perso: "lamia", pose: "surprise", texte: "T'as l'œil. Personne le reconnaît, d'habitude." },
    { type: "pensee", texte: "Personne ne le reconnaît parce que l'image est illisible. Toi, tu l'as analysée trente fois, en zoomant, comme une scène de crime." },
    { type: "dialogue", perso: "lamia", pose: "genee", texte: "…c'est Yasmine qui a choisi le pseudo. C'est pas moi." },
    { type: "narration", texte: "C'est elle. Tout le monde sait que c'est elle." },
    { type: "carte", id: "carte-03-tsundere" },
    { type: "souvenir", id: "sv-insta" },
    { type: "retirerPerso", id: "lamia" },

    /* ---------- 4. « Il a de la chance » ---------- */

    { type: "musique", piste: "tendre", fadeIn: 2400 },
    { type: "carton", texte: "Un soir, après les cours", sousTitre: "La route du bus", duree: 2400 },
    { type: "decor", image: "route-bus-dore", transition: "fondu", duree: 1200 },

    { type: "narration", texte: "Fin de journée. Toi, tu descends vers le transport universitaire. Elle, elle rentre à pied. Le début du chemin est le même, alors vous le faites ensemble." },
    { type: "perso", id: "lamia", pose: "neutre", position: "centre" },
    { type: "narration", texte: "Vous parlez de tout et de n'importe quoi. La lumière est dorée, les ombres font trois mètres de long, et le chemin est trop court." },

    { type: "attendre", duree: 900 },
    { type: "narration", texte: "Et la question sort. Presque toute seule. « T'es en couple ? »" },
    { type: "attendre", duree: 900 },
    { type: "dialogue", perso: "lamia", pose: "pensive", texte: "Ouais." },
    { type: "attendre", duree: 1000 },

    { type: "pensee", texte: "Ah." },
    { type: "pensee", texte: "Bon." },
    { type: "pensee", texte: "Le soleil est toujours doré, les ombres font toujours trois mètres. Le décor n'a pas eu la décence de changer." },

    { type: "choix", question: "Elle marche à côté de toi. Elle attend peut-être quelque chose.", options: [
      { texte: "« Il a de la chance. »",
        effets: { complicite: 4, flags: { a_dit_chance: true } }, aller: "chance_dit" },
      { texte: "« Ah, d'accord. Cool. »",
        effets: { complicite: 0 }, aller: "chance_cool" },
      { texte: "Tu hoches la tête et tu changes de sujet.",
        effets: { complicite: 0 }, aller: "chance_fuite" }
    ]},

    { type: "label", nom: "chance_dit" },
    { type: "narration", texte: "« Il a de la chance. D'avoir une fille aussi belle et aussi intelligente que toi. »" },
    { type: "attendre", duree: 1100 },
    { type: "dialogue", perso: "lamia", pose: "genee", texte: "…" },
    { type: "dialogue", perso: "lamia", pose: "sourire", texte: "Merci." },
    { type: "narration", texte: "Elle regarde ailleurs en le disant. Toi aussi. Vous marchez très droit tous les deux, très concentrés sur le trottoir." },
    { type: "attendre", duree: 800 },
    { type: "narration", texte: "Des mois plus tard, elle t'avouera que cette phrase l'a touchée en plein cœur. Pas « belle ». Ça, on le lui avait déjà dit." },
    { type: "narration", texte: "« Intelligente ». C'est ce mot-là qui est resté." },
    { type: "aller", label: "chance_suite" },

    { type: "label", nom: "chance_cool" },
    { type: "narration", texte: "« Cool. » Voilà ce que tu trouves à dire. Cool." },
    { type: "pensee", texte: "Dans une autre vie, un autre toi a dit autre chose. Il paraît que ça a très bien marché pour lui." },
    { type: "aller", label: "chance_suite" },

    { type: "label", nom: "chance_fuite" },
    { type: "narration", texte: "Tu enchaînes sur le TD de demain. Elle répond. La conversation repart, très correcte, très plate." },
    { type: "pensee", texte: "Champion du monde de l'esquive. On te remettra la médaille plus tard." },
    { type: "aller", label: "chance_suite" },

    { type: "label", nom: "chance_suite" },
    { type: "souvenir", id: "sv-chance" },
    { type: "narration", texte: "Au croisement, vous vous séparez. Elle continue tout droit. Toi, tu descends vers les bus." },
    { type: "retirerPerso", id: "lamia" },
    { type: "attendre", duree: 900 },

    /* ---------- 5. La rupture, hors champ ---------- */

    { type: "musique", arret: true },
    { type: "carton", texte: "Quelques semaines plus tard", duree: 2400 },
    { type: "decor", image: "univ-cour-jour", transition: "fondu", duree: 1000 },

    { type: "narration", texte: "L'information arrive comme elles arrivent toutes ici : par personne et par tout le monde à la fois." },
    { type: "narration", texte: "Elle et son copain, c'est fini." },
    { type: "attendre", duree: 900 },
    { type: "pensee", texte: "Tu composes ton visage de circonstance. Sobre. Neutre. Vaguement désolé pour le principe." },
    { type: "pensee", texte: "À l'intérieur, tu es très exactement l'homme le plus heureux du monde. Ce n'est pas élégant. C'est la vérité." },
    { type: "narration", texte: "Tu ne tentes rien. Pas maintenant. Il y a des timings dans la vie, et tu les respectes." },
    { type: "pensee", texte: "Enfin. Tu les respectes surtout parce que tu es mort de peur. Mais officiellement, c'est du respect." },

    /* ---------- 6. Le biscuit ---------- */

    { type: "musique", piste: "leger", fadeIn: 2000 },
    { type: "carton", texte: "Le jour du biscuit", duree: 2400 },
    { type: "decor", image: "univ-cafet", transition: "fondu", duree: 1000 },
    { type: "perso", id: "lamia", pose: "sourire", position: "centre" },

    { type: "narration", texte: "Depuis quelque temps, quelque chose a changé entre vous. Rien d'officiel. Mais tout le monde parle un peu moins fort quand vous êtes tous les deux." },
    { type: "narration", texte: "Cet après-midi-là, tu manges un biscuit. Tranquille. Sans te douter de rien. C'est toujours comme ça que l'histoire attrape les gens : par un biscuit." },

    { type: "narration", texte: "Au loin, tu vois arriver une amie à toi. Une fille de ta promo, qui vient juste discuter." },
    { type: "attendre", duree: 900 },
    { type: "narration", texte: "Ce qui se passe ensuite dure trois secondes." },
    { type: "attendre", duree: 1100 },

    { type: "cg", image: "cg-le-biscuit", legende: "Trois secondes", carte: "carte-04-biscuit" },

    { type: "narration", texte: "Elle t'a pris le biscuit dans la main. Elle a croqué dedans." },
    { type: "narration", texte: "Elle n'a pas dit un mot. Et elle ne te regardait même pas, toi — elle regardait ton amie." },
    { type: "attendre", duree: 900 },
    { type: "pensee", texte: "Aucune phrase n'a été prononcée. Un message a pourtant été envoyé, reçu, et accusé de réception par toute la terrasse." },
    { type: "pensee", texte: "Traduction approximative : ce mec-là est pris." },

    { type: "dialogue", perso: "lamia", pose: "boudeuse", texte: "Quoi ?" },
    { type: "narration", texte: "Rien. Personne ne dit rien. Ton amie discute cinq minutes de tout à fait autre chose, puis s'en va." },
    { type: "pensee", texte: "Tu finis ton biscuit avec un soin infini. C'est le meilleur biscuit de ta vie et tu le sais." },
    { type: "souvenir", id: "sv-biscuit" },
    { type: "retirerPerso", id: "lamia" },

    /* ---------- 7. La placette ---------- */

    { type: "musique", piste: "tendre", fadeIn: 2400 },
    { type: "decor", image: "placette-jour", transition: "fondu", duree: 1400 },

    { type: "narration", texte: "À force de chercher un coin tranquille, vous avez fini par le trouver." },
    { type: "narration", texte: "Un mur, derrière la plus grande cour. Un peu d'herbe, un peu d'ombre, un grand arbre qui fait le reste." },
    { type: "narration", texte: "Et une armoire Djezzy rouge, fermée à clé depuis toujours. Personne ne sait ce qu'il y a dedans. Personne ne l'a jamais vue ouverte." },
    { type: "carte", id: "carte-05-djezzy" },

    { type: "pensee", texte: "Vous ne l'avez jamais dit à voix haute, mais c'est votre place. La preuve : quand quelqu'un d'autre y est assis, ça vous vexe personnellement." },

    { type: "perso", id: "lamia", pose: "pensive", position: "centre" },
    { type: "attendre", duree: 1000 },
    { type: "dialogue", perso: "lamia", texte: "On est bien, là." },
    { type: "attendre", duree: 1200 },
    { type: "pensee", texte: "Oui. On est bien, là." },
    { type: "souvenir", id: "sv-placette" },

    { type: "retirerPerso", id: "lamia" },
    { type: "musique", arret: true },
    { type: "carton", texte: "Fin du chapitre 2", sousTitre: "Le prochain commence un 7 mai", duree: 2800 },

    { type: "finChapitre", suivant: "ch03" }
  ]
};
