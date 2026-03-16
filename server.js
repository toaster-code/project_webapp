const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;
const mediaFolderPath = './views'; // Replace with the path to your media folder

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: mediaFolderPath,
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } });

// Serve the HTML page with the file upload form
app.get('/', (req, res) => {
  const uploadForm = `
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="mp3File" accept=".mp3" required>
      <button type="submit">Upload MP3</button>
    </form>
  `;

  // Send the HTML with the file upload form to the client
  res.send(uploadForm);
});

// Endpoint for handling file uploads
app.post('/upload', upload.single('mp3File'), (req, res) => {
  // File has been uploaded successfully
  res.send('File uploaded successfully!');
});

// Start the server
app.listen(port, () => {
  console.log('Server is running on port http://localhost:' + port);
});
