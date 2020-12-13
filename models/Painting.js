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
        painting_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        painting_height: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: true,
            }
        },
        painting_width: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: true,
            }
        },
        painting_price: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: true,
            }
        },
        artist_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'artist',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'paintings',
    }

);

module.exports = Painting;