const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const multer  = require('multer');
const multers3 = require('multer-s3');

// Enter copied or downloaded access ID and secret key here
const ID = 'AKIAJXPH3N6A4O5A3N3A';
const SECRET = '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';


// The name of the bucket that you have created
const BUCKET_NAME = 'mtgartworkbucket';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

// const uploadFile = (file) => {

//     const params = {
//         Bucket: BUCKET_NAME,
//         Key: file.originalname,
//         Body: file.path
//     };

// return s3.upload(params, function(err,data) {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
//     console.log(`File uploaded successfully. ${data.Location}`);
// })
// }

const uploadFile = multer({
    storage: multers3({
      s3: s3,
      acl: 'public-read',
      bucket: BUCKET_NAME,
      metadata: (req, file, cb) => {
        cb(null, {fieldName: file.fieldname})
      },
      key: (req, file, cb) => {
        cb(null, Date.now().toString() + '-' + file.originalname)
      }
    })
  });

//   app.post('/', uploadFile.single('painting_filename'),(req, res) => {
//     console.log(req.file);
//   });

module.exports = uploadFile;