const Note = require("../models/Notes");


async function getNoteById(id){
  try {
    return await Note.findById(id);
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


async function createNote(data){
  try {
    return await Note.create(data);
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


async function updateNoteById(id, data){
  try {
    return await Note.findByIdAndUpdate(id, data, { new: true });
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


async function deleteNoteById(id){
  try {
    return await Note.findByIdAndDelete(id);
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


module.exports = {
  getNoteById,
  createNote,
  updateNoteById,
  deleteNoteById
}