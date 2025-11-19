git commit -m "Add README"
git push -u origin main
# QuizBackend

Backend minimal pour une application de quiz en Node.js/Express.

Ce dépôt contient un serveur basique avec gestion d'utilisateurs (inscription). Il utilise MongoDB via Mongoose et stocke les mots de passe hachés avec `bcrypt`.

## Structure du projet
- `server.js` : point d'entrée du serveur
- `package.json` : dépendances
- `models/user.js` : modèle Mongoose pour l'utilisateur
- `routes/userRoutes.js` : routes liées aux utilisateurs (inscription)

## Fonctionnalités principales
- Inscription d'un utilisateur avec mot de passe haché (`POST /api/users/register`).

## Prérequis
- Node.js v14+ installé
- MongoDB (local ou distant) disponible
- Git configuré localement pour les opérations de commit/push

## Installation
1. Ouvrez un terminal dans le dossier du projet :

```powershell
cd "c:\Users\touat\Downloads\quizbackend-master\quizbackend-master"
```

2. Installez les dépendances :

```powershell
npm install
```

3. Assurez-vous que MongoDB est démarré (par défaut, le serveur se connecte à `mongodb://localhost:27017/quizApp`).

## Configuration (optionnelle)
Actuellement la connexion MongoDB est codée en dur dans `server.js` vers `mongodb://localhost:27017/quizApp` et le port est fixé à `5000`.

Pour utiliser une configuration par variables d'environnement, vous pouvez :

- Installer `dotenv` (`npm install dotenv`) et charger `process.env.MONGO_URI` et `process.env.PORT` dans `server.js`.
- Ou démarrer Node en définissant les variables d'environnement (PowerShell) :

```powershell
$env:MONGO_URI = "mongodb://localhost:27017/quizApp" ; $env:PORT = "5000" ; node server.js
```

## Démarrage
Lancer le serveur directement avec Node :

```powershell
node server.js
```

Note : le projet n'a pas de script `start` défini dans `package.json`. Si vous voulez lancer avec `npm start`, ajoutez ce script :

```powershell
npm set-script start "node server.js"
```

## API

Base des routes : `/api/users`

- `POST /api/users/register`
	- Description : Inscrire un nouvel utilisateur.
	- Corps (JSON) attendu :

```json
{
	"username": "nom_utilisateur",
	"password": "mot_de_passe"
}
```

	- Réponses :
		- `201` : inscription réussie -> `{ message: "Utilisateur inscrit avec succès" }`
		- `400` : données manquantes ou utilisateur déjà existant
		- `500` : erreur serveur

Exemple curl :

```bash
curl -X POST http://localhost:5000/api/users/register \
	-H "Content-Type: application/json" \
	-d '{"username":"alice","password":"secret"}'
```

## Sécurité
- Les mots de passe sont hachés avec `bcrypt` avant d'être sauvegardés.
- Pour la production, activez TLS/HTTPS et protégez l'accès à la base de données.

## Tests
Il n'y a pas de suite de tests incluse. Pour ajouter des tests, installez par exemple `jest` ou `mocha` et créez des tests d'intégration pour les routes.

## Déploiement & push sur GitHub
1. Si vous n'avez pas encore de remote GitHub, créez un dépôt sur GitHub.
2. Ajoutez le remote (remplacez l'URL par la vôtre) :

```powershell
git remote add origin https://github.com/<votre-utilisateur>/<votre-repo>.git
```

3. Commit et push :

```powershell
git add README.md
git commit -m "docs: add detailed README"
git push -u origin main
```

Remplacez `main` par `master` si votre branche par défaut s'appelle `master`.

## Suggestions d'améliorations
- Ajouter un script `start` dans `package.json`.
- Charger la configuration depuis un fichier `.env` via `dotenv`.
- Ajouter des routes de login, récupération d'utilisateur, et gestion de sessions/JWT.
- Ajouter des tests automatisés.

## Contribution
- Ouvrez une issue pour proposer un changement.
- Faites une branche, puis un pull request.

## Licence
Ce dépôt n'a pas de licence explicite. Ajoutez un fichier `LICENSE` si vous souhaitez en définir une.


