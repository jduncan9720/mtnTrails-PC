const { Painting } = require('../models');

const paintingData = [
    {
        art_type: "painting",
        painting_name: 'Stoic',
        painting_height: 30.00,
        painting_width: 40.00,
        painting_price: 14000.00,
        painting_filename: "1609620042786-Stoic.jpg",
        artist_id: 1,
        painting_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609620042786-Stoic.jpg"
    },
    {
        art_type: "painting",
        painting_name: 'A Pathway to Wonder',
        painting_height: 32.25,
        painting_width: 44.75,
        painting_price: 15000.00,
        painting_filename: "1609532572575-A Pathway to Wonder.jpg",
        artist_id: 1,
        painting_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609532572575-A%20Pathway%20to%20Wonder.jpg"
    },
    {
        art_type: "painting",
        painting_name: 'Knowing',
        painting_height: 20.00,
        painting_width: 24.00,
        painting_price: 8000.00,
        painting_filename: "1609532616999-Knowing.jpg",
        artist_id: 1,
        painting_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609532616999-Knowing.jpg"
    },
    {
        art_type: "painting",
        painting_name: 'Criss Cross',
        painting_height: 22.00,
        painting_width: 30.50,
        painting_price: 10000.00,
        painting_filename: "1609532639613-Crisscross-24x30.jpeg",
        artist_id: 2,
        painting_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609532639613-Crisscross-24x30.jpeg"
    },
    {
        art_type: "painting",
        painting_name: 'Two Sentinels',
        painting_height: 22.00,
        painting_width: 30.50,
        painting_price: 10000.00,
        painting_filename: "1609532670506-Two-Sentinels-12x16.jpg",
        artist_id: 2,
        painting_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609532670506-Two-Sentinels-12x16.jpg"
    },
    {
        art_type: "painting",
        painting_name: 'Fall Harvest',
        painting_height: 22.00,
        painting_width: 30.50,
        painting_price: 10000.00,
        painting_filename: "1609532764570-Fall-Harvest-36x48.jpg",
        artist_id: 2,
        painting_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609532764570-Fall-Harvest-36x48.jpg"
    },
    {
        art_type: "painting",
        painting_name: 'Red Butte',
        painting_height: 12.00,
        painting_width: 16.00,
        painting_price: 3000.00,
        painting_filename: "1609533061560-Red-Butte-40x30.jpg",
        artist_id: 3,
        painting_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609533061560-Red-Butte-40x30.jpg"
    },
    {
        art_type: "painting",
        painting_name: 'Crow Lodge',
        painting_height: 60.00,
        painting_width: 40.00,
        painting_price: 20000.00,
        painting_filename: "1609533100561-Crow-Lodge-26x22.jpg",
        artist_id: 3,
        painting_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609533100561-Crow-Lodge-26x22.jpg"
    },
    {
        art_type: "painting",
        painting_name: 'Bison Skull Lodge',
        painting_height: 60.00,
        painting_width: 40.00,
        painting_price: 20000.00,
        painting_filename: "1609533134690-Bison-Skull-Lodge-36x36.jpg",
        artist_id: 3,
        painting_location: "https://mtgartworkbucket.s3.us-east-2.amazonaws.com/1609533134690-Bison-Skull-Lodge-36x36.jpg"
    },
];

const seedPaintings = () => Painting.bulkCreate(paintingData);

module.exports = seedPaintings;