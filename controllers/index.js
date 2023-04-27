const express = require('express');

const notesControl = require('./notesControllers');

const app = express();

app.use('/notes', notesControl);

module.exports = app;