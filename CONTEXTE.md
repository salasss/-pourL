# CONTEXTE — reprendre le projet sur une autre machine

Tout ce qu'il faut savoir pour continuer, sans rien avoir en tête.
Lis ce fichier en entier avant de toucher au code.

---

## 1. Ce que c'est

**pourL** — un visual novel web, en français, offert par **Salas** à **Lamia**.
Jouable ici : **https://salasss.github.io/-pourL/**

Deux parties :

- **L'histoire réelle** (chapitres 0 à 5 + « Le rêve ») — leur vraie histoire,
  de l'université de Béjaïa en 2019 à aujourd'hui. Du vécu.
- **L'arc bonus « Le Serment de Cendres »** (✦1, ✦2, ✦3) — dark fantasy, où
  c'est **elle** l'héroïne et **lui** une voix sans corps. Scellé derrière un code.

Durée totale : ~1 h 15.

---

## 2. Démarrer en trois commandes

```bash
git clone https://github.com/salasss/-pourL.git
cd -pourL
python -m http.server 8123
```

Puis **http://127.0.0.1:8123**.
Le double-clic sur `index.html` ne marche pas : les modules ES exigent un serveur.

**En local, tous les chapitres réels sont déjà marqués « lus »** — on atterrit
directement à la fin pour pouvoir tester le bonus. `?vierge` dans l'URL pour
jouer une partie neuve comme elle la vivra.

**Déblocage du bonus** : sur l'écran Chapitres, une carte face cachée (✦, sans
nom). Cliquer dessus, taper **01/10** — la date d'anniversaire de Lamia.
Il n'y a **aucune** ouverture automatique : la surprise appartient à Salas.

---

## 3. Architecture

Stack : **HTML + CSS + JavaScript vanille, modules ES. Aucune dépendance,
aucun build.** Un `git push` redéploie GitHub Pages en une minute.

```
index.html          la coquille : scène, HUD, boîte de dialogue, écrans
css/
  reset · jetons (design system + 2 peaux) · animations · moteur · ecrans
js/
  main.js           assemblage, boucle de jeu, mode dev local
  moteur/
    etat.js         état global + sauvegarde localStorage + VERSION_JEU
    directeur.js    exécute les nœuds d'un chapitre — LA table des types y est
    scene.js        décors, sprites, voiles, cartons, le compte interactif
    veille.js       la boucle de tour des combats (arc Cendres)
    dialogue.js*    (dans ui/) machine à écrire + choix
    audio.js        musique et bruitages, silencieux si un fichier manque
    placeholder.js  toute image absente devient un SVG propre
  ui/
    hud.js          barre du haut : cœur OU lexique+rumeur selon la peau
    ecrans.js       titre, mur de chapitres, galerie, journal, réglages, sceau
  donnees/
    personnages · decors · cartes · souvenirs · musiques · veilles
    chapitres/      index.js + un fichier par chapitre
assets/             decors · sprites · cg · cartes · ui · audio
```

### Un chapitre est une donnée, pas du code

Une liste de nœuds typés. Écrire un chapitre ne demande **aucune ligne de
logique**. Les types existants sont dans le `switch` de
`js/moteur/directeur.js` — c'est la référence, elle fait autorité :

`decor · perso · retirerPerso · viderPersos · narration · pensee · dialogue ·
choix · label · aller · si · cg · carte · souvenir · carton · musique · sfx ·
attendre · secousse · voile · peau · complicite · lexique · rumeur · compter ·
flag · finChapitre`

