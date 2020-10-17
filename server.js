const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

//allow for text parsing and access to static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//include connection to route js files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("The server is listening on PORT: http://localhost:" + PORT);
});