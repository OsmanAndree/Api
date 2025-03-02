'use strict'

const db = require('../config/db');
const film= db.film;

async function getFilm(req, res){
film.findAll()
.then(result=>{
res.status(200).send({result})
}).catch(error=> {
    res.status(500).send({message:error.message || "Sucedió un errror inesperado"})
});
}

const insertFilm = async (req, res) => {
    try {
        const newFilm = await film.create(req.body); 
        res.status(201).json({ message: 'Película guardada exitosamente', data: newFilm });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

const updateFilm = async (req, res) => {
    try {
        const { film_id } = req.params;
        const filmData = req.body;

        const filmToUpdate = await film.findByPk(film_id);
        if (filmToUpdate) {
            await filmToUpdate.update(filmData);
            res.status(200).json({ message: 'Película actualizada exitosamente', data: filmToUpdate });
        } else {
            res.status(404).json({ error: 'Película no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

const deleteFilm = async (req, res) => {
    try {
        const { film_id } = req.params;

        const filmToDelete = await film.findByPk(film_id);
        if (filmToDelete) {
            await db.film_actor.destroy({ where: { film_id } });

            await filmToDelete.destroy();
            res.status(200).json({ message: 'Película eliminada exitosamente' });
        } else {
            res.status(404).json({ error: 'Película no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports={
    getFilm,
    insertFilm,
    updateFilm,
    deleteFilm
}