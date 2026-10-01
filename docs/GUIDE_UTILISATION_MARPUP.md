# Guide d'utilisation de MarpUp

MarpUp permet de rédiger des présentations en Markdown, de les prévisualiser dans un navigateur, puis de les générer en HTML, PDF ou PowerPoint grâce au moteur Marp.

## Organisation du projet

- `slides/` : conserver les fichiers Markdown des présentations.
- `slides/assets/` : conserver les images, vidéos, fichiers sources des polices et modules utilisés par les slides.
- `themes/marpup.css` : définir l'apparence et les classes du thème MarpUp.
- `.vscode/` : fournir les snippets disponibles pendant la rédaction.
- `dist/` : recevoir les présentations générées et la copie des ressources nécessaires.

Après le téléchargement du projet, installer les dépendances avec :

```bash
npm ci
```

## Créer une présentation

1. Créer un fichier portant l'extension `.md` selon l'une ou l'autre des stratégies suivantes :
   1. directement à la racine de `slides/` afin de conserver les chemins relatifs vers `./assets/`.
   2. dans un sous-dossier de `slides/` afin de mieux organiser les présentations (dans ce cas : **adapter les chemins relatifs vers `../assets/`**).
2. Ouvrir ce fichier dans VS Code en mode Markdown.
3. Saisir `/template`, puis sélectionner le snippet **Marpup : Nouveau diaporama**.
4. Utiliser la touche `Tab` pour renseigner successivement le titre, l'auteur, l'en-tête, le pied de page et le sous-titre.

Les chemins à adapter dans un sous-dossier concernent les images, vidéos et scripts locaux. Les polices sont directement intégrées au thème et fonctionnent automatiquement à toute profondeur.

Toujours commencer une nouvelle présentation avec `/template`. Ce snippet insère d'abord la configuration YAML nécessaire :

```yaml
---
marp: true
theme: marpup
size: 16:9
title: Titre
author: Auteur
paginate: true
header:
footer:
---
```

Il insère aussi les scripts nécessaires aux modules des repères et des notions philosophiques :

```html
<script src="./assets/philosophy/reperes-data.js"></script>
<script src="./assets/philosophy/reperes.js" defer></script>
<script src="./assets/philosophy/notions-data.js"></script>
<script src="./assets/philosophy/notions.js" defer></script>
```

> [!IMPORTANT]
> Ne pas supprimer, déplacer ou modifier ces quatre balises. Sans elles, les définitions interactives des repères et des notions ne peuvent pas fonctionner. Pour personnaliser leur contenu, modifier uniquement les fichiers de données `reperes-data.js` et `notions-data.js`.

Pour ajouter ensuite une slide, utiliser `/slide`. Le snippet insère le séparateur `---` et un titre prêt à compléter.

## Utiliser les snippets

Saisir le préfixe d'un snippet dans un fichier Markdown, sélectionner la proposition affichée par VS Code, puis utiliser `Tab` pour passer d'un champ à l'autre.

### Snippets préfixés `/` : raccourcis pour les contenus Markdown

Utiliser les snippets de `.vscode/marpup-helpers.code-snippets` pour insérer rapidement du contenu Markdown :

- `/template` pour initialiser une présentation complète ;
- `/slide` pour créer une nouvelle slide ;
- `/link` et `/link-title` pour créer des liens ;
- `/quote` pour créer une citation ;
- `/table`, `/table3`, `/table4` et `/table-align` pour créer des tableaux ;
- `/image` pour insérer une image située dans `slides/assets/images/` ;
- `/video` pour insérer une vidéo locale ou distante avec ses contrôles de lecture ;
- `/break` pour forcer un saut de ligne ;
- `/color` pour colorer ponctuellement du texte.

#### * Insérer une vidéo

Saisir `/video`, puis renseigner soit un chemin local, soit l'adresse directe d'un fichier vidéo distant :

```text
<video controls playsinline preload="metadata" src="./assets/videos/video.mp4">Cette vidéo ne peut pas être lue par ce navigateur.</video>
```

