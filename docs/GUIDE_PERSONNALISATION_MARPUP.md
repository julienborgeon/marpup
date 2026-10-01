# Guide de personnalisation de MarpUp

Personnaliser MarpUp uniquement dans les zones prévues à cet effet permet de faciliter les mises à jour et de conserver les snippets et les présentations en état de fonctionnement.

## Personnaliser l'apparence

Ouvrir `themes/marpup.css`, puis modifier uniquement les valeurs situées dans la section suivante :

```css
/* TOKENS — PERSONNALISATION DU THÈME */
```

Cette section commence par `:root {` et rassemble les réglages accessibles :

- couleurs générales ;
- familles, tailles et graisses de polices ;
- hauteurs de ligne et espacements typographiques ;
- marges et espacements de la slide ;
- listes, citations, tableaux et médias ;
- dialogues des repères et notions ;
- mises en page pédagogiques et exercices.

Modifier seulement la valeur placée après les deux-points. Conserver le nom du token, son unité et le point-virgule final.

```css
/* Avant */
--marpup-color-primary: rgb(124, 63, 88);
--marpup-font-size-body: 30px;
--marpup-slide-padding: 40px;

/* Exemple de personnalisation */
--marpup-color-primary: rgb(34, 85, 120);
--marpup-font-size-body: 32px;
--marpup-slide-padding: 36px;
```

> [!IMPORTANT]
> Ne jamais modifier les règles CSS placées après la section des tokens. Prévisualiser ensuite le résultat avec `npm run dev` et procéder par petites modifications.

## Ajouter des snippets personnels

Créer uniquement le fichier suivant :

```text
.vscode/custom.code-snippets
```

Ne pas ajouter de snippets personnels dans les fichiers fournis par MarpUp. Utiliser une structure de ce type dans `custom.code-snippets` :

```jsonc
{
  "Insère mon contenu": {
    "scope": "markdown",
    "prefix": "/mon-snippet",
    "body": ["## ${1:Titre}", "", "${2:Contenu}", "", "$0"],
    "description": "Snippet personnel : insère un titre et un contenu",
  },
}
```

Choisir un préfixe unique. Utiliser `${1:Texte}` pour créer un champ à compléter, puis `${2:Texte}` pour le suivant. Utiliser `$0` pour définir la position finale du curseur.

Conserver les fichiers de snippets fournis sans modification :

- `.vscode/marpit-helpers.code-snippets` ;
- `.vscode/marpup-helpers.code-snippets` ;
- `.vscode/marpup-notions.code-snippets` ;
- `.vscode/marpup-reperes.code-snippets`.

## Personnaliser les repères et les notions

Modifier uniquement les deux fichiers de données :

- `slides/assets/philosophy/reperes-data.js` pour les repères ;
- `slides/assets/philosophy/notions-data.js` pour les notions.

Chaque entrée contient :

- un identifiant technique unique, **sans espace ni accent** ;
- `terme`, pour le nom affiché ;
- `groupe`, pour la catégorie affichée ;
- `definition`, pour le texte de la définition.

### Modifier une entrée

Modifier seulement les textes placés entre guillemets. Pour corriger une définition existante, conserver l'identifiant et la structure de l'objet.

```js
liberte: {
  terme: "Liberté",
  groupe: "Notion du programme",
  definition: "Nouvelle définition rédigée en un paragraphe.",
},
```

### Ajouter une entrée

Ajouter le nouvel objet avant la fermeture finale `};` du fichier concerné. Conserver les accolades, les guillemets et les virgules.

```js
mon_repere: {
  terme: "Mon repère",
  groupe: "Premier terme / second terme",
  definition: "Définition du nouveau repère.",
},
```

Pour insérer ensuite cette nouvelle entrée dans une slide, il est impératif de modifier le fichier `marupu-reperes.code-snippets`. C'est une opération sensible ! Mais il suffit de respecter la syntaxe des snippets existants pour en ajouter un (après une `,` ajoutée après l'accolade fermante du dernier snippet et avant la fermeture du tableau des snippets `}` du fichier).

Le résultat escompté est le suivant (à tester en renseignant le snippet nouvellement ajouté) :

```html
<button type="button" class="marpup-repere" data-repere="mon_repere">
  mon repère
</button>
```

> [!IMPORTANT]
> Ne jamais modifier les fichiers de logique `reperes.js` et `notions.js`. Ne pas supprimer non plus leurs balises `<script>` du template des présentations.

## Fichiers à ne pas modifier

Pour une personnalisation ordinaire, ne pas toucher aux éléments suivants :

- les règles techniques de `themes/marpup.css`, situées après les tokens ;
- `slides/assets/philosophy/reperes.js` et `slides/assets/philosophy/notions.js` ;
- les quatre fichiers de snippets fournis dans `.vscode/` (sauf ajout d'un repère) ;
- `scripts/copy-slide-assets.mjs` ;
- `package.json` et `package-lock.json` ;
- le contenu de `node_modules/` ;
- les fichiers présents dans `dist/`, car ils sont régénérés lors du prochain build.

> [!IMPORTANT]
> Conserver également les quatre balises `<script>` insérées par `/template`. Pour personnaliser une présentation, intervenir dans son fichier source `.md` et dans `slides/assets/`, jamais directement dans sa version générée dans `dist/`.

## Résumé des zones autorisées

| Besoin                                                | Emplacement à modifier                      |
| ----------------------------------------------------- | ------------------------------------------- |
| Changer les couleurs, polices, tailles ou espacements | Valeurs des tokens dans `themes/marpup.css` |
| Ajouter un snippet personnel                          | `.vscode/custom.code-snippets`              |
| Modifier ou ajouter un repère                         | `slides/assets/philosophy/reperes-data.js`  |
| Modifier le contenu d'une présentation                | Fichier `.md` correspondant dans `slides/`  |
| Ajouter des images                                    | `slides/assets/images/`                     |
| Ajouter des vidéos                                    | `slides/assets/videos/`                     |
