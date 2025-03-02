'use strict'

const express = require("express");
const film_actorController =require("../controllers/film-actorController");
const apiRoutes = express.Router();

apiRoutes.get("/getFilmActor", async (req, res)=> await film_actorController.getFilmActor(req,res)).
post("/insertFilmActor", async (req, res)=> await film_actorController.insertFilmActor(req, res)).
put("/updateFilmActor/:film_id/:actor_id", async (req, res)=> await film_actorController.updateFilmActor(req, res)).
delete("/deleteFilmActor/:film_id/:actor_id", async (req, res)=> await film_actorController.deleteFilmActor(req, res));

module.exports = apiRoutes;