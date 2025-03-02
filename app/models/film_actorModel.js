'use strict'

const {DataTypes}= require('sequelize');

module.exports=(sequelize)=>{
    const attributes ={
        actor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        film_id:{
            type:DataTypes.INTEGER,
            primaryKey: true
        }
    }
    const options={
        defaultScope: {
            attributes:{ exclude: ['last_update']}
        },
        scopes:{},
        tableName: 'film_actor',
        timestamps: false
    }
    return sequelize.define('film_actor', attributes, options);

};