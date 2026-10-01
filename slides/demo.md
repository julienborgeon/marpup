---
marp: true
theme: marpup
size: 16:9
title: Titre
author: Julien Borgeon
paginate: true
header: Exemple d'en-tête
footer: Exemple de pied de page
---

<script src='./assets/philosophy/reperes-data.js'></script>
<script src='./assets/philosophy/reperes.js' defer></script>

<script src='./assets/philosophy/notions-data.js'></script>
<script src='./assets/philosophy/notions.js' defer></script>

# Titre de niveau 1

## Titre de niveau 2

### Titre de niveau 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus felis, pharetra nec nibh nec, efficitur rutrum libero. Proin at nulla quis dolor hendrerit facilisis.

Integer fringilla eget ex ac tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vitae metus risus. Sed dignissim facilisis volutpat. Curabitur aliquet feugiat velit ac maximus. Pellentesque malesuada augue a viverra feugiat.

---

# Listes par défaut

## Liste à puces

- Item 1
- Item 2
- Item 3

(La puce par défaut est remplacée par l'icône →)

## Liste numérotée

1. Item 1
2. Item 2
3. Item 3

---

# Listes animées

(Pour permettre la syntaxe de Marpit nécessaire aux animations de liste, il faut les précéder sans espace par la directive `<!-- prettier-ignore -->`)

## Liste à puces

<!-- prettier-ignore -->
* Lorem
* Ipsum

## Liste numérotée

<!-- prettier-ignore -->
1) Lorem
2) Ipsum

---

# Liste à puces par défaut du navigateur

<!-- _class: default-bullets -->

- Item 1
- Item 2
- Item 3

---

# Liste avec puces P/C

<!-- _class: pc-bullets -->

1. Prémisse 1
2. Prémisse 2
3. Prémisse 3

- Conclusion

---

# Liens (avec et sans titre au survol)

