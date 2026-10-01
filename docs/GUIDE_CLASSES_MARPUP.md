# Guide des classes Marpit dans MarpUp

Ce guide rassemble toutes les classes définies par le thème `marpup`. Il indique leur rôle, la manière de les utiliser et le snippet VS Code associé lorsqu'il existe.

## Utilisation rapide

Pour appliquer une ou plusieurs classes à la slide courante, ajouter une directive locale respectant la syntaxe de Marpit :

```html
<!-- _class: text-sm text-justify -->
```

> [!TIP]
> Les classes peuvent être combinées en les séparant par une espace. Un snippet commençant par `!` insère généralement cette directive automatiquement.

Certaines classes s'appliquent à un élément HTML précis plutôt qu'à toute la slide :

```markdown
<span class="red">Texte rouge</span>
```

### Fichiers et préfixes des snippets

- `.vscode/marpit-helpers.code-snippets` : présentation et mise en page des slides, préfixes en `!`.
- `.vscode/marpup-helpers.code-snippets` : contenu Markdown courant, préfixes en `/`.
- `.vscode/marpup-notions.code-snippets` : notions philosophiques, préfixes en `@`.
- `.vscode/marpup-reperes.code-snippets` : repères philosophiques, préfixes en `@`.

Dans les tableaux suivants, « Aucun » signifie que la classe doit être ajoutée manuellement ou qu'elle est insérée automatiquement par un autre snippet.

## Typographie

### Taille du texte

Ces classes modifient la taille des paragraphes et des éléments de liste de la slide.

| Classe     | Effet                                              | Snippet                                      |
| ---------- | -------------------------------------------------- | -------------------------------------------- |
| `text-xs`  | Utilise la plus petite taille de texte disponible. | `!text-xs` — `marpit-helpers.code-snippets`  |
| `text-sm`  | Utilise une petite taille de texte.                | `!text-sm` — `marpit-helpers.code-snippets`  |
| `text-md`  | Utilise la taille de texte moyenne.                | `!text-md` — `marpit-helpers.code-snippets`  |
| `text-lg`  | Utilise une grande taille de texte.                | `!text-lg` — `marpit-helpers.code-snippets`  |
| `text-xl`  | Utilise une très grande taille de texte.           | `!text-xl` — `marpit-helpers.code-snippets`  |
| `text-2xl` | Utilise la plus grande taille de texte disponible. | `!text-2xl` — `marpit-helpers.code-snippets` |

### Alignement du texte

Ces classes alignent les paragraphes de la slide.

| Classe         | Effet                                                     | Snippet                                          |
| -------------- | --------------------------------------------------------- | ------------------------------------------------ |
| `text-left`    | Aligne les paragraphes à gauche.                          | `!text-left` — `marpit-helpers.code-snippets`    |
| `text-center`  | Centre les paragraphes.                                   | `!text-center` — `marpit-helpers.code-snippets`  |
| `text-right`   | Aligne les paragraphes à droite.                          | `!text-right` — `marpit-helpers.code-snippets`   |
| `text-justify` | Justifie les paragraphes sur toute la largeur disponible. | `!text-justify` — `marpit-helpers.code-snippets` |

### Graisse du texte

Ces classes modifient la graisse des paragraphes et des éléments de liste de la slide.

| Classe        | Effet                                    | Snippet                                         |
| ------------- | ---------------------------------------- | ----------------------------------------------- |
| `font-normal` | Utilise la graisse normale de la police. | `!font-normal` — `marpit-helpers.code-snippets` |
| `font-bold`   | Affiche le texte en gras.                | `!font-bold` — `marpit-helpers.code-snippets`   |

### Couleur ponctuelle

Ces classes s'emploient dans un élément HTML `<span>` pour colorer seulement une portion de texte. Le snippet `/color` permet de choisir l'une des quatre classes.

| Classe   | Effet                      | Snippet                                   |
| -------- | -------------------------- | ----------------------------------------- |
| `red`    | Colore le texte en rouge.  | `/color` — `marpup-helpers.code-snippets` |
| `blue`   | Colore le texte en bleu.   | `/color` — `marpup-helpers.code-snippets` |
| `green`  | Colore le texte en vert.   | `/color` — `marpup-helpers.code-snippets` |
| `orange` | Colore le texte en orange. | `/color` — `marpup-helpers.code-snippets` |

## Listes

