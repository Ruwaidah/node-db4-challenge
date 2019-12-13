exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          step_number: 1,
          instructions: "neiosbwfpoiewffwfwe",
          recipe_id: 2
        },
        {
          step_number: 1,
          instructions: "neio2e121sbwfpoiewffwfwe",
          recipe_id: 2
        }
      ]);
    });
};
