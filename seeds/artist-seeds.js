const { Artist } = require('../models');

const artistData = [
    {
        artist_firstName: 'Troy',
        artist_lastName: 'Collins',
    },
    {
        artist_firstName: 'Simon',
        artist_lastName: 'Winegar',
    },
    {
        artist_firstName: 'Mark',
        artist_lastName: 'Gibson',
    },
    {
        artist_firstName: 'Bryce',
        artist_lastName: 'Pettit',
    },
    {
        artist_firstName: 'Walt',
        artist_lastName: 'Horton',
    },
];

const seedCategories = () => Artist.bulkCreate(artistData);

module.exports = seedCategories;