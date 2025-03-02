'use strict'

const express= require('express');
const cors= require('cors');
const App = express();

//Llamado a las Rutas
const actorRoutes=require("./routes/actorRoute");
const filmRoute=require("./routes/filmRoute");
const film_actorRoute=require("./routes/film_actorRoute");

App.use(
    cors({
        origin: "*", // Reemplaza con el dominio correcto
    })
);

App.use(cors())
App.use(express.json({limit: '10mb'}));
App.use(express.urlencoded({extended: false}));

//Creacion de endpoints
App.use("/Api/actors", actorRoutes);
App.use("/Api/film", filmRoute);
App.use("/Api/film_actor", film_actorRoute);

module.exports= App;

