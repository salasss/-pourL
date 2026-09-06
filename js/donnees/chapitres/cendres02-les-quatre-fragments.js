/* ============================================================
   CENDRES ✦2 — « Les Quatre Fragments »
   L'exploration. Béjaïa rêvée : le pic des Singes, la Casbah,
   le cap Carbon — dans l'ordre qu'elle choisit — puis la
   cascade suspendue de Kefrida. Chaque fragment rend des mots
   à la voix. Registre sec, court, lent.
   ============================================================ */

export default {
  id: "cendres02",
  numero: "✦",
  titre: "Les Quatre Fragments",
  sousTitre: "Bgayet, la nuit",
  peau: "cendres",
  suivant: "cendres03",

  noeuds: [

    /* ---------- Ouverture : ce que la rumeur raconte ---------- */

    { type: "carton", texte: "Les Quatre Fragments", sousTitre: "La cité dort. Pas elle.", duree: 3000 },
    { type: "musique", piste: "cendres", fadeIn: 3000 },
    { type: "decor", image: "bgayet-cendres", transition: "fondu", duree: 1800 },

    { type: "narration", texte: "La ville a un nom pour elle, maintenant. On ne le dit pas fort. On le dit derrière les volets, quand elle passe." },
    { type: "narration", texte: "La Dévoreuse." },
    { type: "attendre", duree: 1100 },
    { type: "narration", texte: "Parce qu'elle est toujours là où les gens s'effacent. Parce qu'elle se penche sur les Sans-Nom. Parce qu'elle parle seule, la nuit, sur les remparts." },
    { type: "narration", texte: "Personne ne se demande pourquoi elle est toujours là. C'est plus simple de croire au monstre qu'au soldat." },

    { type: "perso", id: "lamia-cendres", pose: "neutre", position: "centre" },
    { type: "dialogue", perso: "lamia-cendres", texte: "Ils ont verrouillé leurs portes. Contre moi. Pas contre la cendre — contre moi." },
    { type: "attendre", duree: 1000 },
    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Tant mieux. Une porte verrouillée, c'est une famille qui existe encore assez pour avoir peur." },

    { type: "pensee", texte: "Voilà ce qu'elle est. Ils la craignent, et elle transforme leur peur en preuve de vie. Tu voudrais le leur crier. Tu n'as pas assez de voix pour crier." },

    /* ---------- L'ancre, et le plan ---------- */

    { type: "decor", image: "remparts-nuit", transition: "fondu", duree: 1400 },
    { type: "narration", texte: "Sur les remparts, elle déplie son plan. Il tient en quatre mots — ceux du seul souvenir que la cendre ne mord pas." },
    { type: "dialogue", perso: "lamia-cendres", pose: "pensive", texte: "La chaleur. Le mur. L'ombre. La boîte." },
    { type: "dialogue", perso: "lamia-cendres", texte: "Quatre morceaux. Si je les trouve en vrai, le souvenir tiendra tout seul. Et ce qu'il garde tiendra avec." },

    { type: "narration", texte: "Elle lève les yeux vers la Gardienne — la montagne-femme endormie au-dessus de la ville. Puis vers la mer sans reflet. Puis vers les hauteurs, où l'eau s'est arrêtée de tomber." },
    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "On commence par où ?" },
    { type: "pensee", texte: "Elle te demande ton avis. À toi. La voix qui sait dire trois mots." },

    /* ================== LE CARREFOUR ================== */

    { type: "label", nom: "carrefour" },

    { type: "si", condition: { et: [{ flag: "frag_chaleur" }, { flag: "frag_mur" }, { flag: "frag_ombre" }] },
      alors: [ { type: "aller", label: "kefrida" } ] },

    { type: "decor", image: "remparts-nuit", transition: "fondu", duree: 900 },
    { type: "perso", id: "lamia-cendres", pose: "neutre", position: "centre" },

    { type: "choix", question: "Où souffles-tu de l'emmener ?", options: [
      { texte: "« Haut. »  — vers le pic des Singes",
        condition: { flagFaux: "frag_chaleur" },
        effets: { flags: {} }, aller: "pic" },
      { texte: "« Vieux. »  — vers la Casbah",
        condition: { flagFaux: "frag_mur" },
        effets: { flags: {} }, aller: "casbah" },
      { texte: "« Loin. »  — vers le cap Carbon",
        condition: { flagFaux: "frag_ombre" },
        effets: { flags: {} }, aller: "cap" }
    ]},

    /* ================== LE PIC DES SINGES — la chaleur ================== */

    { type: "label", nom: "pic" },
    { type: "carton", texte: "Le pic des Singes", sousTitre: "Sur le flanc de la Gardienne", duree: 2600 },
    { type: "decor", image: "pic-singes-cendres", transition: "noir", duree: 1300 },
    { type: "perso", id: "lamia-cendres", pose: "neutre", position: "centre" },

    { type: "narration", texte: "Le sentier grimpe à même le flanc de la montagne endormie. Et là-haut, pour la première fois depuis des mois, quelque chose bouge." },
    { type: "narration", texte: "Les singes. La cendre ne les prend pas — ils n'ont pas de noms à manger. Ils sont des dizaines, serrés sur les rochers, et entre eux, ça luit." },
    { type: "narration", texte: "De la chaleur. La vraie. Celle du soleil d'avant, gardée dans des pierres qu'ils se passent de main en main comme un trésor de famille." },

    { type: "dialogue", perso: "lamia-cendres", pose: "surprise", texte: "Ils ont volé l'été. Ces petits crapules ont volé l'été." },

    { type: "narration", texte: "Le plus vieux s'avance. Il la regarde longtemps — pas comme on regarde un monstre. Comme on jauge un marchand." },
    { type: "narration", texte: "Le marché est simple, et elle le comprend sans un mot : une pierre chaude contre un souvenir chaud. Ici, on ne donne rien contre rien." },

    { type: "choix", question: "Elle n'a pas beaucoup de souvenirs à elle. Tu souffles quoi ?", options: [
      { texte: "« Donne. »",
        effets: { flags: { paye_souvenir: true } }, aller: "pic_donne" },
      { texte: "« Non. »",
        effets: {}, aller: "pic_refuse" }
    ]},

    { type: "label", nom: "pic_donne" },
    { type: "narration", texte: "Elle ferme les yeux. Elle cherche quelque chose de chaud à donner — et ce qui monte, elle ne sait pas d'où ça vient." },
    { type: "narration", texte: "Des rires dans une salle trop éclairée. Une odeur de friture. Quelqu'un en face d'elle qui commande toujours la même chose." },
    { type: "dialogue", perso: "lamia-cendres", pose: "genee", texte: "…c'est à moi, ça ? Je connais pas cet endroit. Mais c'est chaud." },
    { type: "pensee", texte: "Tu le reconnais, toi. Tu donnerais n'importe quoi pour qu'elle le garde. Et c'est exactement ce qu'elle est en train de payer." },
    { type: "narration", texte: "Le vieux singe prend le souvenir comme on prend un fruit mûr. Et pose dans sa paume une pierre qui brûle doucement." },
    { type: "aller", label: "pic_fragment" },

    { type: "label", nom: "pic_refuse" },
    { type: "narration", texte: "Elle refuse. Le vieux singe hausse les épaules — un geste très humain, très vexant — et la troupe commence à se détourner." },
    { type: "dialogue", perso: "lamia-cendres", pose: "epuisee", texte: "Attends. Attends. D'accord." },
    { type: "narration", texte: "Ce qu'elle donne, elle ne le choisit pas : des rires dans une salle trop éclairée, une odeur de friture, quelqu'un en face d'elle. Le singe le prend comme un fruit mûr." },
    { type: "pensee", texte: "Tu le reconnais, toi. Elle paie avec des morceaux de vous deux, sans le savoir." },
    { type: "aller", label: "pic_fragment" },

    { type: "label", nom: "pic_fragment" },
    { type: "narration", texte: "La pierre chauffe sa main, puis son bras, puis quelque chose derrière les côtes qui n'avait plus chauffé depuis longtemps." },
    { type: "narration", texte: "LA CHALEUR. Premier fragment. Quelque part dans le souvenir-ancre, une journée redevient brûlante." },
    { type: "flag", flags: { frag_chaleur: true } },
    { type: "sfx", son: "carte" },
    { type: "aller", label: "retour" },

    /* ================== LA CASBAH — le mur ================== */

    { type: "label", nom: "casbah" },
    { type: "carton", texte: "La Casbah", sousTitre: "Les vieilles pierres", duree: 2600 },
    { type: "decor", image: "casbah-cendres", transition: "noir", duree: 1300 },
    { type: "perso", id: "lamia-cendres", pose: "neutre", position: "centre" },

    { type: "narration", texte: "La Casbah est la doyenne de la ville. Des siècles de pierre, des couches de noms gravés — les mariages, les naissances, les serments, tout ce que Bgayet voulait garder, elle venait l'écrire là." },
    { type: "narration", texte: "La cendre remonte les murs comme une marée patiente. Les gravures s'effacent de bas en haut. Les plus vieilles tiennent encore. Plus pour longtemps." },

    { type: "dialogue", perso: "lamia-cendres", pose: "pensive", texte: "Un nom gravé, c'est quelqu'un qui a existé assez fort pour abîmer une pierre." },
    { type: "narration", texte: "Elle pose la main sur le mur. Les lettres tièdes frémissent sous ses doigts, comme des bêtes qui sentent l'orage." },
    { type: "narration", texte: "Elle comprend l'épreuve sans qu'on la lui explique : les noms qu'on lit à voix haute tiennent une nuit de plus. Mais chaque nom lu la marque — la cendre remonte d'un doigt sur son bras." },

    { type: "choix", question: "Le mur en porte des centaines. Tu souffles quoi ?", options: [
      { texte: "« Trois. »",
        effets: { flags: {} }, aller: "casbah_trois" },
      { texte: "« Tous. »",
        effets: { flags: { rumeur_folle: true } }, aller: "casbah_tous" }
    ]},

    { type: "label", nom: "casbah_trois" },
    { type: "narration", texte: "Elle en lit trois. Les trois plus effacés, ceux qui n'avaient plus qu'une nuit. Sa voix est calme, comme on lit aux enfants." },
    { type: "narration", texte: "Quelque part en ville, trois portes verrouillées se déverrouillent sans que personne comprenne pourquoi." },
    { type: "aller", label: "casbah_fragment" },

    { type: "label", nom: "casbah_tous" },
    { type: "narration", texte: "Elle lit. Un nom, dix, trente. Sa voix s'use, la cendre grimpe sur son poignet, son coude, et elle lit encore." },
    { type: "dialogue", perso: "lamia-cendres", pose: "epuisee", texte: "…me regarde pas comme ça. Je dors quand c'est fini." },
    { type: "narration", texte: "Au matin, un berger la trouvera assise contre le mur, cendrée jusqu'à l'épaule, en train de murmurer des noms de morts. La rumeur fera le reste : la Dévoreuse récite ses victimes." },
    { type: "narration", texte: "Trente familles, cette nuit-là, rêveront de gens qu'elles avaient oubliés. Aucune ne saura qui remercier." },
    { type: "aller", label: "casbah_fragment" },

    { type: "label", nom: "casbah_fragment" },
    { type: "narration", texte: "Quand elle retire sa main, la pierre garde son empreinte — creusée, nette, comme si elle aussi avait existé assez fort pour abîmer un mur." },
    { type: "narration", texte: "LE MUR. Deuxième fragment. Quelque part dans le souvenir-ancre, un mur retrouve son grain sous une paume." },
    { type: "flag", flags: { frag_mur: true } },
    { type: "sfx", son: "carte" },
    { type: "aller", label: "retour" },

    /* ================== LE CAP CARBON — l'ombre ================== */

    { type: "label", nom: "cap" },
    { type: "carton", texte: "Le cap Carbon", sousTitre: "Le phare éteint", duree: 2600 },
    { type: "decor", image: "cap-carbon-cendres", transition: "noir", duree: 1300 },
    { type: "perso", id: "lamia-cendres", pose: "neutre", position: "centre" },

    { type: "narration", texte: "Le phare du cap Carbon est éteint depuis que la mer ne reflète plus rien. À quoi bon guider des bateaux vers une ville qui oublie les marins." },
    { type: "narration", texte: "Mais un phare éteint garde une ombre. Elle est là, couchée sur l'eau noire, immense, immobile — une ombre sans lumière pour l'expliquer. C'est faux, c'est impossible, et c'est là." },

    { type: "narration", texte: "Et dans l'ombre, quelqu'un attend. Elle a sa silhouette. Sa capuche. Ses ailes de fer au cou." },
    { type: "perso", id: "lamia-cendres", pose: "marquee", position: "centre" },
    { type: "narration", texte: "La Dévoreuse. Pas elle — l'autre. Celle que la ville a fabriquée à force d'en parler derrière les volets. La rumeur, devenue assez épaisse pour tenir debout." },

    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Alors c'est toi qu'ils voient, quand ils me regardent." },
    { type: "narration", texte: "L'autre sourit. Poliment. Comme eux tous." },
    { type: "narration", texte: "Elle parle avec toutes les voix de la ville à la fois : « Elle rôde la nuit. Elle touche les effacés. Elle murmure des noms de morts. Elle a volé le feu. Qui ferait ça, sinon un monstre ? »" },

    { type: "choix", question: "L'ombre attend une réponse. Tu souffles quoi ?", options: [
      { texte: "« Mens. »  — nier, dire que ce n'est pas elle",
        effets: {}, aller: "cap_nie" },
      { texte: "« Prends. »  — accepter l'ombre, la porter",
        effets: { flags: { assume_ombre: true } }, aller: "cap_assume" }
    ]},

    { type: "label", nom: "cap_nie" },
    { type: "dialogue", perso: "lamia-cendres", pose: "epuisee", texte: "C'est pas moi. C'est pas moi, ça." },
    { type: "narration", texte: "L'ombre grandit. Les mensonges la nourrissent — c'est comme ça qu'elle est née, de tout ce que la ville se raconte au lieu de regarder." },
    { type: "narration", texte: "Alors elle s'arrête de nier. Elle relève la tête." },
    { type: "aller", label: "cap_verite" },

    { type: "label", nom: "cap_assume" },
    { type: "aller", label: "cap_verite" },

    { type: "label", nom: "cap_verite" },
    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Oui. Je rôde. Je touche les effacés — quelqu'un doit bien leur fermer les yeux. Je murmure des noms de morts pour qu'ils restent morts au lieu de n'avoir jamais existé." },
    { type: "attendre", duree: 1100 },
    { type: "dialogue", perso: "lamia-cendres", pose: "marquee", texte: "Si ça fait de moi un monstre, d'accord. Je serai votre monstre. Mais je serai le monstre qui vous garde." },
    { type: "attendre", duree: 1400 },
    { type: "narration", texte: "L'ombre cesse de sourire. Une seconde, elle a l'air de ce qu'elle est vraiment : de la peur, sans personne dedans." },
    { type: "narration", texte: "Puis elle se couche. Docile. Une ombre a besoin qu'on la renie pour peser. Celle-là vient de trouver quelqu'un qui la porte." },
    { type: "carte", id: "carte-16-rumeur" },

    { type: "narration", texte: "L'OMBRE. Troisième fragment. Quelque part dans le souvenir-ancre, une ombre fraîche s'étend sur deux personnes assises." },
    { type: "flag", flags: { frag_ombre: true } },
    { type: "sfx", son: "carte" },
    { type: "aller", label: "retour" },

    /* ================== LE RETOUR AU CARREFOUR — la voix repousse ================== */

    { type: "label", nom: "retour" },
    { type: "decor", image: "remparts-nuit", transition: "fondu", duree: 1200 },
    { type: "perso", id: "lamia-cendres", pose: "neutre", position: "centre" },

    { type: "si", condition: { flagFaux: "retour1" },
      alors: [
        { type: "flag", flags: { retour1: true } },
        { type: "narration", texte: "Sur le chemin du retour, quelque chose se décoince en toi. Un mot. Un seul, mais entier." },
        { type: "dialogue", perso: "voix", texte: "Là." },
        { type: "dialogue", perso: "lamia-cendres", pose: "surprise", texte: "…tu as parlé ? Tu viens de parler." },
        { type: "narration", texte: "Elle rit. Un vrai rire, le premier depuis des semaines. La cendre, autour, recule d'un pas poli." }
      ],
      sinon: [
        { type: "si", condition: { flagFaux: "retour2" },
          alors: [
            { type: "flag", flags: { retour2: true } },
            { type: "dialogue", perso: "voix", texte: "Encore. Un." },
            { type: "dialogue", perso: "lamia-cendres", pose: "sourire", texte: "Deux mots. Tu progresses. À ce rythme, tu me fais une phrase avant l'aube." },
            { type: "pensee", texte: "Chaque fragment te rend un morceau. Elle recolle son souvenir, et c'est toi qui reprends forme." }
          ],
          sinon: [
            { type: "dialogue", perso: "voix", texte: "Il en reste. Un seul." },
            { type: "dialogue", perso: "lamia-cendres", pose: "regard", texte: "Presque une phrase entière. Tu me caches des choses, toi." },
            { type: "attendre", duree: 900 },
            { type: "narration", texte: "Elle regarde vers les hauteurs. Là où l'eau s'est arrêtée." }
          ] }
      ] },

    { type: "aller", label: "carrefour" },

    /* ================== KEFRIDA — la boîte ================== */

    { type: "label", nom: "kefrida" },
    { type: "carton", texte: "Les cascades de Kefrida", sousTitre: "Là où l'eau s'est arrêtée", duree: 2800 },
    { type: "decor", image: "kefrida-cendres", transition: "noir", duree: 1500 },
    { type: "perso", id: "lamia-cendres", pose: "neutre", position: "centre" },

    { type: "narration", texte: "La cascade est suspendue en plein vol. Des tonnes d'eau arrêtées entre le haut et le bas, figées en un rideau de verre gris qui ne tombe pas." },
    { type: "narration", texte: "Même la cendre n'ose pas se poser dessus. C'est le seul endroit propre de tout le pays." },
    { type: "dialogue", perso: "lamia-cendres", pose: "pensive", texte: "L'eau attend. Tout ce pays retient son souffle, en fait. Depuis le début." },

    { type: "narration", texte: "Elle passe derrière le rideau d'eau immobile. Et derrière, il n'y a pas de grotte." },
    { type: "attendre", duree: 1200 },
    { type: "narration", texte: "Il y a une rue. Sa rue. Celle du premier rêve — grise, silencieuse, et tout au bout, la tache rouge." },

    { type: "attendre", duree: 1100 },
    { type: "narration", texte: "Elle marche. La rue est plus longue que dedans que dehors, comme toutes les rues importantes. Et au bout —" },
    { type: "narration", texte: "La boîte. Rouge. Cabossée. Fermée par un cadenas que la rouille a soudé. Elle est plus petite que dans le rêve et plus grande que tout." },

    { type: "dialogue", perso: "lamia-cendres", pose: "genee", texte: "Bonsoir, toi." },
    { type: "narration", texte: "Elle pose la main dessus. Le métal est chaud. Dans un pays où tout est tiède comme la cendre, la boîte, elle, est chaude comme une journée de mai." },
    { type: "narration", texte: "LA BOÎTE. Quatrième fragment. L'ancre est complète — la journée trop chaude, le mur, l'ombre, et elle." },
    { type: "flag", flags: { frag_boite: true } },
    { type: "sfx", son: "carte" },

    { type: "attendre", duree: 1300 },
    { type: "narration", texte: "Et c'est le moment que tu choisis. Les quatre fragments te sont revenus, et avec eux, une phrase entière — la seule que tu aies jamais vraiment possédée." },
    { type: "dialogue", perso: "voix", texte: "Je reste. Quoi qu'il arrive." },

    { type: "attendre", duree: 1400, cacherBoite: true },
    { type: "perso", id: "lamia-cendres", pose: "surprise", position: "centre" },
    { type: "dialogue", perso: "lamia-cendres", texte: "…répète ça." },
    { type: "dialogue", perso: "voix", texte: "Je reste. Quoi qu'il arrive." },
    { type: "dialogue", perso: "lamia-cendres", pose: "triste", texte: "Je connais cette phrase. Je la connais d'ailleurs. D'avant. De plus vrai qu'ici." },
    { type: "pensee", texte: "Un restaurant presque vide. Une table pour deux sous une seule lampe. Tu l'as déjà dite, cette phrase, et elle avait déjà tout changé." },

    /* ---------- Le Greffier ---------- */

    { type: "attendre", duree: 1600 },
    { type: "narration", texte: "Des pas. Réguliers, soignés, sans hâte. Quelqu'un remonte la rue derrière elle en époussetant la cendre de ses manches." },
    { type: "perso", id: "lamia-cendres", pose: "determinee", position: "centre" },

    { type: "narration", texte: "Il est grand, gris, exact. Il a l'air d'un homme qui n'a jamais renversé une goutte d'encre de sa vie." },
    { type: "narration", texte: "« Remarquable collection », dit-il, et sa voix est celle d'un tiroir qu'on referme. « Quatre fragments. Il est rare qu'on me défasse si proprement. »" },
    { type: "dialogue", perso: "lamia-cendres", texte: "Le Greffier." },
    { type: "narration", texte: "« On m'appelle ainsi. Je tiens les registres. Je range ce qui traîne. » Il regarde la boîte rouge comme on regarde une faute d'orthographe." },

    { type: "attendre", duree: 1100 },
    { type: "narration", texte: "« Vous devriez me remercier, Veilleuse. Le premier tiroir que j'ai vidé pour vous — c'était le plus encombrant. Un garçon. Il vous regardait beaucoup trop. Un vrai désordre. »" },

    { type: "attendre", duree: 1500, cacherBoite: true },
    { type: "secousse", duree: 500 },
    { type: "dialogue", perso: "lamia-cendres", pose: "marquee", texte: "C'était toi." },
    { type: "narration", texte: "« C'est toujours moi. C'est ça, un registre. »" },
    { type: "narration", texte: "Il tourne les talons, sans peur aucune — et c'est ça, le pire. Il ajoute, sans se retourner :" },
    { type: "narration", texte: "« La boîte ne s'ouvre qu'avec un chiffre, et le chiffre n'existe plus. J'ai vérifié. Bonne nuit, Dévoreuse. »" },

    { type: "attendre", duree: 1600 },
    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Il ment. Il existe encore. Je le sens tenir." },
    { type: "dialogue", perso: "voix", texte: "Oui. Il tient." },

    { type: "musique", arret: true },
    { type: "carton", texte: "Le chiffre existe encore.", sousTitre: "✦ à suivre : Le Serment", duree: 3800 },

    { type: "finChapitre", suivant: "cendres03" }
  ]
};
