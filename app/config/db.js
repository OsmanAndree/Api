'use strict'

const Sequelize =require('sequelize')
require('dotenv').config()

const sequelizeInstance = new Sequelize(

    process.env.DB, process.env.USER, process.env.
    PASSWORD, {
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        port: process.env.MY_SQL_PORT,
        dialectOption : {
            ConnectionTimeOut: 100000
        }, 
        pool:{
            max: parseInt(process.env.POOL_MAX),
            min: parseInt(process.env.POOL_MIN),
            acquire: parseInt(process.env.POOL_ACQUIRE),
            idle: parseInt(process.env.POOL_IDLE),
        }
    });

    const db={};
    db.Sequelize= Sequelize;
    db.sequelizeInstance= sequelizeInstance;

    db.actor= require('../models/actorModel')(sequelizeInstance, Sequelize);
    db.film= require('../models/filmModel')(sequelizeInstance, Sequelize);
    db.film_actor= require('../models/film_actorModel')(sequelizeInstance, Sequelize);

    module.exports=db;
    
