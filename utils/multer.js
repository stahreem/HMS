// config/multerConfig.js
const multer = require('multer');

// Multer storage configuration
const storage = multer.memoryStorage();

// Multer configuration
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
  },
});

module.exports = upload;
