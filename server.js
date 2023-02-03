const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();

// set storage engine for multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({
  storage: storage
});

// route for file upload
app.post('/upload', upload.single('file'), function(req, res, next) {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }

  // here you can save the file to a database or perform any other operation with the uploaded file
  console.log(file.filename + " uploaded successfully");
  res.send(file);
});

const port = 3000;
app.listen(port, function() {
  console.log("Server is running on port: " + port);
});
