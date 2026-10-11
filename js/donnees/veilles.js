/* ============================================================
   VEILLES — les affrontements au tour par tour de l'arc Cendres.

   Deux inversions font que ça tient dans l'histoire :

   1. Elle n'a pas de points de vie, elle a de la MÉMOIRE. L'adversaire
      ne la blesse pas, il l'efface.
   2. L'adversaire n'a pas de points de vie non plus, il a une EMPRISE
      qu'on desserre.

   Et perdre n'est jamais mourir : à zéro, elle oublie quelque chose et
   la scène continue, en moins bien. Pas de game over, jamais.

   Ses actions sont les quatre mots du Lexique. En ✦1 elle n'en a aucun
   et se bat avec des intentions muettes ; en ✦3 elle a les quatre. Le
   système de combat raconte la même chose que le chapitre.
   ============================================================ */

/** Le catalogue des actions. `mot` = null pour ce qui ne demande pas
 *  de parole ; `flag` = le fragment qui débloque l'action. */
export const ACTIONS = {
  /* ---- sans mots : ce qui reste à une voix qui a tout perdu ---- */
  pousser:  { nom: "Pousser",    mot: null, desserre: 1,
              dit: "Tu pousses. Sans mot, sans forme — juste une direction." },
  retenir:  { nom: "Retenir",    mot: null, garde: 2,
              dit: "Tu te refermes autour d'elle. C'est tout ce que tu sais faire." },
  taire:    { nom: "Se taire",   mot: null, repose: 2,
              dit: "Tu te tais. Le silence aussi la repose, quand il est choisi." },
  regarder: { nom: "Regarder",   mot: null, revele: true,
              dit: "Tu regardes. Vraiment. C'est déjà un acte." },

  /* ---- les quatre mots ---- */
  chaleur:  { nom: "Réchauffer", mot: "LA CHALEUR", flag: "mot_chaleur", desserre: 3,
              dit: "« La chaleur. » Une journée de mai lui remonte dans les mains." },
  mur:      { nom: "Tenir",      mot: "LE MUR",     flag: "mot_mur",     garde: 99,
              dit: "« Le mur. » Elle s'adosse à quelque chose qui a existé." },
  ombre:    { nom: "Couvrir",    mot: "L'OMBRE",    flag: "mot_ombre",   desserre: 2, garde: 2,
              dit: "« L'ombre. » Elle s'étend, et ce qui est dessous cesse de brûler." },
  boite:    { nom: "Sceller",    mot: "LA BOÎTE",   flag: "mot_boite",   desserre: 4, sceau: true,
              dit: "« La boîte. » Ce qu'elle y met, personne ne peut plus le ranger ailleurs." }
};

