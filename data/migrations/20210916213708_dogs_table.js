
exports.up = function(knex) {
  return knex.schema
    .createTable('dogs', dogs => {
        dogs.increments('dog_id')
        dogs.string('dog_name', 32).notNullable()
        dogs.integer('dog_age').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('dogs')
};
