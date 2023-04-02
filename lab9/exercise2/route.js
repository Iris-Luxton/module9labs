const express = require('express');
const router = express.Router();
const noteController = require('./controller');
// **TODO**: Create an express application that has 2 APIs. One to create a note, and the other to retrieve all notes.
// The express application must follow MVC structure.
router.post('/', noteController.createNote);
router.get('/', noteController.getAllNotes);

module.exports = router;