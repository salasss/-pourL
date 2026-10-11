# -*- coding: utf-8 -*-
"""Estampille TOUS les imports avec le numero de build.

Pourquoi : index.html ne versionne que js/main.js. Les modules qu'il importe
(`./moteur/directeur.js`, les chapitres...) n'ont aucun `?v=`, donc le
navigateur les ressert depuis son cache meme apres un bump. Resultat vecu :
un directeur.js en cache ignore en silence les noeuds `veille` — les combats
disparaissent — et des chapitres en cache n'ont pas les nouveaux drapeaux.

Usage :  python version.py            (prend VERSION_JEU tel quel)
         python version.py 2026.10.12a (le change d'abord)
"""
import io, os, re, sys

RACINE = os.path.dirname(os.path.abspath(__file__))
ETAT = os.path.join(RACINE, "js", "moteur", "etat.js")

def lire(p):  return io.open(p, encoding="utf-8").read()
def ecrire(p, s): io.open(p, "w", encoding="utf-8", newline="\n").write(s)

# 1. le numero
s = lire(ETAT)
if len(sys.argv) > 1:
    s = re.sub(r'(VERSION_JEU = ")[^"]+(")', r'\g<1>' + sys.argv[1] + r'\g<2>', s)
    ecrire(ETAT, s)
version = re.search(r'VERSION_JEU = "([^"]+)"', s).group(1)
tag = version.replace(".", "")

# 2. tous les imports relatifs des modules
n = 0
for dossier, _, fichiers in os.walk(os.path.join(RACINE, "js")):
    for f in fichiers:
        if not f.endswith(".js"):
            continue
        p = os.path.join(dossier, f)
        t = lire(p)
        neuf = re.sub(r'(from\s+"\.[^"?]+\.js)(\?v=[^"]*)?(")',
                      lambda m: m.group(1) + "?v=" + tag + m.group(3), t)
        if neuf != t:
            ecrire(p, neuf); n += 1

# 3. index.html : feuilles de style et point d'entree
p = os.path.join(RACINE, "index.html")
t = lire(p)
t = re.sub(r'((?:href|src)="(?:css|js)/[^"?]+)(\?v=[^"]*)?(")',
           lambda m: m.group(1) + "?v=" + tag + m.group(3), t)
ecrire(p, t)

total = len(re.findall(r'\?v=' + re.escape(tag),
        "".join(lire(os.path.join(d, f))
                for d, _, fs in os.walk(os.path.join(RACINE, "js")) for f in fs
                if f.endswith(".js")) + lire(p)))
print("build %s  —  %d fichier(s) js modifie(s), %d reference(s) estampillee(s)"
      % (version, n, total))
