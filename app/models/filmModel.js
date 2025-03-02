'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const attributes = {
        film_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(128)
        },
        description: {
            type: DataTypes.TEXT
        },
        language_id: {
            type: DataTypes.TINYINT
        }
    };
    const options = {
        defaultScope: {
            attributes: { exclude: ['last_update', 'updatedAt', 'createdAt'] }
        },
        scopes: {},
        tableName: 'film',
        timestamps: false
    };
    return sequelize.define('film', attributes, options);
};