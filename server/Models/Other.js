const mongoose = require('mongoose');


const otherSchema = new mongoose.Schema({
    other: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        completed: { type: Boolean }

    }
    });


const Other = mongoose.model('Other', otherSchema);

module.exports = Other