const db = require('../../data/db-config.js');

function find() {
    return db('dogs')
}

function findById(id) {
    return db('dogs').where('dog_id', id).first()
}

function addDog(dog) {
    const [id] = db('dogs').insert(dog)

    return findById(id)
}

function deleteDog(id) {
    return db('dogs').where('dog_id', id).del()
}



module.exports = {
    find,
    findById,
    addDog,
    deleteDog
}