Conditions déclaratives (jamais d'`eval`) : `flag`, `flagFaux`, `compliciteMin/Max`,
`rumeurMin/Max`, `lexiqueMin`, `carte`, `chapitreFini`, `et`, `ou`.

---

## 4. Où en est le projet

### Fait

- **Les 9 chapitres sont écrits et testés** de bout en bout (Playwright + Chrome).
- **Images** : 13 décors, sprites de Lamia en 2 tenues (étudiante + été) et en
  version Cendres, 7 grandes illustrations, 17 cartes, écran-titre.
- **Son** : 5 musiques (Suno) + 3 bruitages découpés et calibrés.
- **Trois mécaniques propres à l'arc Cendres** (voir §5).
- **En ligne**, dépôt public assaini (voir §7).

### Reste à faire

**3 fichiers sur 85.** Décors 20/20, cartes 17/17, musique 6/6, et les dix
sprites de Lamia sont tous à la même échelle.

| Quoi | Lot | Effet aujourd'hui |
|---|---|---|
| Les 3 adversaires des Veilles (Chuchotis, Procession, Greffier) | 42-44 | placeholder — les combats se jouent, sans visage |

Plus **la dédicace de l'écran-titre** (`js/ui/ecrans.js`, fonction `ecranTitre`) :
celle qui s'y trouve a été écrite par une IA, c'est la seule phrase du jeu qui
devrait venir de Salas lui-même.

Piège de comptage : une pose qui **a un repli** est déclarée « présente » par un
contrôle naïf. Le fichier n'existe pas pour autant, et c'est une autre émotion qui
s'affiche. Compter les chemins, pas les replis.

**Kenza et Zilasène n'ont pas de sprite**, et c'est voulu : ce sont des voix,
comme Salas. Le motif est dans `personnages.js` — `poses: {}`.

Rien de tout ça n'est bloquant : les images manquantes deviennent des
placeholders propres, le son manquant reste silencieux.

---

## 5. Les mécaniques de jeu

**Chapitres réels — la Complicité.** Un cœur qui se remplit, 4 paliers
(*Camarades de classe → On se cherche → C'est plus que ça → Évidence*).
Aucun game over : le mauvais choix est juste un peu triste.

**Arc Cendres — le HUD change entièrement de nature :**

1. **Le Lexique** (`etat.lexique`, 0 → 4). La voix a perdu ses mots. Dans ✦1
   elle n'en a **aucun** : ses choix sont des intentions (*« Vers le sommeil »*),
   pas des répliques. Chaque fragment trouvé en rend un — nœud `lexique`, toast
   plein écran « Un mot te revient ●○○○ ». Dans ✦2 elle parle par mots isolés,
   dans ✦3 par une phrase entière. **La mécanique raconte l'histoire.**
2. **La Rumeur** (`etat.rumeur`). Remplace le cœur : ce que la ville raconte
   d'elle (*Une ombre qui passe → On chuchote → La Dévoreuse → Le monstre de
   Bgayet*). Ni bien ni mal — une rumeur forte débloque un passage à la fin de
   ✦3 (la ville qui la craignait est celle qui se souvient d'elle en premier).
3. **Le carrefour** (✦2). Elle choisit l'ordre des trois premiers lieux.
   Première structure non linéaire du jeu.
4. **Le compte à sept** (✦3). Nœud `compter` : le joueur clique sept fois,
   un chiffre par clic, avant que le cadenas tombe.
5. **Les Veilles** — trois affrontements au tour par tour, un par chapitre
   (`js/donnees/veilles.js`, moteur dans `js/moteur/veille.js`).

   Deux inversions les font tenir dans l'histoire : **elle n'a pas de points de
   vie, elle a de la Mémoire** — l'adversaire ne la blesse pas, il l'efface ;
   et **l'adversaire n'a pas de points de vie non plus**, il a une Emprise qu'on
   desserre. Perdre n'est donc jamais mourir : à zéro, elle oublie quelque
   chose, la Rumeur monte, et le chapitre continue en moins bien.

   **Ses sorts sont les quatre mots du Lexique.** En ✦1 elle n'en a aucun et se
   bat avec des intentions muettes (Pousser, Retenir, Se taire) ; en ✦3 elle a
   les quatre. Le système de combat raconte la même chose que le chapitre.

   | Veille | Chapitre | Ce qu'elle enseigne |
   |---|---|---|
   | Le Chuchotis | ✦1 | se taire ne suffit plus : il faut agir |
   | La Procession | ✦2 | **frapper ne donne rien** — ce sont des gens, on ne peut que les voir |
   | Le Greffier | ✦3 | il classe une de tes actions par tour ; seul le sceau l'atteint |

   Chaque fragment pose un drapeau (`mot_chaleur`, `mot_mur`, `mot_ombre`,
   `mot_boite`) qui débloque l'action correspondante. Après coup, `veille_<id>`
   vaut vrai en cas de victoire et `veille_<id>_perdue` en cas d'échec — deux
   booléens distincts, parce qu'une chaîne `"echec"` serait vraie elle aussi.

---

## 6. Pièges — ne pas les réintroduire

1. **La zone d'avance écoute sur `#scene`**, pas sur `#avancer`. La boîte de
   dialogue (z 25) et les illustrations plein écran (z 30) passent au-dessus :
   un clic dessus doit quand même avancer. Sinon le jeu se fige au premier
   plein écran — et au clavier ça marche, donc on ne le voit pas en testant vite.
2. **Le placement horizontal des sprites passe par `translate`, pas
   `transform`** : l'animation « respire » pilote `transform` et écrasait le
   centrage.
3. **Le détourage chroma key ne désature le vert que sur les bords** (bande de
   3 px). Désaturer partout mange ses yeux verts.
4. **Le trou de mémoire du 7 mai est canon.** Le chapitre 3 le joue (voile +
   fragments). Ne jamais « compléter » la scène avec une réponse inventée.
5. **Le HUD doit rester lisible sur un décor clair.** Les pastilles du lexique
   sont dans un cartouche sombre : sans lui, quatre cercles dorés vides sur un
   placeholder beige sont invisibles. C'est arrivé.
6. **Éviter les imports circulaires.** `VERSION_JEU` vit dans `etat.js`
   justement pour ça.
7. **Un sprite manquant retombe sur le plus proche** (chaîne de chemins dans
   `personnages.js`). Sans ça, une scène triste affiche un visage neutre en
   silence.
8. **Une pose peut être une chaîne OU un tableau de replis.** Tout code qui
   parcourt `poses` doit aplatir (`.flat()`). Le préchargeur poussait le tableau
   tel quel : `img.src` le transformait en `"a.webp,b.webp"`, une URL bidon en
   404, et **aucune pose à repli n'était préchargée** — donc du pop-in de sprite
   sur tous les chapitres en tenue d'été. Corrigé dans `directeur.js`.
9. **Aucune entrée déclarée « pour plus tard ».** Un décor que nul chapitre
   n'appelle fait mentir l'inventaire des images restantes : dix entrées mortes
   gonflaient le décompte de 13 à 30.
10. **Un sprite doit sortir du détourage pleinement opaque.** Les quatre premiers
    sprites Cendres avaient tout le corps à ~80 % d'alpha. Invisible tant que le
    décor était un placeholder uni ; dès qu'une vraie bibliothèque est passée
    derrière, on voyait les tiroirs à travers elle. Vérifier l'alpha moyen du
    sujet : il doit être proche de 255, pas de 205.
11. **Un combat se vérifie en le simulant, pas en le relisant.** Deux Veilles
    étaient injouables à l'écriture : le Greffier classait `Sceller` au premier
    tour — la seule action qui l'atteint — et la Procession n'était gagnable
    que si le joueur avait pris le mot L'OMBRE, ce que la route ne garantit pas.
    Un simulateur sans DOM qui rejoue les règles du moteur les a trouvées en une
    passe. Refaire tourner ce test après **toute** retouche d'équilibrage.
12. **Toutes les planches de sprites doivent avoir le même cadrage.** Le moteur
    les affiche à hauteur fixe et les ancre en bas : une planche générée plus
    serrée donne une tête plus grosse à l'écran. Mesure de contrôle — largeur de
    la tête divisée par la hauteur de l'image, qui doit valoir **0,27**. Corriger
    en réduisant le contenu et en le recollant en bas d'un canevas de 1050.

---

## 7. Le dépôt est public — ce qui n'y est pas

GitHub Pages gratuit exige un dépôt public. Donc **les documents de travail
sont volontairement exclus** (`.gitignore`) et **retirés de l'historique** :

`BIBLE-HISTOIRE.md` · `MEGA-PROMPT.md` · `PROMPTS-VISUELS.md` ·
`PROMPTS-AUDIO.md` · `A-COPIER-COLLER.md` · `LISEZMOI.md` · `CLAUDE.md` ·
`assets/_references/`

Ils contiennent le canon détaillé de leur histoire, les descriptions physiques
des deux, et les planches issues de leurs vraies photos.

**Pour les emporter sur une autre machine** : ils sont dans le dossier local, il
suffit de copier le dossier entier (clé USB, Drive privé, `.zip`). Ne pas les
committer.

Le README public est volontairement muet (« Un petit jeu à lire »), la preview
de lien aussi. L'histoire reste lisible dans `js/donnees/chapitres/` — c'est le
jeu lui-même, on ne peut rien y faire.

---

## 8. Vérifier qu'on ne travaille pas sur une version en cache

Le numéro de build est affiché **en bas de l'écran Réglages** et dans la console
du navigateur (`pourL — build …`). Il vit dans `js/moteur/etat.js`
(`VERSION_JEU`), aujourd'hui `2026.10.11c`. Si l'écran ne montre pas ce qu'on vient de coder :
**Ctrl + Shift + R**, puis comparer le numéro.

Les feuilles de style et `main.js` portent un `?v=` dans `index.html` — le bumper
à chaque changement visuel important évite le problème.

---

## 9. Conventions d'écriture

- **Français naturel et parlé.** Pas de calque de l'anglais, pas de fragments
  télégraphiques.
- **Aucune métaphore décorative.** L'histoire est vraie, elle n'a pas besoin
  d'être enjolivée — le concret bat le lyrique. Une enjolivure inventée (une
  finale de Coupe d'Afrique) a déjà été repérée et supprimée.
- **Ne jamais inventer un fait de leur histoire.** Dialogues, détails sensoriels
  et rythme : inventables, c'est le métier. Événements, dates, prénoms, lieux :
  uniquement ce qui est établi. Ce qui manque se demande.
- **Pudique.** Honnête sur l'attirance, jamais graveleux.
- **Le code est en français** (variables, fichiers, clés de données).

---

## 10. Tester

Il n'y a pas de suite de tests dans le dépôt : les vérifications se font avec
Playwright depuis un dossier de travail temporaire. Le principe qui a marché :

- **Vérificateur statique** — parcourt `js/` et vérifie que chaque `import`
  correspond à un `export` réel, et que chaque id de chapitre (décor, carte,
  souvenir, perso, pose, label) existe vraiment. Il a attrapé de vrais bugs.
- **Parcours automatisés** — jouer un chapitre entier en cliquant, en comptant
  les blocages et les erreurs JS. Prévoir large sur le nombre d'itérations : les
  nœuds `attendre` en consomment beaucoup (1 600 pour ✦3).
- **Toujours regarder les captures d'écran.** Trois vrais bugs ont été trouvés
  à l'œil, pas par une assertion : le sprite décentré, le HUD invisible, le
  liseré du décor.
