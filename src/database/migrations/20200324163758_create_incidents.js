
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        //Primary key
        table.increments();

        //Fields
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        //Relationships
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    knex.schema.dropTable('incidents');
};
