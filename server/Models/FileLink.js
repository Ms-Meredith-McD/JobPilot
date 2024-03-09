const mongoose = require('mongoose');

const fileLinkSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    }
});

const FileLink = mongoose.model('FileLink', fileLinkSchema);

module.exports = FileLink;