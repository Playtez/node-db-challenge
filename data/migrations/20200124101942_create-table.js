exports.up = function(knex) {
  return (
    knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("project_name", 128).notNullable();
        tbl.string("description", 500);
        tbl.boolean("completed").defaultTo(false);
      })
      .createTable("resources", tbl => {
        tbl.increments();
        tbl
          .string("resource_name", 128)
          .notNullable()
          .unique();
        tbl.string("description", 500);
      })
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("task_description", 500).notNullable();
        tbl.string("notes", 500);
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(false);
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT") // what happens if the publisher with this id is deleted
          .onUpdate("CASCADE");
      })
      // foreign key table
      .createTable("project_resources", tbl => {
        tbl.increments();
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT") // what happens if the publisher with this id is deleted
          .onUpdate("CASCADE");
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT") // what happens if the publisher with this id is deleted
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropIfExists("project_resources")
    .dropIfExists("tasks")
    .dropIfExists("resources")
    .dropIfExists("projects");
};
