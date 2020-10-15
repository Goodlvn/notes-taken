const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log("The server is listening on PORT: http://localhost:" + PORT);
});