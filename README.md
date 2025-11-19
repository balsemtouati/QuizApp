# QuizBackend

Backend minimal pour une application de quiz (Node.js / Express).

**Structure du projet**
- `server.js` : point d'entrée de l'application
- `package.json` : dépendances et scripts
- `models/user.js` : modèle utilisateur
- `routes/userRoutes.js` : routes liées aux utilisateurs

## Prérequis
- Node.js v14+ installé
- Git configuré localement

## Installation
1. Ouvrir un terminal dans le dossier du projet :

```powershell
cd "c:\Users\touat\Downloads\quizbackend-master\quizbackend-master"
```

2. Installer les dépendances :

```powershell
npm install
```

## Démarrage
Lancer le serveur :

```powershell
npm start
```

Par défaut, le serveur devrait écouter sur le port défini dans `server.js` (ou `process.env.PORT`).

## Tests
Il n'y a pas de tests fournis dans ce dépôt. Vous pouvez ajouter des tests avec Jest ou Mocha.

## Déploiement / Push sur GitHub
Si vous n'avez pas encore de remote GitHub, créez un dépôt sur GitHub, puis ajoutez le remote :

```powershell
git remote add origin https://github.com/<votre-utilisateur>/<votre-repo>.git
```

Puis poussez la branche principale :

```powershell
git add README.md
git commit -m "Add README"
git push -u origin main
```

Remplacez `main` par `master` si votre branche par défaut s'appelle `master`.

## Contribution
- Ouvrez une issue pour discuter des changements.
- Faites une branche, puis un pull request.

## Contact
Pour toute question, ouvrez une issue sur le dépôt GitHub.
