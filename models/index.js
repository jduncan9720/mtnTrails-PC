const Artist = require('./Artist');
const Painting = require('./Painting');
const Sculpture = require('./Sculpture')
const Other = require('./Other')

Painting.belongsTo(Artist);

Artist.hasMany(Painting, {
    foreignKey: 'artist_id',
    onDelete: 'CASCADE'
})

Sculpture.belongsTo(Artist);

Artist.hasMany(Sculpture, {
    foreignKey: 'artist_id',
    onDelete: 'CASCADE'
})

Other.belongsTo(Artist);

Artist.hasMany(Other, {
    foreignKey: 'artist_id',
    onDelete: 'CASCADE'
})

module.exports = {
    Artist,
    Painting,
    Sculpture,
    Other,
};