[Lien par défaut](https://example.com)

[Lien avec titre au survol](https://example.com "Titre")

---

# Bloc de citation courte

> Citation
>
> — Auteur, _source_, date.

---

# Bloc de citation longue

La slide suivante figure une mise en page spéciale pour les citations longues : elle ajoute la directive `blockquote-long` à la slide ainsi que les modificateurs de taille et d'alignement de texte `text-sm` et `text-justify`, et empêche l'affichage de l'en-tête, le pied de page et les numéros de page avec la classe `no-chrome`.

**TIP :** Selon la taille du texte cité, les modificateurs `text-md` ou `text-lg` peuvent être utilisés à la place de `text-sm`.

---

<!-- _class: blockquote-long text-sm text-justify no-chrome -->

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac dolor eu ante iaculis pharetra. Vivamus sed eros malesuada, cursus massa et, congue lacus. Cras sagittis iaculis magna, vel tristique augue feugiat et. Aenean vehicula nunc nec condimentum tincidunt. Sed nec neque ullamcorper, lobortis purus et, laoreet odio. Integer purus ex, semper et finibus ut, ornare nec lacus. Quisque sit amet urna turpis. Aliquam imperdiet, sem quis luctus blandit, leo diam ullamcorper nibh, ut feugiat nunc augue eu nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec finibus tortor quis odio efficitur laoreet. Cras tincidunt sollicitudin finibus. Aenean nec vestibulum odio, vitae gravida augue. Proin fringilla eros vel eros tempus volutpat. Nulla ut sem at nisl hendrerit fermentum et in tortor. Fusce consequat quis felis in ullamcorper. Nulla feugiat ex quis feugiat sollicitudin.
>
> Nullam orci dolor, dapibus non condimentum ac, ullamcorper nec urna. Vivamus faucibus blandit magna ac vehicula. Curabitur lobortis ut ex sit amet sagittis. Quisque efficitur faucibus elementum. Nunc vel mattis tortor. Ut nec quam ut enim porttitor molestie. Donec sollicitudin tincidunt lorem, a convallis dui scelerisque pulvinar. Morbi laoreet mauris luctus turpis venenatis elementum. Cras non condimentum erat, et fringilla erat. Sed maximus at diam eget vestibulum.
>
> — Auteur, _source_, date.

---

# Tableau simple

| Colonne | Colonne |
| ------- | ------- |
| Valeur  | Valeur  |
| Valeur  | Valeur  |

---

# Tableau à 3 colonnes

| Colonne | Colonne | Colonne |
| ------- | ------- | ------- |
| Valeur  | Valeur  | Valeur  |
| Valeur  | Valeur  | Valeur  |

---

# Tableau à 4 colonnes

| Colonne | Colonne | Colonne | Colonne |
| ------- | ------- | ------- | ------- |
| Valeur  | Valeur  | Valeur  | Valeur  |
| Valeur  | Valeur  | Valeur  | Valeur  |

---

# Tableaux avec alignements

| Colonne | Colonne | Colonne |
| :------ | :-----: | ------: |
| Valeur  | Valeur  |  Valeur |

<br>

| Gauche | Centre |
| :----- | :----: |
| Valeur | Valeur |

<br>

**NB :** la syntaxe de ces tableaux est celle des tableaux Markdown standard.

---

<!-- _class: text-sm -->

# Vidéo distante (centrée par défaut)

<video controls playsinline preload="metadata" src="https://mdn.github.io/shared-assets/videos/flower.mp4">Cette vidéo ne peut pas être lue par ce navigateur.</video>

<br>

Le même snippet `/video` accepte un chemin local tel que `./assets/videos/video.mp4`.

---

# Image locale (centrée par défaut)

![Description](./assets/images/zelda-bed-chill.jpg)

---

# Image à gauche

<!-- _class: media-left -->

![Description](./assets/images/zelda-bed-chill.jpg)

---

# Image à droite

<!-- _class: media-right -->

![Description](./assets/images/zelda-bed-chill.jpg)

---

# Deux images en vis-à-vis

<!-- _class: media-2 -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Trois images en vis-à-vis

<!-- _class: media-3 -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Quatre images en grille

<!-- _class: media-4 -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Cinq images en grille

<!-- _class: media-5 -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Six images en grille

<!-- _class: media-6 -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Deux images en grille plein écran

<!-- _class: media-2-full contain -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Trois images en grille plein écran

<!-- _class: media-3-full contain -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Quatre images en grille plein écran

<!-- _class: media-4-full contain -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Cinq images en grille plein écran

<!-- _class: media-5-full contain -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Six images en grille plein écran

<!-- _class: media-6-full contain -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Média plein écran

Les médias en plein écran permettent d'afficher des images ou des vidéos occupant toute la surface de la diapositive avec la directive `<!-- _class: fullscreen -->`.

Les médias peuvent aussi n'occuper qu'une partie de la diapositive avec les directives `<!-- _class: split-left -->` ou `<!-- _class: split-right -->`.

**TIP :** de façon générale, la classe `contain` permet de s'assurer que le média est entièrement visible à l'intérieur de sa zone, sans être rogné. Tandis que la classe `cover` permet au média de couvrir toute la zone, même si cela implique qu'une partie soit rognée. Ces deux classes peuvent être ajoutées aux directives standard après un espace.

---

# Média plein écran

<!-- _class: fullscreen -->

![Description](./assets/images/zelda-bed-chill.jpg)

---

# Deux images en grille plein écran

<!-- _class: media-2-full cover -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Trois images en grille plein écran

<!-- _class: media-3-full cover -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Quatre images en grille plein écran

<!-- _class: media-4-full cover -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Cinq images en grille plein écran

<!-- _class: media-5-full cover -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Six images en grille plein écran

<!-- _class: media-6-full cover -->

![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)
![Description](./assets/images/zelda-bed-chill.jpg)

---

# Média sur la moitié gauche

<!-- _class: split-left cover -->

![Description](./assets/images/zelda-bed-chill.jpg)

Texte ici.

---

# Média sur la moitié droite

<!-- _class: split-right cover -->

![Description](./assets/images/zelda-bed-chill.jpg)

Texte ici.

---

# Repère

Ceci est un exemple de repère inséré dans le texte : <button type="button" class="marpup-repere" data-repere="analogie">analogie</button>

---

# Notion

Ceci est un exemple de notion insérée dans le texte : <button type="button" class="marpup-notion" data-notion="nature">nature</button>

---

<!-- _class: title-box -->

# Titre

## Sous-titre

---

<!-- _class: no-chrome -->

# Aucun header/footer/n° de page

La directive `<!-- _class: no-chrome -->` permet de masquer l'en-tête, le pied de page et le numéro de page sur la diapositive. Elle peut être ajoutée à n'importe quelle autre directive après un espace.

---

# Textes colorés

- Ceci est un exemple de texte <span class="red">rouge</span>.
- Ceci est un exemple de texte <span class="blue">bleu</span>.
- Ceci est un exemple de texte <span class="green">vert</span>.
- Ceci est un exemple de texte <span class="orange">orange</span>.

<br>

**NB :** le snippet `/color` permet d'intégrer les balises `<span class='color'>texte</span>` directement dans le texte. Il faut ensuite changer la valeur `color` par `red`, `blue`, `green` ou `orange`.

---

# Mise en page : Définitions

<!-- _class: layout-definition default-bullets -->

- Abstrait désigne blablabla...
- Exemple : truc bidule machin
- Exemple : truc bidule machin
- Exemple : truc bidule machin

---

# Mise en page : Distinctions

<!-- _class: layout-distinction text-md -->

<div class="grid">

<div class="col">

- Premier concept
- Exemple
- Exemple

</div>

<div class="col">

≠

</div>

<div class="col">

- Second concept
- Exemple
- Exemple

</div>

</div>

<br>

**NB :** les balises `grid` et `col` sont automatiquement ajoutées pour ajuster le layout. Les espaces entre ces balises ne doivent pas être supprimés.

**TIP :** pour modifier la largeur du layout, il faut ajuster les classes `layout-sm`, `layout-md` ou `layout-lg` sur la diapositive.

---

# Exercice de distinction

<!-- _class: exo-distinction -->

| Colonne | Colonne |
| ------- | ------- |
| ?       | ?       |
| ?       | ?       |

<div class="grid-item">

1. Lorem
2. Ipsum
3. Dolor
4. Sit amet
5. Consectetur
6. Elit

</div>

<br>

**NB :** les balises `grid-item` sont automatiquement ajoutées pour ajuster le layout. Les espaces entre les balises ne doivent pas être supprimés.

---

<!-- _class: exo-redaction -->

# Exercice de rédaction

## Consigne : merci de rédiger un paragraphe qui reprend les éléments vus en cours.

1.
2.
3.

---

<!-- _class: exo-qcm -->

# Exercice de QCM

- **Question 1**
  1.  Option A
  2.  Option B
  3.  Option C

---

# Exercice de raisonnement

Pour travailler avec des arbres de raisonnement, il faut :

- Se rendre sur l'outil de Cédric Eyssette : [https://eyssette.github.io/argument-map/](https://eyssette.github.io/argument-map/)
- Construire un arbre de raisonnement
- Cliquer sur l'icône de lien
- Copier l'URL générée
- Utiliser le snippet `!exo-raisonnement` et coller l'URL entre les guillemets simples de `src=''`
- Travailler en live avec les élèves, et **ne pas sauvegarder les modifications**

<br>

**NB :** la slide suivante bug souvent : si l'affichage n'est pas optimal, il faut recharger la page.

---

<!-- _class: exo-raisonnement no-chrome -->

<iframe
  class="embeded-map"
  src='https://eyssette.github.io/argument-map/#[{"id":"s737h","type":"donc","from":["p1","p2"],"to":"c1"},{"id":"c1","text":"Conclusion","x":949,"y":584,"lineType":"solid"},{"id":"p1","text":"Prémisse%201","x":761,"y":386,"lineType":"solid"},{"id":"p2","text":"Prémisse%202","x":1072,"y":384,"lineType":"solid"}]'
></iframe>

---

# Pictogrammes des titres

Les titres des slides d'exercice sont accompagnés de pictogrammes spécifiques pour faciliter leur identification.

**NB :** la condition pour l'affichage du pictogramme est que la slide possède la directive correspondante :

- `<!-- _class: exo-qcm -->`,
- `<!-- _class: exo-discussion -->`,
- `<!-- _class: exo-approfondissement -->`,
- `<!-- _class: exo-redaction -->`,
- `<!-- _class: exo-groupe -->`,
- et que son titre soit un titre de niveau 1 (`#`).

---

<!-- _class: exo-qcm -->

# Exercice de QCM

---

<!-- _class: exo-discussion -->

# Exercice de discussion

---

<!-- _class: exo-approfondissement -->

# Exercice d'approfondissement

---

<!-- _class: exo-redaction -->

# Exercice de rédaction

---

<!-- _class: exo-groupe -->

# Exercice de groupe
