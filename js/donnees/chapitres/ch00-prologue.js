/* ============================================================
   PROLOGUE — « Trois fois »
   L1 → L2. Il la voit avant qu'elle ne le voie.
   ============================================================ */

export default {
  id: "ch00",
  numero: "0",
  titre: "Trois fois",
  sousTitre: "Université de Béjaïa — première année",
  peau: "souvenir",
  suivant: "ch01",

  noeuds: [

    /* ---------- 1. La première fois ---------- */

    { type: "carton", texte: "Première année", sousTitre: "Université de Béjaïa", duree: 2600 },
    { type: "musique", piste: "souvenir", fadeIn: 2500 },
    { type: "decor", image: "univ-cour-jour", transition: "fondu", duree: 1200 },

    { type: "narration", texte: "La cour est pleine. Elle est toujours pleine à cette heure-là — entre deux cours, tout le monde descend, et personne ne sait vraiment quoi faire de la demi-heure qui suit." },
    { type: "narration", texte: "Tu traverses. C'est tout ce que tu es venu faire aujourd'hui." },

    { type: "pensee", texte: "Vingt minutes à tuer. Le soleil tape. Le banc de gauche est pris, comme d'habitude." },

    { type: "attendre", duree: 900 },
    { type: "narration", texte: "Et puis il y a ce truc bizarre qui arrive parfois. Dans une foule où tu ne regardes personne, tu regardes quelqu'un." },

    { type: "cg", image: "cg-premiere-fois", legende: "La première fois", carte: "carte-01-moutarde" },

    { type: "narration", texte: "Elle est avec le groupe de Kenza. Kenza, elle vient de ta ville — vous vous êtes connus ici, il y a peu, comme se trouvent les gens du même coin perdus dans une grande fac." },
    { type: "pensee", texte: "Manches longues rayées noir et blanc. T-shirt moutarde par-dessus." },
    { type: "pensee", texte: "C'est le genre de détail qu'on n'est pas censé retenir. Tu vas le retenir pendant sept ans." },

    { type: "souvenir", id: "sv-premiere-fois" },

    { type: "choix", question: "Elles sont à dix mètres. Kenza te ferait signe si tu approchais.", options: [
      { texte: "Tu vas dire bonjour à Kenza. C'est normal, vous venez de la même ville.",
        effets: { complicite: 1, flags: { a_tente_prologue: true } }, aller: "p_approche" },
      { texte: "Tu continues ton chemin. Tu ne vas pas t'incruster dans un groupe de filles.",
        effets: { complicite: 0 }, aller: "p_passe" },
      { texte: "Tu ralentis un peu. Juste un peu. Pour rien.",
        effets: { complicite: 0, flags: { a_ralenti: true } }, aller: "p_ralentit" }
    ]},

    { type: "label", nom: "p_approche" },
    { type: "narration", texte: "Tu fais trois pas dans leur direction. Kenza est en train de raconter quelque chose avec les mains, tout le groupe rit, et tu comprends d'un coup que tu vas débarquer au milieu d'une histoire dont tu ne connais pas le début." },
    { type: "pensee", texte: "Ouais. Non." },
    { type: "narration", texte: "Tu bifurques vers la machine à café comme si c'était le plan depuis le début." },
    { type: "aller", label: "p_suite" },

    { type: "label", nom: "p_passe" },
    { type: "narration", texte: "Tu passes. Tu ne te retournes pas — enfin, une fois, mais ça ne compte pas si personne ne l'a vu." },
    { type: "aller", label: "p_suite" },

    { type: "label", nom: "p_ralentit" },
    { type: "narration", texte: "Tu ralentis. Personne ne remarque rien, parce qu'il n'y a rien à remarquer. Tu marches simplement moins vite pendant quatre secondes." },
    { type: "pensee", texte: "Quatre secondes. Tu t'en souviendras aussi." },
    { type: "aller", label: "p_suite" },

    { type: "label", nom: "p_suite" },
    { type: "attendre", duree: 700 },
    { type: "narration", texte: "Elle ne t'a pas vu. Pas une seule fois. Et c'est très bien comme ça, parce que tu n'aurais rien eu à lui dire." },

    /* ---------- 2. Alger ---------- */

    { type: "musique", arret: true },
    { type: "carton", texte: "Quelques mois plus tard", sousTitre: "Alger — le jour du TCF", duree: 2800 },
    { type: "decor", image: "vide", transition: "noir", duree: 900 },

    { type: "narration", texte: "De cette journée-là, tu ne gardes presque rien. Le bus de nuit. La façade trop grande. Les listes de salles collées derrière une vitre, et quarante personnes qui essaient de lire en même temps." },
    { type: "pensee", texte: "Salle 12. Ou 14. Tu ne sais plus." },

    { type: "attendre", duree: 800 },
    { type: "narration", texte: "Ce que tu gardes, c'est trois secondes sur les marches. Elle est là. Loin. Avec quelqu'un — un ami, tu crois, tu n'as jamais su." },

    { type: "narration", texte: "Tu rentres dans le bâtiment pour lire ta salle." },
    { type: "attendre", duree: 1100 },
    { type: "narration", texte: "Tu ressors." },
    { type: "attendre", duree: 1400 },
    { type: "narration", texte: "Elle n'est plus là." },

    { type: "attendre", duree: 900 },
    { type: "narration", texte: "Pas pendant l'épreuve. Pas après. Pas sur le parvis, pas devant les bus. Nulle part." },
    { type: "carte", id: "carte-07-tcf" },

    { type: "pensee", texte: "Le soir, chez toi, tu fais un truc un peu ridicule." },
    { type: "narration", texte: "Tu écris à une amie sur Instagram. Tu décris quelqu'un que tu as vu deux fois : yeux verts, cheveux châtains, probablement de Tizi Ouzou." },

    { type: "choix", question: "Tu ajoutes quoi ?", options: [
      { texte: "« Non mais c'est rien, laisse tomber, je demandais comme ça. »",
        effets: { complicite: 0 }, aller: "a_rien" },
      { texte: "« Si jamais tu vois quelqu'un qui ressemble à ça, tu me dis. »",
        effets: { complicite: 1, flags: { a_insiste: true } }, aller: "a_insiste" }
    ]},

    { type: "label", nom: "a_rien" },
    { type: "narration", texte: "Elle répond « ok mdr ». Fin de la recherche." },
    { type: "aller", label: "a_suite" },

    { type: "label", nom: "a_insiste" },
    { type: "narration", texte: "Elle répond qu'elle va y penser. Elle n'y a jamais pensé. C'est normal — tu venais de lui décrire à peu près une fille sur quatre du campus." },
    { type: "aller", label: "a_suite" },

    { type: "label", nom: "a_suite" },
    { type: "attendre", duree: 800 },
    { type: "pensee", texte: "Voilà. Deux fois. Deux fois, et tu ne sais même pas son prénom." },
    { type: "souvenir", id: "sv-alger" },

    /* ---------- 3. La deuxième année ---------- */

    { type: "carton", texte: "Deuxième année", sousTitre: "Même section", duree: 2600 },
    { type: "musique", piste: "souvenir", fadeIn: 2000 },
    { type: "decor", image: "univ-cour-jour", transition: "fondu", duree: 1200 },

    { type: "narration", texte: "Toute une année dans la même section. Les mêmes couloirs, les mêmes horaires, le même amphi bondé." },
    { type: "narration", texte: "Vous ne vous êtes jamais parlé. Pas une fois." },

    { type: "pensee", texte: "Ce qui est fou, c'est que ça ne t'a même pas frustré. Tu as juste enregistré qu'elle existait, comme on enregistre un visage dans un bus qu'on prend tous les jours." },

    { type: "narration", texte: "Il paraît qu'au bout de la troisième fois, le cerveau arrête de traiter quelqu'un comme un inconnu. Il décide, tout seul, sans te demander ton avis, que cette personne fait partie de ton monde." },
    { type: "souvenir", id: "sv-l2" },

    { type: "attendre", duree: 900 },
    { type: "pensee", texte: "Deux fois de loin. Une année entière à trois rangs d'écart." },
    { type: "pensee", texte: "Il ne manque plus qu'une raison de lui adresser la parole." },

    { type: "attendre", duree: 1200 },
    { type: "narration", texte: "Elle en portera une autour du cou, l'année suivante." },

    { type: "finChapitre", suivant: "ch01" }
  ]
};
