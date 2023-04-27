const express = require("express");
const path = require("path");
const { mdl } = require('./middleware/mdl');
const api = require('./controllers/index');



const PORT = process.env.PORT || 3000;

const app = express();

app.use(mdl);

//Middleware to Parse JSON and the url encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

// Get RT for the homepage
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

//get RT for notes html page
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));


app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));