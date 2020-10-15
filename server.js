const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3000;

let savedNotes = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
   res.json(savedNotes);
});


// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });

app.post("/api/notes", (req, res) => {
    var newNote = req.body;

    savedNotes.push(newNote);

    fs.writeFile("./data/db.json", JSON.stringify(savedNotes), (err) => {
        if (err) throw (err);
    });

    res.send(savedNotes);
});

app.listen(PORT, () => {
    console.log("The server is listening on PORT: http://localhost:" + PORT);
});