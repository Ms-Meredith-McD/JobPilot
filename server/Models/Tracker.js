const mongoose = require('mongoose');


const trackerSchema = new mongoose.Schema({
  resume: {
    sent: { type: Boolean },
    date: { type: Date },
    link: { type: String }
  },
  interviewDate: { type: Date },
  interviewThankYou: {
    email: { type: String },
    sent: { type: Boolean }
  },
  interviewFollowUp: {
    sent: { type: Boolean },
    date: { type: Date },
    email: { type: String }
  },
  
  notes: {
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],
  },
  job: {
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  }

});


const Tracker = mongoose.model('Tracker', trackerSchema);

module.exports = Tracker