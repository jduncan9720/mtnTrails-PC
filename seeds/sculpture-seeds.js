const { Sculpture } = require('../models');

const sculptureData = [
    {
        sculpture_name: 'Bryce 1',
        sculpture_height: 12.00,
        sculpture_width: 14.00,
        sculpture_depth: 7.00,
        sculpture_price: 5000.00,
        sculpture_filename: "bryce1.jpg",
        artist_id: 4,
        sculpture_location: "https://mtgartworkbucket.s3.amazonaws.com/1608488118301-Stoic.jpg"
    },
    {
        sculpture_name: 'Bryce 2',
        sculpture_height: 20.00,
        sculpture_width: 12.00,
        sculpture_depth: 10.00,
        sculpture_price: 9000.00,
        sculpture_filename: "bryce2.jpg",
        artist_id: 4,
        sculpture_location: "https://mtgartworkbucket.s3.amazonaws.com/1608488118301-Stoic.jpg"
    },
    {
        sculpture_name: 'Walt 1',
        sculpture_height: 22.00,
        sculpture_width: 22.75,
        sculpture_depth: 10.25,
        sculpture_price: 11000.00,
        sculpture_filename: "walt1.jpg",
        artist_id: 5,
        sculpture_location: "https://mtgartworkbucket.s3.amazonaws.com/1608488118301-Stoic.jpg"
    },
    {
        sculpture_name: 'Walt 2',
        sculpture_height: 20.00,
        sculpture_width: 8.25,
        sculpture_depth: 8.75,
        sculpture_price: 7000.00,
        sculpture_filename: "walt2.jpg",
        artist_id: 5,
        sculpture_location: "https://mtgartworkbucket.s3.amazonaws.com/1608488118301-Stoic.jpg"
    },
    
];

const seedsculptures = () => Sculpture.bulkCreate(sculptureData);

module.exports = seedsculptures;