const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

let savedNotes = [];

module.exports = function (app) {

    //send json info to api param
    app.get("/api/notes", (req, res) => {
        res.json(savedNotes);
    });

    //create new note
    app.post("/api/notes", (req, res) => {
        var newNote = req.body;
        //add unique ID
        newNote.id = uuidv4();
        savedNotes.push(newNote);

        //update db.json file
        fs.writeFile("./data/db.json", JSON.stringify(savedNotes), (err) => {
            if (err) throw (err);
        });

        res.send(savedNotes);
    });

    //delete notes
    app.delete("/api/notes/:id", (req, res) => {

        //filter through notes to match by id 
        savedNotes.forEach(note => {
            if (req.params.id === note.id) {
                //find the index of current obj
                let noteID = savedNotes.findIndex(obj => obj.id === note.id);
                savedNotes.splice(noteID, 1);
            };
        });

        //update db.json file
        fs.writeFile("./data/db.json", JSON.stringify(savedNotes), (err) => {
            if (err) throw (err);
        });

        //close cycle and send back json
        res.json(savedNotes);
    });
};