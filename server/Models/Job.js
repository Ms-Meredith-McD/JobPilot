const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
  resume: {
    sent: { type: Boolean},
    date: { type: Date},
    link: { type: String}
  },
  interviewDate: { type: Date},
  interviewThankYou: {
   email: { type: String},
   sent: { type: Boolean}
  },
  interviewFollowUp: {
    sent: { type: Boolean},
    date: { type: Date},
    email: { type: String}
  },
  other: {
    title: { type: String, require: true},
    description: { type: String, require: true},
    completed: { type: Boolean}

  },
  notes: {  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note'}],
},

});


const Job = mongoose.model('Job', jobSchema);

module.exports = Job