exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars') // <<<<<<<<<<<<<<<<<<<<<<change this
    .truncate() // resets the id primary key
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        // <<<<<< change table name here
        {
          vin: 23434,
          make: '',
          model: '',
          mileage: 3434,
          transmission: 'dfsdf',
          status: 'dfsdf'
        }
      ]);
    });
};
