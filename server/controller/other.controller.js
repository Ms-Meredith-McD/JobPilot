const Other = require("../models/Other");


async function getOtherById(id) {
    try {
        return await Other.findById(id);
    } catch (err) {
        console.log(err.message)
        throw new Error(err)
    }
}


async function createOther(data) {
    try {
        return await Other.create(data);
    } catch (err) {
        console.log(err.message)
        throw new Error(err)
    }
}


async function updateOtherById(id, data) {
    try {
        return await Other.findByIdAndUpdate(id, data, { new: true });
    } catch (err) {
        console.log(err.message)
        throw new Error(err)
    }
}


async function deleteOtherById(id) {
    try {
        return await Other.findByIdAndDelete(id);
    } catch (err) {
        console.log(err.message)
        throw new Error(err)
    }
}


module.exports = {
    getOtherById,
    createOther,
    updateOtherById,
    deleteOtherById
}