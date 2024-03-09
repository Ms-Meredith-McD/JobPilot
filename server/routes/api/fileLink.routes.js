const express = require('express');
const router = express.Router();
const fileLinkController = require('../../Controllers/filelink.controller');

router.post('/fileLinks', fileLinkController.createFileLink);

module.exports = router;