const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
  body: { type: String },
  job: {
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }
  }
  });


const Note = mongoose.model('Note', noteSchema);

module.exports = Note
