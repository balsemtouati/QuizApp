const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');  // Assurez-vous que ce fichier existe
const router = express.Router();

// Route pour l'inscription d'un utilisateur
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Nom d\'utilisateur et mot de passe requis' });
  }

  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'L\'utilisateur existe déjà' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword
    });

    await newUser.save();

    return res.status(201).json({ message: 'Utilisateur inscrit avec succès' });

  } catch (err) {
    return res.status(500).json({ message: 'Erreur lors de l\'inscription. Veuillez réessayer.' });
  }
});

module.exports = router;

