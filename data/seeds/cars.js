exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars') // <<<<<<<<<<<<<<<<<<<<<<change this
    .truncate() // resets the id primary key
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        // <<<<<< change table name here
        {
          vin: 'JM1DE1KY2E0172677',
          make: 'Honda',
          model: 'Civic',
          mileage: 148209,
          transmission: 'automatic',
          status: 'used'
        },
        {
          vin: '2FDJF37G4NCB57629',
          make: 'Chevrolet',
          model: 'Cruze',
          mileage: 23342,
          transmission: 'manual',
          status: 'clean'
        },
        {
          vin: '3N1CC11E19L284777',
          make: 'Toyota',
          model: 'Corolla',
          mileage: 0,
          transmission: 'automatic',
          status: 'new'
        },
        {
          vin: 'JKAVN2B16AA010274',
          make: 'Hyundai',
          model: 'Accent',
          mileage: 148209,
          transmission: 'manual',
          status: 'salvage'
        },
        {
          vin: 'JS2RF9A75C6103704',
          make: 'Dodge',
          model: 'Caravan',
          mileage: 48372,
          transmission: 'semi-automatic',
          status: 'clean'
        }
      ]);
    });
};
