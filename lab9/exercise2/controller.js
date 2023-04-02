const { Note } = require('./model');
// If **content** is the correct length:
// - Create the note in the database, with **name** and **content** in the new row.
// - Send "Note successfully created" to the client with res.send if the note creation was successful
exports.createNote = async (req, res) => {
  const { name, content } = req.body;
  
// - Get **name** from req.body (the value of which will be the note-writer's name) 
// and get **content** from req.body (the value of which will be the note itself)
// - If **name** or **content** was not sent, send a response back to the client saying 
// "Both name and content must be sent" with status code 400.
  if (!name || !content) {
    res.status(400).send('Both name and content must be sent');
    return;
  }
//   If **name** and **content** were provided:
// - If **name** or **content** is not a string, send a response back to the client saying 
// "name and content must be a string" with status code 400.
  if (typeof name !== 'string' || typeof content !== 'string') {
    res.status(400).send('name and content must be a string');
    return;
  }
//   If **name** and **content** is a string:
// - If **name**'s length is 0 OR greater than 30, send a response back to the client saying 
// "name's length must be between 1 and 30" with status code 400.
  if (name.length < 1 || name.length > 30) {
    res.status(400).send("name's length must be between 1 and 30");
    return;
  }
//   If **name** is the correct length:
// - If **content**'s length is 0 OR greater than 22, send a response back to the client saying 
// "content's length must be between 1 and 255" with status code 400.
  if (content.length < 1 || content.length > 255) {
    res.status(400).send("content's length must be between 1 and 255");
    return;
  }
  try {
    const note = await Note.create({ name, content });
    res.send('Note successfully created');
  } catch (error) {
    console.log(error);
    res.status(500).send('Unable to create note');
  }
};
// The retrieve all notes API must do the following:
// - Send the client an array of note documents
// - The note documents will each be an object, with their name and content.
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.findAll({
      attributes: ['name', 'content'],
    });
    res.send(notes);
  } catch (error) {
    console.log(error);
    res.status(500).send('Unable to retrieve notes');
  }
};