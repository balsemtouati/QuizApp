const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');  // Assurez-vous que ce fichier existe


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/quizApp')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

