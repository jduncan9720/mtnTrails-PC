const fs = require('fs');
const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = 'AKIAJXPH3N6A4O5A3N3A';
const SECRET = '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';
const KEY = "Stoic.jpg"

// The name of the bucket that you have created
const BUCKET_NAME = 'mtgartworkbucket';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const uploadFile = (fileName) => {

    const fileContent = fs.readFileSync(fileName)

    const params = {
        Bucket: BUCKET_NAME,
        Key: KEY,
        Body: fileContent
    };

s3.upload(params, function(err,data) {
    if (err) {
        throw err;
    }
    console.log('File uploaded successfully. ${data.Location}');
})
}

uploadFile("/Users/joshuaduncan/Desktop/2. Mountain Trails Files/Troy Show 2020/Stoic.jpg")