export const VEILLES = {

  /* ---------- ✦1 — elle n'a aucun mot. Toi non plus. ---------- */
  "chuchotis": {
    nom: "Le Chuchotis",
    emprise: 6,
    memoire: 8,
    actions: ["pousser", "retenir", "taire", "regarder"],
    faible: "pousser",
    intro: "Quelque chose s'est mis à parler sous les remparts. Pas à elle — " +
           "d'elle. Ça récite ce qu'elle a déjà perdu, à voix très basse, " +
           "pour vérifier que c'est bien parti.",
    aide: "Tu n'as pas de mots. Tu as des intentions. Ça suffira peut-être.",
    manoeuvres: [
      { dit: "« …le nom de sa mère, la couleur du portail, le bruit de la porte… »", efface: 2 },
      { dit: "Ça s'arrête. Ça attend de voir si elle écoute.", efface: 0, ouvert: true },
      { dit: "« …et un chiffre. Un chiffre qu'elle croit garder. »", efface: 3 }
    ],
    victoire: "Le murmure se casse au milieu d'un mot. Il ne finit pas sa phrase. " +
              "Dans la cendre, à ses pieds, il ne reste qu'un creux de la taille d'une bouche.",
    echec: "Elle n'entend plus le murmure. C'est pire : il n'a plus besoin de parler, " +
           "il a eu ce qu'il voulait. Elle regarde ses mains et ne sait plus pourquoi " +
           "elle les avait levées."
  },

  /* ---------- ✦2 — un combat qui refuse d'en être un ---------- */
  "procession": {
    nom: "La Procession",
    emprise: 10,
    memoire: 10,
    /* On ne frappe pas des gens : ici, c'est le regard qui desserre. */
    bonus: { regarder: 2 },
    actions: ["regarder", "pousser", "retenir", "chaleur", "mur", "ombre", "boite"],
    /* On ne frappe pas des gens. Tout ce qui cogne ne fait rien. */
    immunise: ["pousser", "chaleur", "boite"],
    faible: "regarder",
    intro: "Ils descendent de la haute ville en file, sans se bousculer. " +
           "Des Sans-Nom. Ceux que la cendre a fini. Ils marchent vers la mer " +
           "parce qu'il faut bien aller quelque part quand on ne sait plus d'où l'on vient.",
    aide: "Frapper ne donnera rien. Ce ne sont pas des monstres — c'est ce qui reste des gens.",
    manoeuvres: [
      { dit: "Le premier lève les yeux vers elle. Il a le visage de quelqu'un " +
             "qui cherche un mot poli et ne le trouve pas.", efface: 1 },
      { dit: "Ils passent. L'un d'eux la frôle, et pendant une seconde elle ne " +
             "sait plus si elle marchait avec eux.", efface: 3 },
      { dit: "La file ralentit. Ils se tournent vers elle tous ensemble, " +
             "poliment, comme on se tourne vers quelqu'un qui allait parler.", efface: 0, ouvert: true }
    ],
    victoire: "Elle ne les sauve pas. Personne ne les sauvera. Mais elle les a " +
              "regardés un par un, et quelque chose dans la file a tenu une " +
              "seconde de plus que prévu. La ville comptera un départ de moins ce soir.",
    echec: "Elle marche un moment avec eux avant de se rappeler qu'elle a quelque " +
           "part où aller. Quand elle se détache de la file, elle a oublié " +
           "pourquoi elle était venue jusqu'ici."
  },

  /* ---------- ✦3 — il ne frappe pas. Il range. ---------- */
  "greffier": {
    nom: "Le Greffier",
    emprise: 28,
    memoire: 14,
    actions: ["regarder", "retenir", "chaleur", "mur", "ombre", "boite"],
    /* Seul le sceau l'atteint : un souvenir qui a un propriétaire ne
       peut plus être classé ailleurs. */
    immunise: ["chaleur", "ombre"],
    faible: "boite",
    intro: "Il ne se met pas en garde. Il ouvre un registre, trouve la bonne page, " +
           "et attend qu'elle ait fini de respirer pour commencer.",
    aide: "Il ne frappe pas : il classe. Et chaque tour, il te retire quelque chose.",
    manoeuvres: [
      { dit: "« Vous vous agitez beaucoup pour quelqu'un qui n'a plus de dossier. »",
        efface: 2, range: true },
      { dit: "Il tire un tiroir, y dépose quelque chose qui lui appartenait, " +
             "et le referme sans bruit.", efface: 3, range: true },
      { dit: "« Ce n'est pas de la cruauté, Veilleuse. C'est de l'ordre. »",
        efface: 1, ouvert: true }
    ],
    victoire: "Il regarde le tiroir qu'il vient d'ouvrir. Il est occupé. " +
              "Pour la première fois depuis très longtemps, le Greffier a devant " +
              "lui une chose qui appartient déjà à quelqu'un, et il n'a pas de " +
              "case pour ça.",
    echec: "Il referme le registre, satisfait. Elle reste debout au milieu de " +
           "l'allée, et elle ne saurait plus dire ce qu'elle était venue " +
           "réclamer. Ça reviendra. Peut-être."
  }
};
