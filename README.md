# MarpUp

MarpUp est un environnement de création de présentations pédagogiques en Markdown fondé sur [Marp](https://marp.app/). Le projet fournit un thème, des snippets VS Code, des mises en page prêtes à l'emploi et des modules interactifs pour les repères et notions philosophiques.

## Documentation

- [Guide d'utilisation](docs/GUIDE_UTILISATION_MARPUP.md) : créer, prévisualiser, générer et transporter une présentation.
- [Guide des classes](docs/GUIDE_CLASSES_MARPUP.md) : retrouver toutes les classes Marpit et leurs snippets.
- [Guide de personnalisation](docs/GUIDE_PERSONNALISATION_MARPUP.md) : modifier les tokens, créer des snippets personnels et compléter les données philosophiques.
- [`slides/demo.md`](slides/demo.md) : consulter une présentation montrant les principaux composants disponibles.

## Prérequis

- Installer [Git](https://git-scm.com/).
- Installer [Node.js](https://nodejs.org/) en version 18 ou ultérieure, avec npm.
- Utiliser de préférence [Visual Studio Code](https://code.visualstudio.com/) afin de bénéficier des snippets et des réglages du projet.
- Installer les extensions recommandées par VS Code, notamment **Marp for VS Code** et **Prettier**.

Vérifier les installations si nécessaire :

```bash
git --version
node --version
npm --version
```

## Installation et dépôt personnel

### 1. Créer un dépôt vide

Créer sur GitHub un nouveau dépôt destiné aux présentations personnelles. Ne pas initialiser ce dépôt avec un README, un `.gitignore` ou une licence.

### 2. Cloner MarpUp

```bash
git clone https://github.com/julienborgeon/marpup.git
cd marpup
```

### 3. Rediriger le dépôt vers le compte personnel

Changer l'URL du dépôt distant `origin` pour qu'elle pointe vers le dépôt personnel.

```bash
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
git remote -v
git status
git add .
git commit -m "First commit"
git push
git pull
```

Remplacer `https://github.com/USERNAME/REPOSITORY.git` par l'adresse HTTPS ou SSH du dépôt vide créé précédemment.

### 4. Installer les dépendances

```bash
npm ci
npm exec marp -- --version
```

Ouvrir ensuite le dossier `marpup` lui-même dans VS Code (et non son dossier parent).

## Démarrage rapide

1. Créer un fichier `.md` directement dans `slides/` (par exemple `slides/test.md`).
2. Saisir `/template` dans ce fichier et sélectionner le snippet **Marpup : Nouveau diaporama**.
3. Conserver le YAML et les quatre balises `<script>` générés par le template.
4. Ajouter les slides suivantes avec `/slide`.
5. Lancer la prévisualisation avec la commande suivante :

```bash
npm run dev
```

6. Ouvrir l'adresse indiquée dans le terminal, généralement `http://localhost:8080/`. Elle peut être ouverte dans une fenêtre de navigateur ou directement dans VS Code si l'extension appropriée est installée.
7. Générer la présentation HTML lorsque le contenu est prêt avec la commande :

```bash
npm run build:html
```

> [!IMPORTANT]
> Conserver les fichiers `.md` à la racine de `slides/` pour que les chemins relatifs `./assets/...` insérés par les snippets et le template restent valides. **En cas d'organisation en sous-dossiers, il faudra prévoir de modifier les chemins relatifs en conséquence.**

## Structure du projet

```text
marpup/
├─ .vscode/                         Réglages, extensions et snippets VS Code
├─ docs/                            Guides d'utilisation et de personnalisation
├─ dist/                            Fichiers générés, ignorés par Git
├─ scripts/
│  └─ copy-slide-assets.mjs         Copie des ressources locales vers dist/assets
├─ slides/
│  ├─ assets/
│  │  ├─ fonts/                     Polices custom embarquées
│  │  ├─ images/                    Images locales
│  │  ├─ videos/                    Vidéos locales
│  │  └─ philosophy/                Données et logique des modules des notions et repères
│  └─ demo.md                       Démonstration des composants
├─ themes/
│  └─ marpup.css                    Thème et tokens de personnalisation
├─ marp.config.mjs                  Configuration de Marp CLI
├─ package.json                     Commandes et dépendances npm
├─ package-lock.json                Versions verrouillées des dépendances
└─ README.md                        Point d'entrée du projet
```

`node_modules/` est créé par `npm ci`. `dist/` est créé ou actualisé lors des générations.

## Commandes disponibles

| Commande              | Fonction                                                                                |
| --------------------- | --------------------------------------------------------------------------------------- |
| `npm run dev`         | Démarrer le serveur de prévisualisation avec actualisation automatique.                 |
| `npm run build`       | Générer les présentations en HTML ; alias de `build:html`.                              |
| `npm run build:html`  | Générer les fichiers HTML dans `dist/`, puis copier les ressources dans `dist/assets/`. |
| `npm run build:pdf`   | Générer les présentations statiques au format PDF.                                      |
| `npm run build:pptx`  | Générer les présentations statiques au format PowerPoint.                               |
| `npm run copy:assets` | Copier uniquement `slides/assets/` vers `dist/assets/`.                                 |
| `npm run format`      | Formater les fichiers JavaScript avec Prettier.                                         |

## Prévisualisation et présentation

Utiliser `npm run dev` pour travailler dans le navigateur. Cette prévisualisation restitue mieux les polices embarquées et permet de tester les fenêtres interactives des repères et des notions ainsi que la lecture des vidéos.

Insérer une vidéo avec le snippet `/video`, puis conserver le chemin local proposé ou le remplacer par l'adresse directe d'un fichier vidéo distant. Appliquer aux images et aux vidéos les mêmes classes de mise en page `media-*`. Consulter le guide d'utilisation pour les exemples et les limites des sources distantes.

Privilégier le format HTML pour présenter un diaporama utilisant ces modules ou des vidéos. Les exports PDF et PowerPoint restent statiques et ne permettent ni d'ouvrir les définitions interactives ni de lire les vidéos.

Pour déplacer une présentation HTML sur une clé USB ou un autre ordinateur, copier ensemble depuis `dist/` :

```text
mon-cours.html
assets/
```

> [!IMPORTANT]
> Conserver le fichier HTML et le dossier `assets` côte à côte. Copier uniquement le fichier HTML casserait les chemins des polices, images, médias et scripts.

## Recommandations

- Utiliser `/template` pour commencer chaque nouvelle présentation.
- Placer les images dans `slides/assets/images/`, les vidéos dans `slides/assets/videos/` et conserver des chemins relatifs.
- Utiliser `slides/demo.md` comme exemple avant de construire une mise en page manuellement.
- Modifier uniquement les tokens de personnalisation dans `themes/marpup.css`.
- Ajouter les snippets personnels dans `.vscode/custom.code-snippets` mais éviter de modifier les snippets existants.
- Modifier les définitions des repères et notions uniquement dans `reperes-data.js` et `notions-data.js`.
- Ne pas modifier les scripts de logique `reperes.js` et `notions.js`.
- Ne pas modifier directement `dist/` ou `node_modules/` !
- Enregistrer régulièrement le travail dans Git avant une personnalisation importante.

> [!IMPORTANT]
> Les quatre balises `<script>` insérées par `/template` sont indispensables aux repères et notions. Conserver également `html: true` dans `marp.config.mjs`, car les composants interactifs reposent sur du HTML intégré.

> [!NOTE]
> Une image, une vidéo, une police ou une carte chargée depuis Internet peut devenir indisponible hors connexion. Préférer les ressources locales dans `slides/assets/` pour une présentation autonome.

## Travail quotidien avec Git

Après les modifications :

```bash
git status
git add .
git commit -m "Description des modifications"
git push
```

## Ressources

- [Syntaxe Markdown](https://www.markdownguide.org/basic-syntax/)
- [Documentation de Marp](https://marp.app/)
- [Documentation de Marpit](https://marpit.marp.app/markdown)
- [Dépôt officiel de MarpUp](https://github.com/julienborgeon/marpup)

## Licence

Distribué sous licence MIT. Consulter [LICENSE](LICENSE).
