const { Job, Tracker, User } = require("../models");

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
    const jobs = await Job.find({ user: id }).lean();
    return jobs;
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}

async function createJob(data) {
  try {
    let newJob = await Job.create(data)
    const newTracker = await Tracker.create({ job: newJob._id })
    // reference the newJob add to it tracker: newTracker._id 
    newJob = await Job.findByIdAndUpdate(newJob._id, { tracker: newTracker._id });

    await User.findByIdAndUpdate(data.user, { $push: { jobs: newJob._id } });
    return { newJob, newTracker }
    // return await Job.create(data);
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
    const job = await Job.findById(id);

    if (!job) {
      throw new Error("Job not found");
    }

    // Delete the associated tracker
    await Tracker.findOneAndDelete({ _id: job.tracker });

    // Remove the job reference from the user's job list
    await User.findByIdAndUpdate(job.user, { $pull: { jobs: job._id } });

    // Delete the job
    return await Job.findByIdAndDelete(id);
  } catch (err) {
    console.log(err.message);
    throw new Error(err);
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