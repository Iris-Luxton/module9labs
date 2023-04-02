//Put your code in this file
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const noteRoutes = require('./route');
const Sequelize = require("sequelize");
require('dotenv').config();
const sequelize = new Sequelize('my_db', 'root', process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/notes', noteRoutes);


sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });