const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Painting extends Model { }

Painting.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        art_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        painting_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        painting_height: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true,
            }
        },
        painting_width: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true,
            }
        },
        painting_price: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true,
            }
        },
        painting_filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'artist',
                key: 'id'
            }
        }, 
        painting_location: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'painting',
    }

);

module.exports = Painting;