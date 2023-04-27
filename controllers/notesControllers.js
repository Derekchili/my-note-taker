const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const uuidv1 = require('uuid/v1')

notes.get('/', (req, res) =>{
    readFromFile('./Develop/db/db.json').then((data) => res.json(JSON.parse(data)));
})

notes.post('/', (req, res)=>{
    console.log(req.body);

    const { title, text } = req.body;

    if(req.body){
        const newNote = {
            title,
            text,
            id: uuidv1()
        };
        readAndAppend(newNote, './Develop/db/db.json');

        res.json(`Note added successfully 🚀`);
    }else {
        res.errored('Error in adding note')
    }
});

module.exports = notes;