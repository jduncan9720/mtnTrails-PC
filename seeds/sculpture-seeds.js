const { Sculpture } = require('../models');

const sculptureData = [
    {
        art_type: "sculpture",
        sculpture_name: 'Tall Tales',
        sculpture_height: 12.00,
        sculpture_width: 14.00,
        sculpture_depth: 7.00,
        sculpture_price: 5000.00,
        sculpture_filename: "1609533199754-Tall-Tails.jpg",
        artist_id: 4,
        sculpture_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609533199754-Tall-Tails.jpg"
    },
    {
        art_type: "sculpture",
        sculpture_name: 'Noble Heart',
        sculpture_height: 20.00,
        sculpture_width: 12.00,
        sculpture_depth: 10.00,
        sculpture_price: 9000.00,
        sculpture_filename: "1609533235734-noble-heart.jpg",
        artist_id: 4,
        sculpture_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609533235734-noble-heart.jpg"
    },
    {
        art_type: "sculpture",
        sculpture_name: 'Micestroni',
        sculpture_height: 22.00,
        sculpture_width: 22.75,
        sculpture_depth: 10.25,
        sculpture_price: 11000.00,
        sculpture_filename: "1609533276458-MiceEstroni.jpg",
        artist_id: 5,
        sculpture_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609533276458-MiceEstroni.jpg"
    },
    {
        art_type: "sculpture",
        sculpture_name: 'Truffles',
        sculpture_height: 20.00,
        sculpture_width: 8.25,
        sculpture_depth: 8.75,
        sculpture_price: 7000.00,
        sculpture_filename: "1609533319703-Truffles-16h.jpg",
        artist_id: 5,
        sculpture_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609533319703-Truffles-16h.jpg"
    },
    
];

const seedSculptures = () => Sculpture.bulkCreate(sculptureData);

module.exports = seedSculptures;