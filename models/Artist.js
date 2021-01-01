const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Artist extends Model { }

Artist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        artist_firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist_lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artist_painter: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        artist_sculptor: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        artist_other: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'artist'
    }
);

module.exports = Artist;