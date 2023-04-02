//Put your code in this file

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// connect to MongoDB using Mongoose
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// import Note schema and model
const Note = require('./model');

// set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up routes
const noteController = require('./controller');
app.post('/notes', noteController.createNote);
app.get('/notes', noteController.getAllNotes);

// start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));