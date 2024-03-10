const FileLink = require('../models/FileLink');

const fileLinkController = {
    createFileLink: async (req, res) => {
        try {
            const { link } = req.body;
            const newFileLink = new FileLink({ link });
            await newFileLink.save();
            res.status(201).json(newFileLink);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = fileLinkController;