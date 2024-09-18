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
  const hash = await bcrypt.hash(data.password, 10);
  const userData = { ...data, password: hash };
  try {
    const createdUser = await User.create(userData);

    // Use .toObject() to convert the Mongoose document to a plain JS object
    const userObj = createdUser.toObject();

    // Destructure to remove the password from the returned object
    const { password, ...newUser } = userObj;

    return newUser; // Return the user object without the password
  } catch (err) {
    console.log(err.message);
    throw new Error(err);
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
  deleteUserById,
  handleLogin
}