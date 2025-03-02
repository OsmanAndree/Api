'use strict'

const {DataTypes}= require('sequelize');

module.exports=(sequelize)=>{
    const attributes ={
        actor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        first_name:{
            type:DataTypes.STRING(45)
        },
        last_name:{
            type:DataTypes.STRING(45)
        }
    }
    const options={
        defaultScope: {
            attributes:{ exclude: ['last_update', 'updatedAt', 'createdAt']}
        },
        scopes:{},
        tableName: 'actor',
        timestamps: false
    }
    return sequelize.define('actor', attributes, options);
}