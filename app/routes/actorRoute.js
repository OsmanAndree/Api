'use strict'

const express= require("express");
const actorController=require("../controllers/actorController");
const apiRoutes= express.Router();

apiRoutes.get("/getActors", async (req, res)=> await actorController.getActors(req,res)).
post("/insertActors", async (req, res)=> await actorController.insertActors(req, res)).
put("/updateActors/:actor_id", async (req, res)=> await actorController.updateActors(req, res)).
delete("/deleteActors/:actor_id", async (req, res)=> await actorController.deleteActors(req, res));

module.exports=apiRoutes;