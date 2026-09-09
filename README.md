# Initialiser le projet, une fois téléchargé

`npm install`

# Workflow Git

```git
git status
git pull
git add .
git status
git commit -m "truc"
git push
```

# Liste des commandes

Vérifier d'abord la version de npm avec `npm -v` (si une version est donnée, c'est bon, c'est installé ! Sinon, appelle Julien).

```bash
npm run dev
npm run build
npm run build:html
npm run build:html
npm run build:pdf
npm run build:pptx
```

- `npm run dev` est inutile
- `npm run build` compile la solution et fait remonter des erreurs s'il y en a (le faire avant de générer les PDF et autres formats)
- `npm run build:pdf` (et les autres formats) : génère les fichiers dans les formats sélectionnés dans le sous-dossier `dist/` du projet (accessible dans ton pc)
