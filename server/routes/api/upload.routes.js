const multer = require('multer');
const router = require("express").Router()

// Set up storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'models', 'uploads'));
    },
    filename: (req, file, cb) => {
    const uniqueFilename = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueFilename);
    }
});

const upload = multer({ storage });

// Route for file upload
router.post('./uploads', upload.single('file'), (req, res) => {
    res.json({ message: 'File uploaded successfully!', filePath: req.file.path });
    console.log(res)
});

module.exports = router;