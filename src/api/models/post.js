const mongoose = require('mongoose');

// Defineix l'esquema per User
const PostSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true // Assegura que cada usuari te un ID únic
  },
  title: String,
    score: Number,
    viewCount: Number,
    commentCount: Number,
    creationDate: Date,
    answerCount: Number,
    tags: [String],
    ownerUserId: Number,
});

// Compila i exporta el model User
const Post = mongoose.model('Post', PostSchema);

module.exports = User;
