const mongoose = require('mongoose');

// Définition du modèle utilisateur
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true  // Assurez-vous que le nom d'utilisateur soit unique
  },
  password: {
    type: String,
    required: true
  }
});

// Création du modèle User
const User = mongoose.model('User', userSchema);

module.exports = User;

