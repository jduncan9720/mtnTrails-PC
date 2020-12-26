const express = require('express');

const deleteFile = (filename) => {
  var params = {
    Bucket: BUCKET_NAME,
    Key: filename
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

