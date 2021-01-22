require("dotenv").config
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const multer  = require('multer');
const multers3 = require('multer-s3');


const s3 = new AWS.S3({
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET
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
      bucket: process.env.BUCKET_NAME,
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