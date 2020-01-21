exports.up = function(knex) {
  // create a table called cars
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl.string('vin', 17).notNullable();

    tbl.string('make').notNullable();

    tbl.string('model').notNullable();

    tbl.integer('mileage').notNullable();

    tbl.string('transmission');
    tbl.string('status');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
