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

async function deleteDog(id) {
    const dog = await findById(id)
    await db('dogs').where('dog_id', id).del()
    return dog
}

module.exports = {
    find,
    findById,
    addDog,
    deleteDog
}