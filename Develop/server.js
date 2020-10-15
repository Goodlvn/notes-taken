const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello Server");
});

app.listen(PORT, () => {
    console.log("The server is listening on PORT: http://localhost:" + PORT);
});