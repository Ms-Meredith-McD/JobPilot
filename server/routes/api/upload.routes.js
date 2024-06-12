const multer = require('multer');
const router = require("express").Router()

// Set up storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueFilename = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueFilename);
    }
});

const upload = multer({ storage });
const uploadFile = upload.single('file');

// Route for file upload
router.post('/', uploadFile, async (req, res) => {
    (req, res, function (err) {
        if (err) {
            res.status(400).send({ message: err.message });
        }

        res.status(200).send({
            message: 'File uploaded successfully',
            file: `/${req.file.path}`
        });
    });
    res.json({ message: 'File uploaded successfully!', filePath: req.file.path });
    console.log(res)
});

module.exports = router;