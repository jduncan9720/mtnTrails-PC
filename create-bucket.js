const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = 'AKIAJXPH3N6A4O5A3N3A';
const SECRET = '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';

// The name of the bucket that you have created
const BUCKET_NAME = 'mtgartworkbucket';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "us-east-2"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});