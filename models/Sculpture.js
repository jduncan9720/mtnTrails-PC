const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Sculpture extends Model { }

Sculpture.init(
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
        sculpture_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sculpture_height: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true,
            }
        },
        sculpture_width: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true,
            }
        },
        sculpture_depth: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true,
            }
        },
        sculpture_price: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true,
            }
        },
        sculpture_filename: {
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
        sculpture_location: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'sculpture',
    }

);

module.exports = Sculpture;