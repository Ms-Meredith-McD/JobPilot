const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  jobTitle: { type: String },
  website: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  notes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Note",
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
