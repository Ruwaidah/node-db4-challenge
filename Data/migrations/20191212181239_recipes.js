exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipe_name", 155).notNullable();
      //   tbl
      //     .integer("steps_id")
      //     .notNullable()
      //     .references("id")
      //     .inTable("steps");
    })

    .createTable("ingredient", tbl => {
      tbl.increments();
      tbl
        .string("ingredient_name", 100)
        .unique()
        .notNullable();
    })

    .createTable("steps", tbl => {
      tbl.increments();
      tbl.integer("step_number", 255).notNullable();
      tbl.text("instructions", 255).notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
    })

    .createTable("ingredient_recipe", tbl => {
      tbl.increments();
      tbl.string("quantity", 100);
      //   .notNullable();
      tbl
        .integer("recipe_id")
        // .notNullable()
        .unsigned()
        .references("id")
        .inTable("recipes");
      tbl
        .integer("ingredient_id")
        // .notNullable()
        .unsigned()
        .references("id")
        .inTable("ingredient");
    });
};

exports.down = function(knex) {};
