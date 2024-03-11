const Other = require("../models/Other");

async function updateOtherById(id, data) {
    try {
        return await Other.findByIdAndUpdate(id, data, { new: true });
    } catch (err) {
        console.log(err.message)
        throw new Error(err)
    }
}


module.exports = {

    updateOtherById,

}