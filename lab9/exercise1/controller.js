// **TODO**: Create an express application that has 2 APIs. One to create a note, and the other to retrieve all notes.
// The express application must follow MVC structure.
const Note = require('./model');

exports.createNote = async (req, res) => {
  const { name, content } = req.body;
//   The create note API must do the following:
// - Get **name** from req.body (the value of which will be the note-writer's name) and get **content** from req.body (the value of which will be the note itself)
// - If **name** or **content** was not sent, send a response back to the client saying "Both name and content must be sent" with status code 400.
  if (!name || !content) {
    return res.status(400).json({ error: 'Both name and content must be sent' });
  }
  // If **name** and **content** were provided:
  // - If **name** or **content** is not a string, send a response back to the client saying "name and content must be a string" with status code 400.
  if (typeof name !== 'string' || typeof content !== 'string') {
    return res.status(400).json({ error: 'name and content must be a string' });
  }
 
    // If **name** and **content** is a string:
    // - Use the **note** model created above to create the note in the database, with **name** and **content** in the note document.
    // - Send "Note successfully created" to the client with res.send if the note creation was successful
    try {
      const note = new Note({
        name,
        content
      });
    
      const savedNote = await note.save();
      res.json({ message: 'Note successfully created', note: savedNote });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Unable to save note' });
    }
  };
// The retrieve all notes API must do the following:
// - Send the client an array of note documents
// - The note documents will each be an object, with their name and content.
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Unable to retrieve notes' });
  }
};

// module.exports = {
//   createNote: (req, res) => {
//     const newNote = new Note({
//       name: req.body.name,
//       content: req.body.content
//     });
//     newNote.save((err, note) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).json(note);
//       }
//     });
//   },
  
//   getAllNotes: (req, res) => {
//     Note.find({}, (err, notes) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).json(notes);
//       }
//     });
//   }
// }


