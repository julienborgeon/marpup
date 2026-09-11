# Installer le projet

## Cloner le repo officiel

- Se rendre dans le répertoire où tu veux cloner le repo.
- Ouvrir VSC
- Ouvrir le terminal dans VSC
- Cloner le repo officiel avec `git clone https://github.com/julienborgeon/marpup.git`
- Fermer VSC

## Brancher le projet

- Ouvrir le projet cloné avec VSC (pas son dossier parent !)
- Ouvrir le terminal dans VSC
- Vérifier l'origine du repo distant avec `git remote -v`. Ceci devrait apparaître :

```bash
origin  https://github.com/julienborgeon/marpup.git (fetch)
origin  https://github.com/julienborgeon/marpup.git (push)
```

- Supprimer l'origine avec `git remote remove origin`
- Se rendre sur GitHub et créer un nouveau repository pour le projet. Par exemple :
  - Nom du repository : `marpup-philo`
  - Visibilité : `Public`
  - Laisser décochés "Initialize this repository with a README" et "Add .gitignore"
- Retourner dans le terminal de VSC et vérifier que l'origine a bien été supprimée avec `git remote -v`. Cela ne devrait rien afficher.
- Ajouter la nouvelle origine avec `git remote add origin <URL_DE_VOTRE_REPO>`
- Vérifier que la nouvelle origine a bien été ajoutée avec `git remote -v`. Cela devrait afficher l'URL de votre nouveau repository.
- Pousser le projet local vers le nouveau repo distant avec `git push -u origin main`
- Vérifier sur GitHub que le projet a bien été poussé et que tous les fichiers sont présents.

## Initialiser le projet

- Initialiser le projet avec `npm ci` (cela installera toutes les dépendances nécessaires, y compris celles listées dans le fichier `package-lock.json`)
- Lancer `npx marp --version` pour vérifier que Marp est correctement installé (cela affichera la version de Marp installée)
- Bonus : installer l'extension [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) pour une meilleure expérience Markdown dans VSC

---

# Structure du projet

```
marpup/
├─ .vscode/
│  └─ extensions.json               # configuration spécifique à VSC pour ce projet
│  └─ settings.json                 # configuration spécifique à VSC pour ce projet
│  └─ marpit-helpers.code-snippets  # raccourcis pour les classes Marpit
│  └─ marpup-helpers.code-snippets  # raccourcis markdown pour MarpUp
│  └─ marpup-notions.code-snippets  # raccourcis pour les notions philosophiques
│  └─ marpup-reperes.code-snippets  # raccourcis pour les repères philosophiques
├─ dist/                            # fichiers générés (PDF, PPTX, HTML)
├─ docs/                            # futures documentations du projet
├─ node_modules/                    # répertoire des modules npm installés
├─ scripts/                         # scripts utilitaires pour le projet
├─ slides/                          # slides du projet
│  └─ assets/                       # ressources/media des slides
│     └─ fonts/                     # police d'écriture du projet
│     └─ images/                    # images utilisées dans les slides
│     └─ philosophy/                # modules pour les notions et les repères
│        └─ notions-data.js         # banque de données des notions
│        └─ reperes-data.js         # banque de données des repères
│  └─ demo.md                       # exemple de slides formatées
├─ themes/                          # thèmes CSS pour Marp
│  └─ marpup.css                    # thème MarpUp
├─ .gitignore                       # fichiers et répertoires à ignorer par Git
├─ .prettierrc.json                 # configuration de Prettier pour le projet
├─ LICENSE                          # licence du projet
├─ marp.config.mjs                  # configuration de Marp pour le projet
├─ package.json                     # fichier de configuration npm
├─ package-lock.json                # fichier de verrouillage des dépendances npm
└─ README.md                        # documentation du projet
```

## Spécificité de MarpUp par rapport à Marp

- La police custom "Atkinson Hyperlegible Next" utilisée pour les titres et le corps du texte n'est pas prévisualisable pendant la prévisualisation native de Marp mais seulement après le rendu final.
- Les fonctionnalités associées à l'intégration des notions et repères dans les slides dépendent du navigateur pour l'affichage et l'interaction avec les définitions. Autrement dit, la fonction de prévisualisation native de Marp ne permet pas de tester correctement ces fonctionnalités.
- Pour prévisualiser en live les modifications apportées aux slides, il faut lancer la commande suivante :

```bash
npm run dev
```

- Ensuite, il suffit de copier-coller l'URL affichée dans le terminal dans le navigateur pour prévisualiser les slides en live. Cette URL est souvent `http://localhost:8080/`. Elle s'actualise dès qu'un changement est enregistré dans une slide (raccourci VSC : `Ctrl+S`).

## Recommandations

- Ne modifier aucun fichier à l'exception de ceux-ci :
  - Les slides dans le dossier `slides/`
    - Se référer à `slides/demo.md` pour un exemple de slides formatées
  - Les thèmes dans le dossier `themes/`
    - Les valeurs des variables CSS de la rubrique "TOKENS" peuvent être modifiées si nécessaire, mais éviter de toucher au reste
  - Les snippets dans le dossier `.vscode/`
    - Eviter de modifier les snippets de `marpit-helpers.code-snippets`, `marpup-notions.code-snippets` et `marpup-reperes.code-snippets`
    - Les snippets de `marpup-helpers.code-snippets` peuvent être modifiés si nécessaire
    - Pour ajouter des snippets personnels, créer un nouveau fichier `custom.code-snippets` dans le dossier `.vscode/`
  - Les ressources dans le dossier `slides/assets/`
    - Placer toutes les ressources (images, vidéos, etc.) utilisées dans les slides dans ce dossier
    - Utiliser des chemins relatifs pour référencer ces ressources dans les slides (Cf. `marpup-helpers.code-snippets` pour des exemples)

