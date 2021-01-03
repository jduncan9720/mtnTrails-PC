const { Other } = require('../models');

const otherData = [
    {
        art_type: "other",
        other_name: 'Gathering Society Hide',
        other_height: 25.00,
        other_width: 35.25,
        other_depth: 1.00,
        other_price: 2200.00,
        other_filename: "1609706575909-gatheringsociety.jpg",
        artist_id: 6,
        other_location: "https://mtgartworkbucket.s3.amazonaws.com/1609706575909-gatheringsociety.jpg"
    },
    {
        art_type: "other",
        other_name: 'Many Horses Hide',
        other_height: 20.00,
        other_width: 30.00,
        other_depth: 1.00,
        other_price: 2200.00,
        other_filename: "1609706651075-manyhorses.jpg",
        artist_id: 6,
        other_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609706651075-manyhorses.jpg"
    },
    {
        art_type: "other",
        other_name: 'Deer Medicine Bag',
        other_height: 10.00,
        other_width: 8.00,
        other_depth: 2.25,
        other_price: 890.00,
        other_filename: "1609706695169-deermedicine.jpg",
        artist_id: 6,
        other_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609706695169-deermedicine.jpg"
    },
];

const seedOthers = () => Other.bulkCreate(otherData);

module.exports = seedOthers;