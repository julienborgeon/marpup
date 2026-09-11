# Installer le projet

## Cloner le repo officiel

- Se rendre dans le répertoire où tu veux cloner le repo.
- Ouvrir VSC
- Ouvrir le terminal dans VSC
- Cloner le repo officiel avec `[git clone <url_du_repo>](https://github.com/julienborgeon/portfolio-julien-borgeon.git)`
- Fermer VSC

## Initialiser le projet

- Se rendre dans le répertoire du projet cloné
- Ouvrir le projet dans VSC
- Ouvrir le terminal dans VSC
- Initialiser le projet avec `npm ci` (cela installera toutes les dépendances nécessaires, y compris celles listées dans le fichier `package-lock.json`)
-

## Vérifier l'installation

- Vérifier que les dépendances sont correctement installées avec `npm -v` et `node -v` (cela affichera les versions installées, utiles pour debug).
- Lancer `npx marp --version` pour vérifier que Marp est correctement installé (cela affichera la version de Marp installée)

---

# Structure du projet

```
marpup/
├─ .vscode/
│  └─ marpup.code-snippets  # tous les snippets du projet
│  └─ settings.json         # configuration spécifique à VSC pour ce projet
├─ dist/                    # fichiers générés (PDF, PPTX, HTML)
├─ examples/                # exemples de slides ou de configurations
├─ node_modules/            # répertoire des modules npm installés
├─ package.json             # fichier de configuration npm
├─ slides/                  # slides du projet
│  └─ assets/               # ressources/media des slides
│     └─ fonts/             # police d'écriture du projet
│     └─ images/            # images utilisées dans les slides
│  └─ demo.md               # exemple de slide complète
├─ themes/                  # thèmes CSS pour Marp
│  └─ marpup.css            # thème marpup
├─ .gitignore               # fichiers et répertoires à ignorer par Git
├─ LICENSE                  # licence du projet
├─ marp.config.mjs          # configuration de Marp pour le projet
├─ package.json             # fichier de configuration npm
├─ package-lock.json        # fichier de verrouillage des dépendances npm
└─ README.md                # documentation du projet
```

## Recommandations

- Ne pas modifier les fichiers `settings.json` ou `marp.config.mjs` directement, sauf si tu sais ce que tu fais.
- Toujours vérifier les changements dans le fichier `dist/` après avoir modifié les slides ou les thèmes.
- Le fichier de snippet est tout à fait extensible et personnalisable, tu peux y ajouter tes propres snippets selon tes besoins.
- Les thèmes CSS dans le dossier `themes/` peuvent également être modifiés ou étendus pour personnaliser l'apparence des slides.
- Les fichiers dans le dossier `assets/` peuvent être ajoutés ou modifiés pour inclure de nouvelles ressources comme des polices, images ou vidéos.

---

# Personnalisation

## Syntaxe des snippets

Pour utiliser un snippet dans une slide, il suffit de taper le préfixe du snippet défini dans le fichier `marpup.code-snippets` et de sélectionner le snippet souhaité dans la liste qui apparaît.

1. Pour les snippets "marpup core", utilisés pour accélérer l'écriture de markdown complexe, le préfixe est `up-`. Exemple :

```markdown
up-image
```

Insère automatiquement :

```markdown
![Description](./assets/images/zelda-bed-chill.jpg)
```

2. Pour les snippets "marp core", utilisés pour ajouter des classes aux sections/slides, le préfixe est `@`. Exemple :

```markdown
@image-gauche
```

Insère automatiquement :

```html
<!-- _class: image-left -->
```

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
npm run build:html
npm run build:html
npm run build:pdf
npm run build:pptx
```

Les plus utiles pour un usage quotidien sont :

- `npm run build:pdf` : génère les fichiers PDF à partir des fichiers Marp.
- `npm run build:pptx` : génère les fichiers PPTX à partir des fichiers Marp.

Les fichiers sont générés dans le sous-dossier `dist/` du projet (accessible dans ton pc).

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
