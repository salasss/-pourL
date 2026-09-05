/* ============================================================
   CHAPITRE 3 — « 7 mai 2022 »
   Le sommet du jeu. Court, lent, et le trou de mémoire est
   canon : on le joue, on ne le comble pas.
   ============================================================ */

export default {
  id: "ch03",
  numero: "3",
  titre: "7 mai 2022",
  sousTitre: "La placette",
  peau: "souvenir",
  suivant: "ch04",

  noeuds: [

    { type: "carton", texte: "7 mai 2022", sousTitre: "La placette", duree: 3000 },
    { type: "musique", piste: "tendre", fadeIn: 3000 },
    { type: "decor", image: "placette-7-mai", transition: "fondu", duree: 1600 },

    { type: "narration", texte: "Il fait chaud. Pas une chaleur d'été — une chaleur de mai, celle qui arrive trop tôt et qui écrase tout le campus d'un coup." },
    { type: "narration", texte: "Les allées sont vides. Les cours sont finis depuis une heure. Vous n'êtes pas rentrés." },

    { type: "perso", id: "lamia", pose: "pensive", position: "centre" },
    { type: "dialogue", perso: "lamia", texte: "Il fait trop chaud pour bouger." },
    { type: "narration", texte: "Elle dit ça, et elle ne bouge pas. Toi non plus. C'est réglé, alors. On ne bouge pas." },

    { type: "attendre", duree: 1200 },
    { type: "narration", texte: "Vous parlez de tout et de rien. Et parfois de rien du tout : il y a des silences, maintenant, et ils sont confortables." },
    { type: "pensee", texte: "C'est nouveau, ça. Les silences confortables. Avant, un silence, c'était une urgence à combler. Là, c'est juste de la place." },

    { type: "attendre", duree: 1000 },
    { type: "narration", texte: "À un moment — tu ne sauras jamais lequel exactement — sa tête s'est posée sur ton épaule." },
    { type: "retirerPerso", id: "lamia" },
    { type: "attendre", duree: 1400 },
    { type: "narration", texte: "Et une main a pris l'autre. Tu ne sais plus laquelle a commencé. Tu ne le sauras jamais, et c'est très bien comme ça." },

    { type: "attendre", duree: 1600 },
    { type: "pensee", texte: "C'est le moment." },
    { type: "pensee", texte: "Ça fait des semaines que c'est « le moment ». Mais là, c'est le moment." },

    { type: "si", condition: { flag: "a_dit_chance" },
      alors: [
        { type: "pensee", texte: "Un jour, sur la route du bus, tu as dit que quelqu'un d'autre avait de la chance. Tu aimerais bien que ce soit ton tour, maintenant." }
      ],
      sinon: [
        { type: "pensee", texte: "Tu as raté assez d'occasions comme ça pour savoir exactement ce que ça coûte de se taire." }
      ]
    },

    { type: "choix", question: "Vas-y.", options: [
      { texte: "« Faut qu'on officialise. »",
        effets: { complicite: 2 }, aller: "demande" },
      { texte: "« Je peux te demander un truc ? »",
        effets: { complicite: 2 }, aller: "demande_douce" },
      { texte: "Tu respires un grand coup, et tu te lances.",
        effets: { complicite: 2 }, aller: "demande_brute" }
    ]},

    { type: "label", nom: "demande_douce" },
    { type: "narration", texte: "« Je peux te demander un truc ? » Elle fait « mmh » sans lever la tête de ton épaule. C'est un oui." },
    { type: "aller", label: "demande" },

    { type: "label", nom: "demande_brute" },
    { type: "narration", texte: "Tu respires un grand coup. L'air est chaud, ça n'aide pas. Tu y vas quand même." },
    { type: "aller", label: "demande" },

    { type: "label", nom: "demande" },
    { type: "narration", texte: "Les mots sortent à peu près dans l'ordre où tu les avais préparés : il est temps d'officialiser. Est-ce que tu veux bien être ma copine ?" },

    { type: "attendre", duree: 1400 },
    { type: "narration", texte: "Une seconde." },
    { type: "attendre", duree: 900 },
    { type: "narration", texte: "Deux." },
    { type: "attendre", duree: 900 },
    { type: "narration", texte: "Trois." },
    { type: "attendre", duree: 700 },

    { type: "dialogue", perso: "lamia", pose: "pensive", position: "centre", texte: "Pourquoi faire ?" },

    { type: "attendre", duree: 900 },
    { type: "pensee", texte: "…" },
    { type: "pensee", texte: "Pourquoi faire. Elle demande pourquoi faire." },
    { type: "narration", texte: "Elle est un peu dans les vapes — la chaleur. Toi aussi, sans doute. C'est peut-être exactement ce qu'il fallait pour que la suite soit possible." },

    { type: "narration", texte: "Parce que tu réponds sans réfléchir. Et c'est probablement la seule fois de ta vie où ne pas réfléchir t'a réussi." },
    { type: "attendre", duree: 800 },
    { type: "narration", texte: "« Pour bâtir une famille. Être ensemble pour la vie. S'aimer toute la vie. »" },

    { type: "attendre", duree: 1800 },
    { type: "retirerPerso", id: "lamia" },
    { type: "voile", style: "doux", duree: 1400 },

    { type: "narration", texte: "La suite, tu ne l'as plus." },
    { type: "narration", texte: "Tu as cherché, pourtant. Des dizaines de fois. Ce qu'elle a répondu exactement. Ce que tu as dit après. Qui a souri en premier." },
    { type: "narration", texte: "C'est flou. C'est resté flou. La journée était trop chaude, ton cœur battait trop fort, et la mémoire a fait un tri." },
    { type: "pensee", texte: "Elle a gardé l'essentiel. Elle a jeté le reste." },

    { type: "voile", retirer: true, duree: 1000 },
    { type: "attendre", duree: 600 },

    { type: "cg", image: "cg-placette-7-mai", legende: "7 mai 2022", carte: "carte-09-7-mai" },
    { type: "souvenir", id: "sv-7-mai" },

    { type: "musique", arret: true },
    { type: "carton", texte: "Depuis ce jour-là, vous êtes ensemble.", sousTitre: "Le 7 mai 2022", duree: 3400 },

    { type: "finChapitre", suivant: "ch04" }
  ]
};