Placer les fichiers locaux dans `slides/assets/videos/`. Utiliser par exemple `./assets/videos/cours.mp4` depuis un fichier Markdown situé à la racine de `slides/`. Pour une vidéo distante, remplacer le chemin par une adresse commençant par `https://` et pointant directement vers le fichier vidéo. Une page YouTube ou Vimeo ne constitue pas une adresse de fichier vidéo et nécessite un autre type d'intégration.

> [!TIP]
> Conserver chaque balise `<video>` sur une seule ligne. Appliquer aux vidéos les mêmes classes `media-*`, `fullscreen`, `split-*`, `cover` et `contain` qu'aux images. Dans une grille, placer les balises vidéo et les images les unes à la suite des autres sans ligne vide.

### Snippets préfixés `!` : classes Marpit pour la slide courante

Utiliser les snippets de `.vscode/marpit-helpers.code-snippets` pour ajouter des classes de mise en page, par exemple :

```markdown
<!-- _class: text-sm text-justify -->
```

> [!TIP]
> Combiner plusieurs classes dans une même directive en les séparant par une espace. Utiliser notamment ces snippets pour régler la taille ou l'alignement du texte, organiser les images et vidéos, créer une citation longue, appliquer une mise en page pédagogique ou préparer un exercice.

Consulter `docs/GUIDE_CLASSES_MARPUP.md` pour retrouver la liste exhaustive des classes et des snippets associés.

### Snippets préfixés `@` : philosophie

Utiliser les snippets de `.vscode/marpup-reperes.code-snippets` et `.vscode/marpup-notions.code-snippets` pour insérer un repère ou une notion interactive.

Par exemple, saisir `@analogie` ou `@nature`, puis sélectionner le snippet proposé. Laisser le code HTML généré intact afin de conserver l'ouverture de la définition au clic.

## Prévisualiser une présentation

Lancer le serveur de développement avec :

```bash
npm run dev
```

Ouvrir ensuite dans un navigateur l'adresse affichée dans le terminal, généralement `http://localhost:8080/`. Sélectionner la présentation souhaitée, puis enregistrer le fichier Markdown pour actualiser automatiquement la prévisualisation.

> [!NOTE]
> Préférer cette prévisualisation dans le navigateur à l'aperçu natif de l'extension Marp : les polices embarquées et les fenêtres interactives des repères et notions y sont reproduites plus fidèlement.

## Générer les présentations

| Commande              | Résultat                                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------------------- |
| `npm run build`       | Générer les présentations en HTML. Cette commande est un alias de `build:html`.                           |
| `npm run build:html`  | Générer les fichiers HTML dans `dist/`, puis copier automatiquement `slides/assets/` vers `dist/assets/`. |
| `npm run build:pdf`   | Générer les présentations au format PDF dans `dist/`.                                                     |
| `npm run build:pptx`  | Générer les présentations au format PowerPoint dans `dist/`.                                              |
| `npm run copy:assets` | Copier uniquement les ressources de `slides/assets/` vers `dist/assets/`.                                 |
| `npm run format`      | Formater les fichiers JavaScript du projet avec Prettier.                                                 |

> [!NOTE]
> Privilégier le format HTML pour conserver les interactions des repères et des notions ainsi que la lecture des vidéos. Réserver les formats PDF et PowerPoint aux présentations statiques : ils ne permettent ni d'ouvrir les définitions interactives ni de lire une vidéo intégrée.

## Présenter ou déplacer une version HTML

Après l'exécution de `npm run build:html`, ouvrir le fichier `.html` correspondant dans `dist/` avec un navigateur moderne.

Pour transporter une présentation sur une clé USB ou un autre ordinateur, copier ensemble :

```text
presentation.html
assets/
```

> [!IMPORTANT]
> Conserver le fichier HTML et le dossier `assets` côte à côte, sans renommer ni réorganiser les sous-dossiers. Copier uniquement le fichier HTML casserait les chemins relatifs : les images, médias et modules philosophiques ne seraient alors plus chargés. Les polices du thème, déjà intégrées au CSS, resteraient disponibles.

Pour une utilisation hors connexion, vérifier également que les contenus référencés par une adresse Internet ne sont pas indispensables. Les fichiers locaux placés dans `assets/` restent disponibles sans connexion.
