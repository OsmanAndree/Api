'use strict'

const db = require('../config/db');
const  actor= db.actor;

async function getActors(req, res){
actor.findAll()
.then(result=>{
res.status(200).send({result})
}).catch(error=> {
    res.status(500).send({message:error.message || "sucedió un errror inesperado"})
});
}

const insertActors = async (req, res) => {
    try {
        const newActor = await actor.create(req.body); 
        res.status(201).json({ message: 'Actor guardado exitosamente', data: newActor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const updateActors = async (req, res) => {
    try {
        const { actor_id } = req.params;
        const actorData = req.body;

        const actorToUpdate = await actor.findByPk(actor_id);
        if (actorToUpdate) {
            await actorToUpdate.update(actorData);
            res.status(200).json({ message: 'Actor actualizado exitosamente', data: actorToUpdate });
        } else {
            res.status(404).json({ error: 'Actor no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const deleteActors = async (req, res) => {
    try {
        const { actor_id } = req.params;

        const actorToDelete = await actor.findByPk(actor_id);
        if (actorToDelete) {
            await db.film_actor.destroy({ where: { actor_id } });

            await actorToDelete.destroy();
            res.status(200).json({ message: 'Actor eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Actor no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports={
    getActors,
    insertActors,
    updateActors,
    deleteActors
}