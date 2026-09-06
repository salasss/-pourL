/* ============================================================
   CENDRES — « La Veilleuse »
   Chapitre bonus, déblocable après la fin du chapitre 5.
   Le miroir de toute l'histoire : dans la vraie vie, il l'a vue
   avant qu'elle ne le voie. Ici, elle est la seule à le voir
   encore. Le joueur est la voix. Registre sec, court, lent.
   ============================================================ */

export default {
  id: "cendres01",
  numero: "✦",
  titre: "La Veilleuse",
  sousTitre: "Le Serment de Cendres",
  peau: "cendres",

  noeuds: [

    /* ---------- 1. La cité sous la cendre ---------- */

    { type: "carton", texte: "Ailleurs.", sousTitre: "Ou peut-être ici, vu de très loin", duree: 3200 },
    { type: "musique", piste: "cendres", fadeIn: 3000 },
    { type: "decor", image: "bgayet-cendres", transition: "fondu", duree: 1800 },

    { type: "narration", texte: "La cendre tombe sur Bgayet depuis si longtemps que plus personne ne la remarque." },
    { type: "narration", texte: "C'est le problème, avec la cendre. Ce n'est pas qu'elle recouvre. C'est qu'on s'habitue." },

    { type: "attendre", duree: 1200 },
    { type: "narration", texte: "Elle tombe sans bruit, tiède, régulière. Elle se pose sur les toits, sur la mer, sur les noms. Et ce qu'elle touche assez longtemps, on l'oublie." },
    { type: "narration", texte: "On appelle ça l'Oubli. Enfin — on l'appelait. Le mot lui-même commence à partir." },

    { type: "attendre", duree: 1400 },
    { type: "pensee", texte: "Toi, tu n'as pas de corps. Tu as dû en avoir un — il t'en reste une impression, comme une chaise garde la forme de celui qui s'est levé." },
    { type: "pensee", texte: "Tu n'as que des mots. Et une seule personne au monde les entend encore." },

    /* ---------- 2. Elle ---------- */

    { type: "decor", image: "remparts-nuit", transition: "fondu", duree: 1500 },
    { type: "perso", id: "lamia-cendres", pose: "neutre", position: "centre" },

    { type: "narration", texte: "Elle marche sur les remparts, du pas de quelqu'un qui compte ses forces. Capuche grise, sangles de cuir, et au cou une paire d'ailes en fer noirci." },
    { type: "carte", id: "carte-14-ailes-fer" },
    { type: "narration", texte: "Elle ne sait plus qui lui a donné la première version de ce pendentif — celle d'avant, la légère, l'argentée. Elle sait seulement qu'elle ne l'enlève pas." },

    { type: "attendre", duree: 1100 },
    { type: "narration", texte: "Ses yeux sont verts. C'est important. C'est la seule couleur vivante de toute la ville." },
    { type: "narration", texte: "Et ils changent avec les saisons. Tant qu'ils changent, elle se souvient. Le jour où ils se figeront, la cendre aura fini son travail." },

    { type: "choix", question: "Elle s'est arrêtée au bord du rempart. Tu es sa voix dans la nuit. Tu dis quoi ?", options: [
      { texte: "« Tu devrais dormir. »",
        effets: { flags: { voix_douce: true } }, aller: "v_dormir" },
      { texte: "« Encore debout ? »",
        effets: {}, aller: "v_debout" },
      { texte: "Rien. La regarder veiller.",
        effets: { flags: { voix_silence: true } }, aller: "v_rien" }
    ]},

    { type: "label", nom: "v_dormir" },
    { type: "dialogue", perso: "lamia-cendres", pose: "neutre", texte: "Dormir. Et à mon réveil, il manquera quoi, cette fois ?" },
    { type: "narration", texte: "Elle ne le dit pas méchamment. Elle le dit comme on récite une règle du jeu." },
    { type: "aller", label: "v_suite" },

    { type: "label", nom: "v_debout" },
    { type: "dialogue", perso: "lamia-cendres", pose: "neutre", texte: "Tu tombes toujours au même moment, toi. Quand je suis sur le point d'arrêter." },
    { type: "aller", label: "v_suite" },

    { type: "label", nom: "v_rien" },
    { type: "narration", texte: "Tu ne dis rien. Elle tourne quand même la tête, exactement vers l'endroit d'où tu ne parles pas." },
    { type: "dialogue", perso: "lamia-cendres", pose: "neutre", texte: "Ton silence, je l'entends aussi, tu sais." },
    { type: "aller", label: "v_suite" },

    { type: "label", nom: "v_suite" },

    /* ---------- 3. Les Sans-Nom ---------- */

    { type: "attendre", duree: 900 },
    { type: "narration", texte: "En bas, sur la place, ils sont une vingtaine. Debout. Tranquilles. Espacés régulièrement, comme des arbres plantés par quelqu'un de soigneux." },
    { type: "narration", texte: "Les Sans-Nom. La cendre les a finis depuis longtemps. Ils ne s'en sont pas aperçus." },
    { type: "narration", texte: "Ils sourient poliment. À rien." },

    { type: "attendre", duree: 1100 },
    { type: "dialogue", perso: "lamia-cendres", pose: "neutre", texte: "La semaine dernière, la boulangère a oublié le prénom de son fils. Trois jours après, elle a oublié qu'elle avait un fils." },
    { type: "dialogue", perso: "lamia-cendres", pose: "epuisee", texte: "Et hier, il ne manquait plus à personne. C'est comme ça que ça marche." },
    { type: "attendre", duree: 900 },
    { type: "dialogue", perso: "lamia-cendres", pose: "neutre", texte: "C'est propre, comme fléau. Ça ne laisse même pas de deuil." },

    { type: "pensee", texte: "Personne ne hurle, dans cette ville. C'est ce qui te fait le plus peur. Tout le monde sourit." },

    /* ---------- 4. La bibliothèque des mémoires ---------- */

    { type: "carton", texte: "La bibliothèque", sousTitre: "Là où la ville rangeait ses souvenirs", duree: 2800 },
    { type: "decor", image: "bibliotheque-memoires", transition: "noir", duree: 1400 },
    { type: "perso", id: "lamia-cendres", pose: "neutre", position: "centre" },

    { type: "narration", texte: "Des milliers de tiroirs de fer, du sol au plafond. Chacun portait un nom. Chacun gardait quelqu'un." },
    { type: "narration", texte: "La moitié pendent, ouverts. Vides. La cendre ne referme jamais derrière elle." },

    { type: "attendre", duree: 1100 },
    { type: "narration", texte: "Elle traverse la salle sans regarder les étiquettes. Elle connaît le chemin. Elle tire un tiroir précis, à hauteur d'épaule." },
    { type: "attendre", duree: 1300 },
    { type: "narration", texte: "Il est vide. Il est vide depuis longtemps." },
    { type: "carte", id: "carte-15-tiroir" },

    { type: "dialogue", perso: "lamia-cendres", pose: "epuisee", texte: "Il portait ton nom. J'en suis sûre. Je l'ai lu cent fois, ici, à cette place." },
    { type: "attendre", duree: 1000 },
    { type: "dialogue", perso: "lamia-cendres", pose: "triste", texte: "Je ne sais plus ton nom. Je sais tout le reste. Ta façon de te taire. Le rythme de tes phrases. Mais plus ton nom." },

    { type: "choix", question: "Elle attend. Tu réponds quoi ?", options: [
      { texte: "« Ce n'est pas grave. »",
        effets: {}, aller: "n_pasgrave" },
      { texte: "Essayer de dire ton nom.",
        effets: { flags: { a_essaye_nom: true } }, aller: "n_essaie" },
      { texte: "« Toi non plus, tu ne t'appelles plus. Pour moi tu es juste toi. »",
        effets: { flags: { voix_toi: true } }, aller: "n_toi" }
    ]},

    { type: "label", nom: "n_pasgrave" },
    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Si. C'est grave." },
    { type: "narration", texte: "Elle referme le tiroir vide, doucement, comme on borde quelqu'un." },
    { type: "aller", label: "n_suite" },

    { type: "label", nom: "n_essaie" },
    { type: "narration", texte: "Tu essaies. Tu vas chercher ton nom là où il devrait être." },
    { type: "attendre", duree: 1200 },
    { type: "narration", texte: "Il n'y a que de la cendre à la place. Le fléau t'a pris toi aussi. Il ne t'a laissé que la voix." },
    { type: "dialogue", perso: "lamia-cendres", pose: "triste", texte: "Arrête. Je t'entends chercher. Arrête, ça me fait mal pour deux." },
    { type: "aller", label: "n_suite" },

    { type: "label", nom: "n_toi" },
    { type: "dialogue", perso: "lamia-cendres", pose: "neutre", texte: "Juste toi. D'accord." },
    { type: "attendre", duree: 800 },
    { type: "dialogue", perso: "lamia-cendres", pose: "epuisee", texte: "C'est déjà un nom, remarque. C'est le tien. Personne d'autre ne l'a." },
    { type: "aller", label: "n_suite" },

    { type: "label", nom: "n_suite" },

    /* ---------- 5. La marque ---------- */

    { type: "decor", image: "remparts-nuit", transition: "fondu", duree: 1300 },
    { type: "perso", id: "lamia-cendres", pose: "marquee", position: "centre" },

    { type: "narration", texte: "La cendre est montée pendant la nuit. Sur sa joue gauche, jusqu'à la tempe — comme du givre sur une vitre." },
    { type: "narration", texte: "C'est le prix. Chaque souvenir qu'elle arrache à l'Oubli, elle le paie. Et toi, tu es le souvenir le plus lourd qu'elle porte." },

    { type: "attendre", duree: 1100 },
    { type: "dialogue", perso: "lamia-cendres", pose: "marquee", texte: "Ça ne fait pas mal. C'est ça qui devrait m'inquiéter, je crois." },

    { type: "choix", question: "Te souvenir d'elle la maintient debout. Se souvenir de toi la consume.", options: [
      { texte: "« Lâche-moi. Oublie-moi, et ça s'arrête. »",
        effets: { flags: { a_offert_oubli: true } }, aller: "m_lache" },
      { texte: "« Tiens bon. »",
        effets: {}, aller: "m_tiens" },
      { texte: "« Partage. Donne-m'en la moitié. »",
        effets: { flags: { a_partage: true } }, aller: "m_partage" }
    ]},

    { type: "label", nom: "m_lache" },
    { type: "attendre", duree: 900 },
    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "C'est pas toi qui décides ça." },
    { type: "narration", texte: "Elle le dit sans lever la voix. Comme une porte qu'on ferme à clé." },
    { type: "aller", label: "m_suite" },

    { type: "label", nom: "m_tiens" },
    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Je tiens. C'est ce que je fais. C'est tout ce que je fais." },
    { type: "aller", label: "m_suite" },

    { type: "label", nom: "m_partage" },
    { type: "dialogue", perso: "lamia-cendres", pose: "neutre", texte: "Si je pouvais, je t'aurais déjà tout donné. Mais ça ne se partage pas. Ça se garde." },
    { type: "aller", label: "m_suite" },

    { type: "label", nom: "m_suite" },

    /* ---------- 6. L'ancre ---------- */

    { type: "retirerPerso", id: "lamia-cendres" },
    { type: "decor", image: "vide", transition: "noir", duree: 1200 },

    { type: "narration", texte: "Il lui reste un souvenir que la cendre ne mord pas. Elle a tout essayé pour comprendre pourquoi. Il n'a ni nom, ni visage, ni date." },
    { type: "narration", texte: "Il tient en quatre choses." },
    { type: "attendre", duree: 1000 },
    { type: "narration", texte: "Une journée trop chaude." },
    { type: "attendre", duree: 800 },
    { type: "narration", texte: "Un mur." },
    { type: "attendre", duree: 800 },
    { type: "narration", texte: "De l'ombre." },
    { type: "attendre", duree: 800 },
    { type: "narration", texte: "Et une boîte rouge qui ne s'ouvre jamais." },

    { type: "attendre", duree: 1400 },
    { type: "decor", image: "remparts-nuit", transition: "fondu", duree: 1400 },
    { type: "perso", id: "lamia-cendres", pose: "determinee", position: "centre" },

    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Et un chiffre. Le sept." },
    { type: "dialogue", perso: "lamia-cendres", pose: "neutre", texte: "Je ne sais pas ce qu'il ouvre. Mais quand tout tremble, je compte jusqu'à sept, et ça tient." },

    { type: "attendre", duree: 1400 },
    { type: "pensee", texte: "Toi, tu sais ce que c'est. Tu es peut-être la dernière chose au monde qui le sait." },
    { type: "pensee", texte: "Ce n'est pas un chiffre. C'est une date. C'est un serment, fait à l'ombre d'un mur, un jour de trop grande chaleur, à côté d'une boîte rouge fermée à clé." },

    { type: "attendre", duree: 1200 },
    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Tant que celui-là tient, tu existes. Je ne sais plus qui tu es. Mais tu es à moi. Ça, la cendre ne l'aura pas." },

    { type: "souvenir", id: "sv-7-mai" },
    { type: "retirerPerso", id: "lamia-cendres" },
    { type: "musique", arret: true },

    { type: "carton", texte: "Elle tient.", sousTitre: "Quelque part, très loin, une boîte rouge reste fermée sur un serment.", duree: 4200 },

    { type: "finChapitre", suivant: "cendres02" }
  ]
};
