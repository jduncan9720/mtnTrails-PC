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