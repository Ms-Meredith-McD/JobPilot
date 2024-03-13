const mongoose = require('mongoose');


const trackerSchema = new mongoose.Schema({
  resume: {
    date: { type: String },
    link: { type: String }
  },
  interviewDate: { type: String },
  interviewThankYou: {
    email: { type: String },
    date: { type: String }
  },
  interviewFollowUp: {
    date: { type: String },
    email: { type: String }
  },

  notes: {
    type: String
  },
  job: {
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  }

});


const Tracker = mongoose.model('Tracker', trackerSchema);

module.exports = Tracker