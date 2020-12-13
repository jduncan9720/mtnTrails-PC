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
        sculpture_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sculpture_height: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: true,
            }
        },
        sculpture_width: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: true,
            }
        },
        sculpture_depth: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: true,
            }
        },
        sculpture_price: {
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
        modelName: 'sculpture',
    }

);

module.exports = Sculpture;