L'icône des listes à puces non ordonnées par défaut a été modifiée par une flèche. Mais il est possible de restaurer les puces rondes habituelles avec la classe `default-bullets`.

| Classe            | Effet                                                                                 | Snippet                                             |
| ----------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `default-bullets` | Restaure les puces rondes habituelles pour les listes non ordonnées.                  | `!default-bullets` — `marpit-helpers.code-snippets` |
| `pc-bullets`      | Numérote les propositions `P1`, `P2`… et affiche les sous-listes avec la marque `C.`. | `!pc-bullets` — `marpit-helpers.code-snippets`      |

Les listes numérotées peuvent être précédées par la classe `pc-bullets` pour afficher les propositions numérotées `P1`, `P2`… et les sous-listes avec la marque `C.`, pour une meilleure organisation des raisonnements logiques.

### Listes animées

Pour faire apparaître les éléments listés l'un après l'autre pendant une présentation, il faut utiliser la **syntaxe Marpit** (en ajoutant une parenthèse fermante à la place du point dans les listes numérotées, ou en remplaçant le trait d'union par un astérisque dans les listes non ordonnées) juste après avoir inséré la directive `<!-- prettier-ignore -->`.

Cette directive empêche Prettier de reformater la liste et permet à Marpit de reconnaître correctement la syntaxe pour l'animation des éléments. Le snippet `!liste-animee` — disponible dans `marpit-helpers.code-snippets` — insère cette directive.

## Citations

| Classe            | Effet                                                                              | Snippet                                             |
| ----------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------- |
| `blockquote-long` | Réduit les marges réservées au chrome et centre une citation longue verticalement. | `!blockquote-long` — `marpit-helpers.code-snippets` |

Le snippet `!blockquote-long` combine automatiquement `blockquote-long`, `no-chrome`, `text-sm` et `text-justify`, puis insère la structure Markdown d'une citation avec son attribution.

> [!TIP]
> Les classes typographiques ajoutées par le snippet peuvent être remplacées pour adapter la taille du texte et son alignement au contenu.

## Images et vidéos

Insérer une image locale avec `/image`. Insérer une vidéo avec `/video`, puis remplacer son chemin par un fichier de `slides/assets/videos/` ou par l'adresse directe d'un fichier vidéo distant.

### Média unique

| Classe        | Effet                                                                          | Snippet                                               |
| ------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------- |
| `media-left`  | Aligne une image ou une vidéo seule sur le bord gauche de l'espace disponible. | `!media-gauche` — `marpit-helpers.code-snippets`      |
| `media-right` | Aligne une image ou une vidéo seule sur le bord droit de l'espace disponible.  | `!media-droite` — `marpit-helpers.code-snippets`      |
| `fullscreen`  | Étend une image ou une vidéo sur toute la slide et masque le chrome.           | `!media-full` — `marpit-helpers.code-snippets`        |
| `split-left`  | Place le média sur la moitié gauche et le contenu sur la moitié droite.        | `!media-split-left` — `marpit-helpers.code-snippets`  |
| `split-right` | Place le média sur la moitié droite et le contenu sur la moitié gauche.        | `!media-split-right` — `marpit-helpers.code-snippets` |

### Grilles de médias

Une grille peut contenir uniquement des images, uniquement des vidéos, ou les deux. Conserver chaque balise `<video>` sur une seule ligne et placer les médias les uns à la suite des autres sans ligne vide pour permettre à Marp de les regrouper.

| Classe    | Effet                                                             | Snippet                                     |
| --------- | ----------------------------------------------------------------- | ------------------------------------------- |
| `media-2` | Dispose deux images ou vidéos sur deux colonnes.                  | `!media-2` — `marpit-helpers.code-snippets` |
| `media-3` | Dispose trois images ou vidéos sur trois colonnes.                | `!media-3` — `marpit-helpers.code-snippets` |
| `media-4` | Dispose quatre images ou vidéos sur deux colonnes et deux lignes. | `!media-4` — `marpit-helpers.code-snippets` |
| `media-5` | Dispose cinq images ou vidéos sur trois colonnes et deux lignes.  | `!media-5` — `marpit-helpers.code-snippets` |
| `media-6` | Dispose six images ou vidéos sur trois colonnes et deux lignes.   | `!media-6` — `marpit-helpers.code-snippets` |

### Grilles de médias en plein écran

Ces classes remplissent toute la slide, utilisent des médias couvrants et masquent les titres, l'en-tête, le pied de page et la pagination.

| Classe         | Effet                                                             | Snippet                                          |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------ |
| `media-2-full` | Affiche deux images ou vidéos plein écran sur deux colonnes.      | `!media-2-full` — `marpit-helpers.code-snippets` |
| `media-3-full` | Affiche trois images ou vidéos plein écran sur trois colonnes.    | `!media-3-full` — `marpit-helpers.code-snippets` |
| `media-4-full` | Affiche quatre images ou vidéos sur deux colonnes et deux lignes. | `!media-4-full` — `marpit-helpers.code-snippets` |
| `media-5-full` | Affiche cinq images ou vidéos sur trois colonnes et deux lignes.  | `!media-5-full` — `marpit-helpers.code-snippets` |
| `media-6-full` | Affiche six images ou vidéos sur trois colonnes et deux lignes.   | `!media-6-full` — `marpit-helpers.code-snippets` |

### Ajustement des médias

Ces modificateurs s'ajoutent à une classe de média existante.

| Classe    | Effet                                                                                  | Snippet                                                                                   |
| --------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `cover`   | Agrandit l'image ou la vidéo jusqu'à couvrir son conteneur, quitte à rogner ses bords. | Incluse dans `!media-split-left` et `!media-split-right` — `marpit-helpers.code-snippets` |
| `contain` | Affiche l'image ou la vidéo entière, quitte à laisser de l'espace libre autour.        | Aucun, volontairement                                                                     |

Exemple d'utilisation manuelle de `contain` :

```markdown
<!-- _class: media-3-full contain -->
```

> [!NOTE]
> `cover` remplit entièrement le conteneur du média, quitte à en rogner les bords. `contain` affiche le média entier sans le rogner, quitte à laisser de l'espace libre autour.

La lecture vidéo est interactive dans la prévisualisation et dans l'export HTML. **Préférer un fichier local pour une présentation destinée à fonctionner sans connexion** ; une adresse distante doit pointer directement vers un fichier vidéo lisible par le navigateur, et non vers une page YouTube ou Vimeo.

## Structure de la slide

| Classe      | Effet                                                                                             | Snippet                                       |
| ----------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `no-chrome` | Masque l'en-tête, le pied de page et le numéro de page sans modifier le reste de la mise en page. | `!no-chrome` — `marpit-helpers.code-snippets` |
| `title-box` | Centre le contenu et rassemble le titre et le sous-titre dans un encadré gris.                    | `!title-box` — `marpit-helpers.code-snippets` |

## Mises en page pédagogiques

### Définition et exemples

| Classe              | Effet                                                                                            | Snippet                                               |
| ------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| `layout-definition` | Présente le premier élément d'une liste comme une définition et les suivants comme des exemples. | `!layout-definition` — `marpit-helpers.code-snippets` |

Le snippet ajoute également `default-bullets` et insère une liste prête à compléter.

### Distinction entre deux concepts

| Classe               | Effet                                                                                                        | Snippet                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `layout-distinction` | Présente deux concepts côte à côte, séparés par le signe `≠`.                                                | `!layout-distinction` — `marpit-helpers.code-snippets`             |
| `grid`               | Crée la grille interne de la distinction. Cette classe n'est utile qu'à l'intérieur de `layout-distinction`. | Générée par `!layout-distinction` — `marpit-helpers.code-snippets` |
| `col`                | Crée une colonne de concept et d'exemples dans la grille.                                                    | Générée par `!layout-distinction` — `marpit-helpers.code-snippets` |

Le snippet ajoute aussi `text-md` et génère les deux colonnes complètes.

> [!IMPORTANT]
> Les espaces entre les balises HTML sont importants pour que les classes soient correctement appliquées. Les supprimer casse la mise en page.

## Exercices

### Types d'exercices

| Classe                  | Effet                                                                                                 | Snippet                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `exo-distinction`       | Présente un exercice de classement avec un tableau séparé en colonnes.                                | `!exo-distinction` — `marpit-helpers.code-snippets`       |
| `exo-redaction`         | Met en forme un exercice de rédaction et détache visuellement sa consigne.                            | `!exo-redaction` — `marpit-helpers.code-snippets`         |
| `exo-qcm`               | Met en forme un questionnaire à choix multiple et ajoute un pictogramme de question au premier titre. | `!exo-qcm` — `marpit-helpers.code-snippets`               |
| `exo-raisonnement`      | Centre une carte de raisonnement intégrée dans la slide.                                              | `!exo-raisonnement` — `marpit-helpers.code-snippets`      |
| `exo-discussion`        | Ajoute un pictogramme de discussion au premier titre.                                                 | `!exo-discussion` — `marpit-helpers.code-snippets`        |
| `exo-approfondissement` | Ajoute un pictogramme de recherche au premier titre.                                                  | `!exo-approfondissement` — `marpit-helpers.code-snippets` |
| `exo-groupe`            | Ajoute un pictogramme de groupe au premier titre.                                                     | `!exo-groupe` — `marpit-helpers.code-snippets`            |

### Classes internes aux exercices

| Classe        | Effet                                                                                                                                 | Snippet                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `grid-item`   | Dispose en trois colonnes les éléments à classer dans un exercice de distinction.                                                     | Générée par `!exo-distinction` — `marpit-helpers.code-snippets`  |
| `embeded-map` | Étend une carte intégrée par `<iframe>` sur l'espace disponible. L'orthographe avec un seul `d` correspond au nom de classe existant. | Générée par `!exo-raisonnement` — `marpit-helpers.code-snippets` |

## Modules philosophiques

### Repères et notions insérés dans le texte

| Classe          | Effet                                                                                | Snippet                                                       |
| --------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| `marpup-repere` | Transforme un bouton HTML en repère philosophique interactif ouvrant sa définition.  | Snippets `@nom-du-repère` — `marpup-reperes.code-snippets`    |
| `marpup-notion` | Transforme un bouton HTML en notion philosophique interactive ouvrant sa définition. | Snippets `@nom-de-la-notion` — `marpup-notions.code-snippets` |

> [!NOTE]
> Utiliser les snippets dédiés plutôt que d'écrire les boutons à la main : ils renseignent aussi les attributs `data-repere` ou `data-notion` nécessaires au fonctionnement du module.

### Classes techniques des dialogues

Les classes suivantes sont créées automatiquement par les scripts du module philosophique. Elles sont documentées ici pour que le guide reste exhaustif, mais elles ne doivent pas être ajoutées manuellement dans un fichier Markdown.

| Classe                             | Rôle interne                                                  | Snippet |
| ---------------------------------- | ------------------------------------------------------------- | ------- |
| `marpup-repere-dialog`             | Conteneur de la fenêtre affichant la définition d'un repère.  | Aucun   |
| `marpup-repere-dialog__header`     | En-tête de la fenêtre d'un repère.                            | Aucun   |
| `marpup-repere-dialog__group`      | Libellé du groupe auquel appartient le repère.                | Aucun   |
| `marpup-repere-dialog__title`      | Titre du repère dans la fenêtre.                              | Aucun   |
| `marpup-repere-dialog__definition` | Texte de définition du repère.                                | Aucun   |
| `marpup-repere-dialog__close`      | Bouton de fermeture de la fenêtre du repère.                  | Aucun   |
| `marpup-notion-dialog`             | Conteneur de la fenêtre affichant la définition d'une notion. | Aucun   |
| `marpup-notion-dialog__header`     | En-tête de la fenêtre d'une notion.                           | Aucun   |
| `marpup-notion-dialog__group`      | Libellé du groupe auquel appartient la notion.                | Aucun   |
| `marpup-notion-dialog__title`      | Titre de la notion dans la fenêtre.                           | Aucun   |
| `marpup-notion-dialog__definition` | Texte de définition de la notion.                             | Aucun   |
| `marpup-notion-dialog__close`      | Bouton de fermeture de la fenêtre de la notion.               | Aucun   |

## Choisir rapidement une classe

- Texte trop dense : utiliser `text-sm` ou `text-xs`.
- Texte à justifier : utiliser `text-justify`.
- Paragraphes et listes à mettre en gras : utiliser `font-bold`.
- Longue citation : utiliser `!blockquote-long`.
- Plusieurs images ou vidéos : choisir `media-2` à `media-6`.
- Médias bord à bord : choisir la variante correspondante en `-full`.
- Média non rogné dans une grille plein écran : ajouter manuellement `contain`.
- Définition suivie d'exemples : utiliser `!layout-definition`.
- Comparaison entre deux concepts : utiliser `!layout-distinction`.
- Activité pédagogique : choisir le snippet `!exo-*` correspondant.
