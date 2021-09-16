
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dogs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {dog_id: 1, dog_name: 'Calvin', dog_age: 5},
        {dog_id: 2, dog_name: 'Max', dog_age: 4},
        {dog_id: 3, dog_name: 'Buck', dog_age: 7},
        {dog_id: 4, dog_name: 'Jordan', dog_age: 2},
        {dog_id: 5, dog_name: 'Fighto', dog_age: 1},
        {dog_id: 6, dog_name: 'Dog name Im not creative', dog_age: 8}
      ]);
    });
};
