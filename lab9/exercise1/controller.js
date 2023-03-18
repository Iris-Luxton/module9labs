const Note = require('./model');

module.exports = {
  createNote: (req, res) => {
    const newNote = new Note({
      name: req.body.name,
      content: req.body.content
    });
    newNote.save((err, note) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(note);
      }
    });
  },
  
  getAllNotes: (req, res) => {
    Note.find({}, (err, notes) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(notes);
      }
    });
  }
}