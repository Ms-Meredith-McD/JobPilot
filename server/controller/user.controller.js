const User = require("../models/User");
const bcrypt = require("bcrypt");


async function getUserById(id) {
  try {
    const foundUser = await User.findById(id).populate('jobs').lean();
    // console.log(foundUser);
    const { password, ...newUser } = foundUser;
    return newUser;
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}


async function createUser(data) {
  const hash = await bcrypt.hash(data.password, 10)
  const userData = { ...data, password: hash }
  try {
    return await User.create(userData);
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}


async function updateUserById(id, data) {
  try {
    return await User.findByIdAndUpdate(id, data, { new: true });
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}

async function updateUserDeleteJob(id, jobId, data) {
  try {
    const thisUser = await User.findByIdAndUpdate(id, data, { new: true });
    console.log('thisUser.jobs', thisUser.jobs[0].toString() === jobId);
    const newJobsArr = thisUser.jobs.map(job => {
      job.toString != jobId
    });
    thisUser.jobs = newJobsArr;
    return thisUser;
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}

async function getAllUsers() {
  try {
    return await User.find({});
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}


async function deleteUserById(id) {
  try {
    return await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err.message)
    throw new Error(err)
  }
}


async function handleLogin(email, pw) {
  let foundUser

  foundUser = await User.findOne({ email: email }).lean()
  if (!foundUser) {
    console.log("couldn't validate email address")
    throw new Error("No user found")
  }

  let isVerified = false
  isVerified = await bcrypt.compare(pw, foundUser.password)
  if (!isVerified) {
    console.log("couldn't validate password")
    throw new Error("Password failed")
  }
  // console.log('foundUser: ', foundUser)
  const { password, ...modifiedUser } = foundUser;
  // console.log('modifiedUser: ', modifiedUser);
  return modifiedUser
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  updateUserDeleteJob,
  deleteUserById,
  handleLogin
}