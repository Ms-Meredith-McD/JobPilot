const Tracker = require("../Models/Tracker");


async function getTrackerById(id){
  try {
    return await Tracker.findById(id);
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


async function createTracker(data){
  try {
    return await Tracker.create(data);
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


async function updateTrackerById(id, data){
  try {
    return await Tracker.findByIdAndUpdate(id, data, { new: true });
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


async function deleteTrackerById(id){
  try {
    return await Tracker.findByIdAndDelete(id);
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


module.exports = {
  getTrackerById,
  createTracker,
  updateTrackerById,
  deleteTrackerById
}