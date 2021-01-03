const { Model, DataTyes, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Other extends Model { }

Other.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        art_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        other_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        other_height: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true,
            }
        },
        other_width: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true,
            }
        },
        other_depth: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true,
            }
        },
        other_price: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true,
            }
        },
        other_filename: {
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
        other_location: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'other',
    }
);

module.exports = Other;