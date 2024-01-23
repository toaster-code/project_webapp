const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 3000;
const app = express();
const mediaFolderPath = 'C:/Users/fabio/Music'; // Replace with the path to your media folder

// Serve media files from the mounted NAS share
app.use('/media', express.static(mediaFolderPath));


// Endpoint to get the list of files
app.get('/files', (req, res) => {
    // Read the contents of the media folder
    fs.readdir(mediaFolderPath, (err, files) => {
      if (err) {
        console.error('Error reading media folder:', err);
        return res.status(500).send('Internal Server Error');
      }

      // Filter out directories (you may adjust this based on your needs)
      const fileList = files.filter(file => !fs.statSync(path.join(mediaFolderPath, file)).isDirectory());

      // Send the list of files to the client
      res.json({ files: fileList });
    });
  });

// ... other routes and middleware

// Start the server
app.listen(port, () => {
    console.log(`Server listening at the http://localhost:${port}`);
});
