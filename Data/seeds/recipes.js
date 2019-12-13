exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_name: "Rosemary-Roasted Chicken with Apples and Potatoes"
        },
        { recipe_name: "Crispy Chicken Carnitas" }
      ]);
    });
};
