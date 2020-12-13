const { Painting } = require('../models');

const paintingData = [
    {
        painting_name: 'Troy 1',
        painting_height: 30.00,
        painting_width: 40.00,
        painting_price: 14000.00,
        artist_id: 1
    },
    {
        painting_name: 'Troy 2',
        painting_height: 32.25,
        painting_width: 44.75,
        painting_price: 15000.00,
        artist_id: 1
    },
    {
        painting_name: 'Simon 1',
        painting_height: 20.00,
        painting_width: 24.00,
        painting_price: 8000.00,
        artist_id: 2
    },
    {
        painting_name: 'Simon 2',
        painting_height: 22.00,
        painting_width: 30.50,
        painting_price: 10000.00,
        artist_id: 2
    },
    {
        painting_name: 'Mark 1',
        painting_height: 12.00,
        painting_width: 16.00,
        painting_price: 3000.00,
        artist_id: 3
    },
    {
        painting_name: 'Mark 2',
        painting_height: 60.00,
        painting_width: 40.00,
        painting_price: 20000.00,
        artist_id: 3
    },
];

const seedPaintings = () => Painting.bulkCreate(paintingData);

module.exports = seedPaintings;