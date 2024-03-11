const Job = require("../models/Job");

async function getAllJobs() {
  try {
    return await Job.find({});
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}

async function getJobById(id) {
  try {
    return await Job.findById(id).populate('notes');
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}

async function getJobs(id) {
  try {
    const jobs = await Job.find({ user: id })
    console.log(jobs);
    return jobs;
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}

async function createJob(data) {
  try {
    return await Job.create(data);
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}


async function updateJobById(id, data) {
  try {
    return await Job.findByIdAndUpdate(id, data, { new: true });
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}


async function deleteJobById(id) {
  try {
    return await Job.findByIdAndDelete(id);
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}


module.exports = {
  getAllJobs,
  getJobById,
  getJobs,
  createJob,
  updateJobById,
  deleteJobById
}