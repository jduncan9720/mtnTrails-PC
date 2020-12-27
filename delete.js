const express = require('express');
const app = express();
const AWS = require('aws-sdk');

const ID = 'AKIAJXPH3N6A4O5A3N3A';
const SECRET = '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';

// The name of the bucket that you have created
const BUCKET_NAME = 'mtgartworkbucket';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const deleteFile = (path) => {
    var params = {
        Bucket: BUCKET_NAME,
        Key: path
    };

    s3.deleteObject(params, function (err, data) {
        if (!err) {
            console.log(data); // sucessfull response
            /*
            data = {}
            */
        } else {
            console.log(err); // an error ocurred
        }
    });
}

module.exports = deleteFile;

