/* ============================================================
   JOURNAL DES SOUVENIRS — la chronologie, débloquée en jouant
   ============================================================ */

export const SOUVENIRS = {
  "sv-premiere-fois": {
    date: "Première année",
    titre: "Trois secondes dans la cour",
    texte: "Elle était avec le groupe de Kenza, au milieu de la cour. " +
           "Il ne lui a pas parlé. Il ne savait même pas son prénom."
  },
  "sv-alger": {
    date: "Le jour du TCF",
    titre: "Alger, et elle disparaît",
    texte: "Le temps d'entrer dans le bâtiment et de ressortir, elle n'était plus là. " +
           "Ni pendant l'examen, ni après. Il a essayé de la retrouver. Ça n'a rien donné."
  },
  "sv-l2": {
    date: "Deuxième année",
    titre: "Même section, rien de plus",
    texte: "Ils se sont croisés toute une année sans se parler. " +
           "À la troisième fois, le cerveau décide que quelqu'un existe."
  },
  "sv-presentation": {
    date: "Troisième année",
    titre: "La présentation qu'il a ratée",
    texte: "Module IHM, exposé sur l'UI et l'UX. Elle était au fond, elle le regardait. " +
           "Il a perdu le fil au milieu d'une phrase."
  },
  "sv-collier": {
    date: "Troisième année",
    titre: "Les Ailes de la Liberté",
    texte: "Un petit pendentif argenté autour de son cou. " +
           "À partir de là, il avait une raison de lui parler."
  },
  "sv-zilasene": {
    date: "Cours de Génie Logiciel",
    titre: "Le plan qui ne marche pas",
    texte: "Au lieu de lui demander à elle, il a lancé le sujet à Zilasène. " +
           "Zilasène ne connaissait pas du tout. Le plan est mort sur place."
  },
  "sv-premiere-phrase": {
    date: "Troisième année",
    titre: "« Tu connais Attack on Titan ? »",
    texte: "Sur le chemin du TD, entre deux blocs. Il connaissait déjà la réponse. " +
           "C'est la première vraie phrase qu'il lui a dite. Le soir même, il commençait " +
           "Berserk."
  },
  "sv-insta": {
    date: "Devant la cafétéria",
    titre: "« T'as un Insta ? »",
    texte: "C'est elle qui a demandé. Et devant son profil, lui : « Bien sûr, j'ai " +
           "quelques notions de japonais. » Il n'en a jamais eu."
  },
  "sv-chance": {
    date: "Sur la route du bus",
    titre: "« Il a de la chance »",
    texte: "Elle était en couple. Il a dit que l'autre avait de la chance — " +
           "d'avoir une fille aussi belle et aussi intelligente. " +
           "Elle lui a avoué des mois après que ça l'avait touchée en plein cœur."
  },
  "sv-biscuit": {
    date: "Devant la cafétéria",
    titre: "Le biscuit",
    texte: "Une amie approchait. Lamia a pris le biscuit dans sa main et a croqué dedans. " +
           "Sans un mot."
  },
  "sv-placette": {
    date: "Troisième année",
    titre: "La placette",
    texte: "Un mur, un peu d'herbe, de l'ombre, et une armoire Djezzy rouge toujours fermée. " +
           "Ils ne l'ont jamais appelée autrement que « notre place »."
  },
  "sv-7-mai": {
    date: "7 mai 2022",
    titre: "Le serment",
    texte: "« Pourquoi faire ? » — « Pour bâtir une famille. Être ensemble pour la vie. » " +
           "Le reste est flou. Ça n'a plus d'importance."
  },
  "sv-ete": {
    date: "Été 2022",
    titre: "L'été des hamburgers",
    texte: "Quatre fois ? Cinq ? Des fast-foods, des heures à parler de rien. " +
           "Les vacances les plus simples et les meilleures."
  },
  "sv-chaine": {
    date: "Été 2022",
    titre: "La croix du Sud",
    texte: "Pour son anniversaire, elle lui a offert une chaîne avec une croix touarègue. " +
           "Il ne l'a plus jamais enlevée."
  },
  "sv-visa": {
    date: "La rentrée d'après",
    titre: "Le visa qui ne vient pas",
    texte: "Le dossier, le stress, le refus. La formation en ligne abandonnée. " +
           "L'année sabbatique. L'année où tout est devenu gris."
  },
  "sv-restaurant": {
    date: "Septembre",
    titre: "Le restaurant",
    texte: "Elle était venue pour le quitter. Elle l'a dit. Et au fil de la soirée, " +
           "elle a compris qu'elle ne voulait pas. Lui : du temps, et je reste, quoi qu'il arrive."
  },
  "sv-remontee": {
    date: "Les mois suivants",
    titre: "La remontée",
    texte: "Pas d'un coup. En semaines, en petits mieux. Puis la reprise : Master 1. " +
           "Et un couple plus solide qu'avant, précisément parce que ça n'a pas été facile."
  },
  "sv-soutenance-lui": {
    date: "Fin de Master 2",
    titre: "Sa soutenance à lui",
    texte: "Le jury, les slides, le trac. Et elle dans la salle — plus au fond cette fois. " +
           "À ses côtés."
  },
  "sv-soutenance-elle": {
    date: "Un an après la sienne",
    titre: "Sa soutenance à elle",
    texte: "Salle fermée : elle et les trois jurés. Lui dans le couloir, avec ses amis. " +
           "À la sortie : toutes les photos qu'il est humainement possible de prendre."
  },
  "sv-perpignan": {
    date: "Après un an de CDI",
    titre: "Perpignan",
    texte: "L'acceptation, le billet, la mer entre les deux. " +
           "Ils avaient déjà survécu à plus dur qu'une mer."
  },
  "sv-aujourdhui": {
    date: "Aujourd'hui",
    titre: "Quatre ans. Et quelques.",
    texte: "Les appels vidéo le soir, les mêmes bêtises qu'à la cafétéria, un écran au milieu. " +
           "Jusqu'ici, tout se déroule exactement comme prévu."
  }
};

export const ORDRE_SOUVENIRS = [
  "sv-premiere-fois", "sv-alger", "sv-l2",
  "sv-presentation", "sv-collier", "sv-zilasene", "sv-premiere-phrase",
  "sv-insta", "sv-chance", "sv-biscuit", "sv-placette", "sv-7-mai",
  "sv-ete", "sv-chaine", "sv-visa", "sv-restaurant", "sv-remontee",
  "sv-soutenance-lui", "sv-soutenance-elle", "sv-perpignan", "sv-aujourdhui"
];
