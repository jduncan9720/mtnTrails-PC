const Artist = require('./Artist');
const Painting = require('./Painting');
const Sculpture = require('./Sculpture')

Painting.belongsTo(Artist);

Sculpture.belongsTo(Artist);

Artist.hasMany(Painting, {
    foreignKey: 'artist_id',
    onDelete: 'CASCADE'
})

module.exports = {
    Artist,
    Painting,
    Sculpture,
};