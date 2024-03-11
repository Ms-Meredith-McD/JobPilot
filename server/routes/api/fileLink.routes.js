const express = require('express');
const router = express.Router();
const fileLinkController = require('../../controller/filelink.controller');

router.post('/fileLinks', fileLinkController.createFileLink);

module.exports = router;