const multer = require('multer');

async function uploadResume(id) {
  try {
    // Set up storage configuration for multer
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/');
      },
      filename: (req, file, cb) => {
        const uniqueFilename = `${id}-${file.originalname}`;
        cb(null, uniqueFilename);
      }
    });
    const upload = multer({ storage });
    const uploadFile = upload.single('file');
  } catch (err) {
    throw new Error(err)
  }
}