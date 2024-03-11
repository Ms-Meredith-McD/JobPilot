const mongoose = require('mongoose');

//Validates email format
const emailValidation = function(email) {
  const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  return regex.test(email)
}

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true,  trim: true},
  password: { type: String, unique: true, required: true},
  email: { type: String, required: true, unique: true, validate: [emailValidation, "Please use a valid email address"]},
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job'}],
});


const User = mongoose.model('User', userSchema);

module.exports = User

//Credit to ramon22 on stackoverflow for the emailValidation function. Link: https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax