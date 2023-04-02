// Create a **note** model with Mongoose. The schema will be name: String, content: String

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  name: String,
  content: String
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;