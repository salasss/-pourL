/* ============================================================
   CENDRES ✦3 — « Le Serment »
   La fin. Le Greffier, la tentation de l'oubli, le sept,
   le nom. Puis le réveil à Béjaïa, un 1ᵉʳ octobre.

   Règle d'écriture : le Greffier ne se bat pas. Il classe.
   On ne le tue pas — on lui donne quelque chose d'inclassable.
   ============================================================ */

export default {
  id: "cendres03",
  numero: "✦",
  titre: "Le Serment",
  sousTitre: "Le chiffre existe encore",
  peau: "cendres",

  noeuds: [

    /* ---------- 1. La boîte qui ne s'ouvre pas ---------- */

    { type: "carton", texte: "Le Serment", duree: 2800 },
    { type: "musique", piste: "cendres", fadeIn: 3000 },
    { type: "decor", image: "kefrida-cendres", transition: "fondu", duree: 1600 },
    { type: "perso", id: "lamia-cendres", pose: "determinee", position: "centre" },

    { type: "narration", texte: "Elle est revenue derrière l'Eau Debout. Les quatre fragments tiennent dans elle comme quatre braises : la chaleur, le mur, l'ombre, la boîte." },
    { type: "narration", texte: "Le souvenir est presque entier. Il a une journée, un lieu, une lumière. Il lui manque un chiffre." },

    { type: "narration", texte: "Elle pose les deux mains sur le métal rouge. Elle pousse. Elle force. Elle jure — très mal, très bas, dans une langue que la cendre n'a pas encore mangée." },
    { type: "attendre", duree: 1200 },
    { type: "narration", texte: "Le cadenas ne bouge pas d'un cheveu." },

    { type: "dialogue", perso: "lamia-cendres", pose: "epuisee", texte: "Quatre morceaux et une serrure. Il me manque le chiffre." },
    { type: "dialogue", perso: "voix", texte: "Il est quelque part. Dans un tiroir." },
    { type: "attendre", duree: 900 },
    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Alors on va chercher le tiroir. Et je vais avoir une conversation avec le bibliothécaire." },

    /* ---------- 2. La bibliothèque, et lui ---------- */

    { type: "carton", texte: "La bibliothèque des mémoires", duree: 2400 },
    { type: "decor", image: "bibliotheque-memoires", transition: "noir", duree: 1500 },
    { type: "perso", id: "lamia-cendres", pose: "neutre", position: "centre" },

    { type: "narration", texte: "Il est là, au milieu de l'allée centrale, en train d'aligner une pile de fiches sur l'angle d'une table. Il ne se retourne pas quand elle entre. Il finit son geste." },
    { type: "narration", texte: "« Vous êtes en avance », dit le Greffier. « D'ordinaire, les Veilleuses viennent me voir plus tard. Quand elles ont compris qu'elles ne gagneront pas. »" },

    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Le chiffre. Rends-le-moi." },
    { type: "narration", texte: "« Il n'est pas à moi. Il n'est à personne — c'est bien tout le problème. »" },
    { type: "attendre", duree: 1000 },
    { type: "narration", texte: "Il se retourne enfin. Il n'a pas de visage particulier. Il a le visage de quelqu'un qu'on a déjà croisé à un guichet." },

    { type: "narration", texte: "« Laissez-moi vous expliquer mon travail, puisque vous êtes venue jusqu'ici. »" },
    { type: "narration", texte: "« Je ne détruis rien, Veilleuse. Je range. Chaque chose a un tiroir : un souvenir, un propriétaire, une étiquette. Quand le tiroir est bien fermé, la chose cesse de traîner dans le monde. C'est propre. C'est tout. »" },

    { type: "dialogue", perso: "lamia-cendres", pose: "marquee", texte: "Tu appelles ça ranger. Les gens en bas s'effacent debout, en souriant." },
    { type: "narration", texte: "« Ils ne souffrent pas. C'est plus que ce que vous leur offrez, vous. »" },

    /* ---------- 3. Ce qu'elle a fait ---------- */

    { type: "attendre", duree: 1200 },
    { type: "narration", texte: "Il ouvre un tiroir au hasard, à hauteur de hanche, et lit à voix haute comme on lit un relevé." },
    { type: "narration", texte: "« Voyons. Vous. Trois cent quarante nuits sans dormir plus de deux heures. Un été échangé à des singes. Trente noms de morts récités jusqu'à l'aube — la ville en parle encore, d'ailleurs, et pas en bien. »" },

    { type: "si", condition: { flag: "rumeur_folle" },
      alors: [
        { type: "narration", texte: "« Ah, et le berger qui vous a trouvée au pied du mur. Il raconte que vous mangiez leurs noms. Il le raconte tous les soirs. Il y croit. »" }
      ] },
    { type: "si", condition: { flag: "paye_souvenir" },
      alors: [
        { type: "narration", texte: "« Et ce souvenir que vous avez donné là-haut, sur le pic. Une salle éclairée, une odeur de friture, quelqu'un en face de vous. Vous l'avez vendu pour une pierre chaude. Vous ne le récupérerez pas. »" }
      ] },

    { type: "attendre", duree: 1100 },
    { type: "narration", texte: "« Tout ça pour un tiroir vide. Pour une chose dont vous ne savez même plus le nom. »" },
    { type: "perso", id: "lamia-cendres", pose: "epuisee", position: "centre" },
    { type: "attendre", duree: 1400, cacherBoite: true },

    { type: "narration", texte: "Et pour la première fois depuis que tu la connais, elle ne répond pas." },

    /* ---------- 4. La tentation ---------- */

    { type: "narration", texte: "Il pousse un tiroir vers elle. Propre, neuf, vide, avec une étiquette où il n'y a rien d'écrit encore." },
    { type: "narration", texte: "« Je vous propose un classement. Vous me donnez ce qu'il reste de lui — cette voix que vous entendez, et à laquelle personne ne croit. Je ferme le tiroir. »" },
    { type: "narration", texte: "« Et demain vous dormez. Vous ne saurez même pas que vous avez arrêté de chercher. C'est la partie élégante : on ne regrette jamais ce qu'on a bien rangé. »" },

    { type: "attendre", duree: 1300 },
    { type: "dialogue", perso: "lamia-cendres", pose: "triste", texte: "…" },
    { type: "narration", texte: "Elle regarde le tiroir. Longtemps. Elle est fatiguée d'une fatigue qui ne se dort pas." },
    { type: "dialogue", perso: "lamia-cendres", pose: "epuisee", texte: "Dis quelque chose, toi." },

    { type: "choix", question: "Tu as une phrase entière, maintenant. Une seule. Tu la donnes comment ?", options: [
      { texte: "« Prends le tiroir. Repose-toi. Je ne t'en voudrai pas — je ne serai plus là pour ça. »",
        effets: { flags: { a_offert_le_tiroir: true } }, aller: "s_offre" },
      { texte: "« Si tu me ranges, il gagne. Pas contre moi : contre toi. »",
        effets: { flags: { a_argumente: true } }, aller: "s_argument" },
      { texte: "« Je sais ce que tu as fait pour me garder. J'étais là. »",
        effets: { flags: { a_dit_je_sais: true } }, aller: "s_jesais" }
    ]},

    { type: "label", nom: "s_offre" },
    { type: "narration", texte: "Tu lui offres le repos. Sincèrement. C'est la chose la plus généreuse que tu puisses faire, et c'est aussi la seule qu'elle ne te pardonnera pas." },
    { type: "perso", id: "lamia-cendres", pose: "determinee", position: "centre" },
    { type: "dialogue", perso: "lamia-cendres", texte: "Non." },
    { type: "attendre", duree: 900 },
    { type: "dialogue", perso: "lamia-cendres", texte: "Tu as déjà essayé ça, un jour. Dans un endroit avec une lampe et une table. Tu m'as dit de prendre mon temps, que tu resterais quoi qu'il arrive." },
    { type: "dialogue", perso: "lamia-cendres", pose: "marquee", texte: "Alors reste. C'est tout ce que j'ai jamais eu à te demander." },
    { type: "aller", label: "s_reponse" },

    { type: "label", nom: "s_argument" },
    { type: "narration", texte: "Tu lui dis la seule chose vraie : ce tiroir ne te concerne plus depuis longtemps. C'est elle qu'il range." },
    { type: "perso", id: "lamia-cendres", pose: "determinee", position: "centre" },
    { type: "dialogue", perso: "lamia-cendres", texte: "…oui. C'est ça, en fait. Il me propose de me classer moi, et de te facturer en supplément." },
    { type: "aller", label: "s_reponse" },

    { type: "label", nom: "s_jesais" },
    { type: "attendre", duree: 1000 },
    { type: "perso", id: "lamia-cendres", pose: "surprise", position: "centre" },
    { type: "dialogue", perso: "lamia-cendres", texte: "Quoi ?" },
    { type: "dialogue", perso: "voix", texte: "Les trois cent quarante nuits. L'été vendu. Les noms récités. J'y étais. Je n'ai rien pu faire, mais j'y étais, à chaque fois." },
    { type: "attendre", duree: 1200 },
    { type: "dialogue", perso: "lamia-cendres", pose: "triste", texte: "Et tu es resté quand même." },
    { type: "dialogue", perso: "voix", texte: "Je reste. Quoi qu'il arrive." },
    { type: "aller", label: "s_reponse" },

    /* ---------- 5. L'inclassable ---------- */

    { type: "label", nom: "s_reponse" },
    { type: "attendre", duree: 1400 },
    { type: "perso", id: "lamia-cendres", pose: "determinee", position: "centre" },

    { type: "narration", texte: "Elle repousse le tiroir vide vers lui. Doucement. Sans colère — et c'est ça qui le dérange." },
    { type: "dialogue", perso: "lamia-cendres", texte: "J'ai une question, Greffier. Une vraie." },
    { type: "dialogue", perso: "lamia-cendres", texte: "Son tiroir était vide quand je l'ai ouvert. Tu l'avais rangé. Alors pourquoi je me souviens encore de lui ?" },

    { type: "attendre", duree: 1300 },
    { type: "narration", texte: "Le Greffier ouvre la bouche. La referme. Pour la première fois, il a l'air de chercher une fiche qui n'est pas au bon endroit." },
    { type: "narration", texte: "« Une erreur de classement. Ça arrive. Une fois par siècle. »" },
    { type: "dialogue", perso: "lamia-cendres", pose: "marquee", texte: "Non." },

    { type: "attendre", duree: 1100 },
    { type: "dialogue", perso: "lamia-cendres", texte: "Un tiroir, un propriétaire, une étiquette. C'est ta règle. Tu me l'as dit toi-même." },
    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Mais ce jour-là, on était deux. Le même souvenir, dans deux personnes, au même moment. Il te faudrait deux tiroirs pour une seule chose." },
    { type: "attendre", duree: 1200 },
    { type: "dialogue", perso: "lamia-cendres", texte: "Tu ne peux pas ranger un serment, Greffier. C'est pas un objet. C'est un accord." },

    { type: "attendre", duree: 1500, cacherBoite: true },
    { type: "secousse", duree: 600 },

    { type: "narration", texte: "Autour d'eux, les milliers de tiroirs se mettent à trembler dans leurs rails. Pas de colère : de la panique administrative." },
    { type: "narration", texte: "« Rendez-moi ça. Rendez-moi ça immédiatement, ce n'est pas classable — »" },
    { type: "narration", texte: "« — vous ne pouvez pas laisser une chose pareille traîner dans un monde — »" },
    { type: "attendre", duree: 1100 },
    { type: "narration", texte: "Il s'éteint comme une lampe. Pas de cri, pas de cendre. Il s'arrête, simplement, comme un employé à l'heure exacte de sa retraite." },
    { type: "pensee", texte: "Il n'a jamais rien détruit, c'est vrai. Il n'a jamais su non plus quoi faire d'une chose qui appartient à deux personnes." },

    /* ---------- 6. Le sept ---------- */

    { type: "musique", arret: true },
    { type: "carton", texte: "Il reste le chiffre.", duree: 2600 },
    { type: "musique", piste: "tendre", fadeIn: 3200 },
    { type: "decor", image: "kefrida-cendres", transition: "fondu", duree: 1600 },
    { type: "perso", id: "lamia-cendres", pose: "neutre", position: "centre" },

    { type: "narration", texte: "La boîte rouge est toujours là, au bout de la rue derrière l'Eau Debout. Le cadenas est toujours soudé." },
    { type: "dialogue", perso: "lamia-cendres", texte: "Il disait que le chiffre n'existait plus." },
    { type: "dialogue", perso: "voix", texte: "Il mentait. Tu le comptes depuis le début." },

    { type: "attendre", duree: 1400 },
    { type: "narration", texte: "Elle ferme les yeux. Et elle fait ce qu'elle fait depuis des mois quand tout tremble : elle compte." },

    { type: "compter", aide: "Compte avec elle.",
      liste: ["Un.", "Deux.", "Trois.", "Quatre.", "Cinq.", "Six.", "Sept."] },

    { type: "attendre", duree: 1600, cacherBoite: true },
    { type: "sfx", son: "carte" },
    { type: "voile", style: "flash", duree: 600 },
    { type: "narration", texte: "Le cadenas tombe dans l'herbe grise. Il n'a pas été forcé. Il a été convaincu." },

    /* ---------- 7. Le nom ---------- */

    { type: "attendre", duree: 1200 },
    { type: "narration", texte: "Elle ouvre la boîte." },
    { type: "attendre", duree: 1400 },
    { type: "narration", texte: "Il n'y a pas de trésor dedans. Pas d'arme, pas de lumière, pas de fin du monde." },
    { type: "attendre", duree: 1000 },
    { type: "narration", texte: "Il y a un bout de papier plié en quatre, écrit à la main, par quelqu'un qui écrivait vite." },

    { type: "attendre", duree: 1300 },
    { type: "narration", texte: "Cinq lettres." },
    { type: "attendre", duree: 1500, cacherBoite: true },

    { type: "perso", id: "lamia-cendres", pose: "surprise", position: "centre" },
    { type: "dialogue", perso: "lamia-cendres", texte: "…" },
    { type: "attendre", duree: 1200 },
    { type: "dialogue", perso: "lamia-cendres", pose: "triste", texte: "Salas." },

    { type: "attendre", duree: 1800, cacherBoite: true },
    { type: "carte", id: "carte-17-nom" },

    { type: "narration", texte: "Le nom sort de sa bouche et le monde se souvient de quelque chose." },
    { type: "narration", texte: "La cendre s'arrête de tomber. Pas d'un coup — elle hésite, comme une pluie qui ne sait plus si elle continue." },
    { type: "narration", texte: "Puis elle remonte. Doucement, de partout, des toits, des noms, de la mer. Un monde entier qui range à l'envers." },

    { type: "si", condition: { rumeurMin: 6 },
      alors: [
        { type: "attendre", duree: 1200 },
        { type: "narration", texte: "En bas, dans la ville, ceux qui la craignaient le plus se réveillent les premiers. C'est logique, quand on y pense : pour avoir peur de quelqu'un pendant des mois, il faut s'en souvenir tous les jours." },
        { type: "narration", texte: "Sa légende l'a gardée vivante dans des têtes qui ne voulaient pas d'elle. La Dévoreuse leur a sauvé la mémoire en leur faisant peur." }
      ],
      sinon: [
        { type: "attendre", duree: 1000 },
        { type: "narration", texte: "En bas, dans la ville, personne ne saura jamais qui a fait ça. Elle est passée si discrètement qu'elle n'a laissé aucune légende derrière elle. C'était le but." }
      ] },

    { type: "attendre", duree: 1400 },
    { type: "narration", texte: "Derrière elle, l'Eau Debout craque. Le rideau de verre gris tremble sur toute sa hauteur." },
    { type: "attendre", duree: 1000 },
    { type: "narration", texte: "Et l'eau se remet à tomber. Pour la première fois depuis des années, quelque chose, dans ce pays, fait du bruit." },
    { type: "sfx", son: "coeur" },

    { type: "attendre", duree: 1600 },
    { type: "dialogue", perso: "lamia-cendres", pose: "determinee", texte: "Salas. Salas. Salas." },
    { type: "narration", texte: "Elle le répète comme on répète un numéro qu'on a peur d'oublier avant d'arriver au téléphone." },

    { type: "dialogue", perso: "voix", texte: "Je suis là." },
    { type: "attendre", duree: 1200 },
    { type: "dialogue", perso: "lamia-cendres", pose: "sourire", texte: "Je sais. T'as jamais été ailleurs." },

    /* ---------- 8. Le réveil ---------- */

    { type: "attendre", duree: 1600, cacherBoite: true },
    { type: "retirerPerso", id: "lamia-cendres" },
    { type: "voile", style: "flash", duree: 700 },
    { type: "peau", nom: "souvenir" },
    { type: "decor", image: "vide", transition: "fondu", duree: 1400 },

    { type: "carton", texte: "1ᵉʳ octobre", sousTitre: "Béjaïa", duree: 3000 },

    { type: "narration", texte: "Elle se réveille. Pas en sursaut, cette fois. Doucement, comme on remonte d'une eau profonde et tiède." },
    { type: "narration", texte: "Il fait jour. C'est le premier octobre, et dehors la ville fait le bruit normal d'une ville qui n'a rien oublié de personne." },

    { type: "attendre", duree: 1100 },
    { type: "narration", texte: "Elle reste immobile une minute entière, à tenir le rêve à deux mains avant qu'il ne fonde. Il ne fond pas. Celui-là ne fond pas." },

    { type: "attendre", duree: 1200 },
    { type: "narration", texte: "Elle attrape son téléphone sur la table de nuit." },
    { type: "attendre", duree: 1000 },
    { type: "narration", texte: "Il y a déjà un message. Envoyé à 6 h 12, par quelqu'un qui, à Perpignan, n'a manifestement pas beaucoup dormi non plus." },

    { type: "attendre", duree: 1400 },
    { type: "narration", texte: "« Joyeux anniversaire. »" },
    { type: "attendre", duree: 1600 },

    { type: "narration", texte: "Elle tape sa réponse à une main, encore à moitié dans la cendre, avec cette faute de frappe qu'elle fait toujours quand elle est pressée :" },
    { type: "attendre", duree: 1200 },
    { type: "narration", texte: "« il faut que je te raconte la fin de mon rêve. »" },

    { type: "attendre", duree: 1800, cacherBoite: true },
    { type: "musique", arret: true },

    { type: "carton", texte: "Merci d'avoir tenu.", sousTitre: "— Salas", duree: 4200 },

    { type: "finChapitre" }
  ]
};
