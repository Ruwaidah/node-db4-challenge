const db = require("../db-config");

module.exports = {
  getAll,
  findById,
  addrecipe,
  getAllIngredient,
  addingredient,
  addSteps,
  getAllSteps,
  addqun,
  getingredient
};

function getAll() {
  return db("recipes");
}

function findById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function addrecipe(data) {
  return db("recipes")
    .insert({ recipe_name: data.recipe_name })
    .then(ids =>
      db("ingredient").insert({ ingredient_name: data.ingredient_name })
    );
}

function addingredient(data) {
  return db("ingredient").insert(data);
}

function addingredient(data, id) {
  return db("ingredient").insert({ ingredient_name: data.ingredient_name });
}

function addqun(ingid, data, recid) {
  console.log(recid);
  return db("ingredient_recipe").insert({
    recipe_id: recid.id,
    ingredient_id: ingid[0],
    quantity: data.quantity
  });
}

function getAllIngredient() {
  return db("ingredient");
}

function addSteps(data) {
  return db("steps").insert(data);
}

function getAllSteps(id) {
  console.log(id);
  return db("steps").where({ recipe_id: id });
}

function getingredient(id) {
  console.log(id);
  return db("ingredient_recipe")
    .select("recipe_name", "ingredient_name", "quantity")
    .join("recipes", "recipe_id", "recipes.id")
    .join("ingredient", "ingredient_id", "ingredient.id")
    .where({ recipe_id: id });
}
