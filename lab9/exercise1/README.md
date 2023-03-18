# Programming task - REST API using MongoDB

## Technical details

The project will be executed with the following command:

```sh
npm install express cors mongoose
```

To run/test your code, run this command:

```sh
node index.js
```

## Assignments
Assignment is to be completed by successfully completing the following tasks:

**TODO**: Create an express application that has 2 APIs. One to create a note, and the other to retrieve all notes.
The express application must follow MVC structure.

Create a **note** model with Mongoose. The schema will be name: String, content: String

The create note API must do the following:
- Get **name** from req.body (the value of which will be the note-writer's name) and get **content** from req.body (the value of which will be the note itself)
- If **name** or **content** was not sent, send a response back to the client saying "Both name and content must be sent" with status code 400.

If **name** and **content** were provided:
- If **name** or **content** is not a string, send a response back to the client saying "name and content must be a string" with status code 400.

If **name** and **content** is a string:
- Use the **note** model created above to create the note in the database, with **name** and **content** in the note document.
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

