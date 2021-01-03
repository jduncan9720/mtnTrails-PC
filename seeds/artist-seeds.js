const { Artist } = require('../models');

const artistData = [
    {
        artist_firstName: 'Troy',
        artist_lastName: 'Collins',
        artist_painter: 1,
        artist_sculptor: 0,
        artist_other: 0,
    },
    {
        artist_firstName: 'Simon',
        artist_lastName: 'Winegar',
        artist_painter: 1,
        artist_sculptor: 1,
        artist_other: 0,
    },
    {
        artist_firstName: 'Mark',
        artist_lastName: 'Gibson',
        artist_painter: 1,
        artist_sculptor: 0,
        artist_other: 0,
    },
    {
        artist_firstName: 'Bryce',
        artist_lastName: 'Pettit',
        artist_painter: 0,
        artist_sculptor: 1,
        artist_other: 0,
    },
    {
        artist_firstName: 'Walt',
        artist_lastName: 'Horton',
        artist_painter: 0,
        artist_sculptor: 1,
        artist_other: 0,
    },
    {
        artist_firstName: 'Gloria',
        artist_lastName: 'D',
        artist_painter: 0,
        artist_sculptor: 0,
        artist_other: 1,
    },
];

const seedCategories = () => Artist.bulkCreate(artistData);

module.exports = seedCategories;