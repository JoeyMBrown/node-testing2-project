const db = require('../../data/db-config.js');

function find() {
    return db('dogs')
        .select('*')
}

module.exports = {
    find
}