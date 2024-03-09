const express = require('express');
const router = express.Router();
const fileLinkController = require('../controllers/fileLinkController');

router.post('/fileLinks', fileLinkController.createFileLink);

module.exports = router;