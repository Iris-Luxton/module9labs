# Programming task - REST API using MySQL

## Technical details

The project will be executed with the following command:

```sh
npm install express cors sequelize
```

To run/test your code, run this command:

```sh
node index.js
```

## Assignments
Assignment is to be completed by successfully completing the following tasks:

**TODO**: Create an express application that has 2 APIs. One to create a note, and the other to retrieve all notes.
The express application must follow MVC structure.

Create a **note** table. The schema will be:
- name: varchar(30)
- content: varchar(255)

The create note API must do the following:
- Get **name** from req.body (the value of which will be the note-writer's name) and get **content** from req.body (the value of which will be the note itself)
- If **name** or **content** was not sent, send a response back to the client saying "Both name and content must be sent" with status code 400.

If **name** and **content** were provided:
- If **name** or **content** is not a string, send a response back to the client saying "name and content must be a string" with status code 400.

If **name** and **content** is a string:
- If **name**'s length is 0 OR greater than 30, send a response back to the client saying "name's length must be between 1 and 30" with status code 400.

If **name** is the correct length:
- If **content**'s length is 0 OR greater than 22, send a response back to the client saying "content's length must be between 1 and 255" with status code 400.

If **content** is the correct length:
- Create the note in the database, with **name** and **content** in the new row.
- Send "Note successfully created" to the client with res.send if the note creation was successful

The retrieve all notes API must do the following:
- Send the client an array of note documents
- The note documents will each be an object, with their name and content.

For example:
```js
[
    {
        name: 'Sebastian Webster',
        content: 'My first note'
    },
    {
        name: 'Sebastian Webster',
        content: 'My second note!'
    },
    {
        name: 'John Smith',
        content: 'Writing notes is fun'
    }
]
```

**IMPORTANT**: You do not need to make a frontend for this exercise. You can test this app using Postman.

## Resources

