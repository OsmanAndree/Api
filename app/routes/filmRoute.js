'use strict'

const express = require("express");
const filmController =require("../controllers/filmController");
const apiRoutes = express.Router();

apiRoutes.get("/getFilm", async (req, res)=> await filmController.getFilm(req,res)).
post("/insertFilm", async (req, res)=> await filmController.insertFilm(req, res)).
put("/updateFilm/:film_id", async (req, res)=> await filmController.updateFilm(req, res)).
delete("/deleteFilm/:film_id", async (req, res)=> await filmController.deleteFilm(req, res));

module.exports = apiRoutes;