---

# Personnalisation

## Syntaxe des snippets

Pour utiliser un snippet dans une slide, il suffit de taper le préfixe du snippet défini dans les fichiers `.code-snippets` et de sélectionner le snippet souhaité dans la liste qui apparaît.

1. Pour les snippets "marpup helpers", utilisés pour accélérer l'écriture de markdown complexe, le préfixe est `/`. Exemple :

```markdown
/image
```

Insère automatiquement :

```markdown
![Description](./assets/images/zelda-bed-chill.jpg)
```

2. Pour les snippets "marpit helpers", utilisés pour ajouter des classes aux sections/slides, le préfixe est `!`. Exemple :

```markdown
!image-gauche
```

Insère automatiquement :

```html
<!-- _class: image-left -->
```

3. Pour les snippets utilisés pour ajouter des notions et repères, le préfixe est `@`. Exemple :

```markdown
@art
```

Insère automatiquement :

```html
<button type="button" class="marpup-notion" data-notion="art">art</button>
```

## Personnalisation des notions et repères

Les snippets des notions et repères servent à intégrer l'élément HTML dans le fichier markdown, nécessaire aux scripts pour fonctionner correctement.
Au clic sur un bouton de notion ou de repère, la définition correspondante s'affiche dans une petite fenêtre.

Pour modifier le texte de la notion ou du repère affiché dans la slide, il suffit de modifier le texte entre les balises `<button>` et `</button>`. Exemple :

```html
<button type="button" class="marpup-repere" data-repere="necessaire">
  nouveau texte
</button>
```

Dans cet exemple, la définition attachée au nouveau texte reste celle du repère "necessaire". Mais le texte affiché dans la slide peut être différent, pour permettre, par exemple, d'accorder un mot ou d'en changer la formulation :

```html
On parle de la
<button type="button" class="marpup-repere" data-repere="necessaire">
  nécessité
</button>
dans ce contexte.
```

Les notions et repères sont définis dans les fichiers `notions-data.js` et `reperes-data.js` respectivement, situés dans le dossier `slides/assets/philosophy/`. Pour personnaliser une définition, il suffit de modifier la valeur de la clé `definition:` en respectant la syntaxe du projet.
**Un seul paragraphe, sans saut de ligne, est accepté pour cette clé.**

## Personnalisation du thème

A moins de s'y connaître en CSS, il est recommandé de ne pas modifier directement les fichiers de thème. Tu peux toutefois importer un thème dans le dossier `themes/` puis le renseigner dans le front-matter de tes slides Marp. Exemple :

```yaml
---
theme: marpup
---
```

Si tu dois néanmoins modifier un fichier de thème, il est préférable de se cantonner à la rubrique "Tokens" du fichier css, en haut du document. Il suffit alors de changer les valeurs associées aux variables de couleurs, typographie, etc. Le reste du fichier s'occupe de la logique des éléments de thème et ne devrait pas être modifié sauf par un développeur.

---

# Workflows quotidien

## Commandes npm disponibles

```bash
npm run dev
npm run build
npm run build:pdf
npm run build:pptx
npm run build:html
```

Les plus utiles pour un usage quotidien sont :

- `npm run build:pdf` : génère les fichiers PDF à partir des fichiers Marp.
- `npm run build:pptx` : génère les fichiers PPTX à partir des fichiers Marp.

Les fichiers sont générés dans le sous-dossier `dist/` du projet (accessible dans ton pc).

Mais pour conserver la fonctionnalité associée aux repères et aux notions dans les slides, il faut préférer générer les fichiers HTML à partir des fichiers Marp, plutôt que directement les fichiers PDF ou PPTX, en utilisant `npm run build:html`.
Pour présenter un diapo, il faudra donc double-cliquer sur le fichier HTML généré. Il s'affichera alors dans le navigateur et permettra de cliquer sur les repères et notions pour afficher leurs définitions.

## Workflow Git

```git
git status
git add .
git commit -m "description"
git push
```

Si tu veux récupérer les dernières modifications du dépôt officiel pour t'assurer que ton projet local est synchronisé avec le repo Github, utilise la commande `git pull` avant de commencer à travailler sur le projet et de lancer les commandes précédentes. C'est un réflexe utile, voire nécessaire, si tu travailles sur le projet depuis plusieurs machines.

---

# Ressources utiles

- [Syntaxe Markdown](https://www.markdownguide.org/basic-syntax/)
- [Site officiel de Marp](https://marp.app)
- [Documentation officielle de Marpit](https://marpit.marp.app/markdown)
- [Thèmes de Marp](https://yoanbernabeu.github.io/MARP-Template-Library/docs/category/themes/)
- [Dépôt GitHub de Marpup](https://github.com/julienborgeon/marpup)
