'use strict'

const db = require('../config/db');
const film_actor = db.film_actor;

async function getFilmActor(req, res){
film_actor.findAll()
.then(result=>{
res.status(200).send({result})
}).catch(error=> {
    res.status(500).send({message:error.message || "Sucedió un errror inesperado"}) 
});
}

const insertFilmActor = async (req, res) => {
    try {
        const newFilmActor = await film_actor.create(req.body); 
        res.status(201).json({ message: 'FilmActor guardado exitosamente', data: newFilmActor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const updateFilmActor = async (req, res) => {
    try {
        const { film_id, actor_id } = req.params;
        const filmActorData = req.body;

        const filmActorToUpdate = await film_actor.findOne({ where: { film_id, actor_id } });
        if (filmActorToUpdate) {
            await filmActorToUpdate.update(filmActorData);
            res.status(200).json({ message: 'FilmActor actualizado exitosamente', data: filmActorToUpdate });
        } else {
            res.status(404).json({ error: 'FilmActor no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

const deleteFilmActor = async (req, res) => {
    try {
        const { film_id, actor_id } = req.params;

        const filmActorToDelete = await film_actor.findOne({ where: { film_id, actor_id } });
        if (filmActorToDelete) {
            await filmActorToDelete.destroy();
            res.status(200).json({ message: 'FilmActor eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'FilmActor no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports={
    getFilmActor,
    insertFilmActor,
    updateFilmActor,
    deleteFilmActor
}
