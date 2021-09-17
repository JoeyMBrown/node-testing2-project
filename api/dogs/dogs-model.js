const db = require('../../data/db-config.js');

function find() {
    return db('dogs')
}

function findById(id) {
    return db('dogs').where('dog_id', id).first()
}

async function addDog (dog) {
    const [id] = await db('dogs').insert(dog)

    return findById(id)
}

function deleteDog(id) {
    db('dogs').where('dog_id', id).del()
    return find()
}

module.exports = {
    find,
    findById,
    addDog,
    deleteDog
}