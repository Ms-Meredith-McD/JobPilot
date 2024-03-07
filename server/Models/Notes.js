const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
  body: { type: String },
  

});


const Note = mongoose.model('Note', noteSchema);

module.exports = Note
