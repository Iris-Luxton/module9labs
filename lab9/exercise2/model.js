const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('my_db', 'root', process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});
// Create a **note** table. The schema will be:
// - name: varchar(30)
// - content: varchar(255)
const Note = sequelize.define('note', {
  name: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  content: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
});

sequelize.sync()
  .then(() => {
    console.log('Database and tables created');
  })
  .catch((err) => {
    console.error('Unable to create database and tables', err);
  });
  module.exports = { Note };