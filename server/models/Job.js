const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  jobTitle: { type: String },
  website: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tracker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tracker",
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
