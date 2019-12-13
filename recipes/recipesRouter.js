const express = require("express");

const router = express.Router();

const db = require("../db-config.js");

const recipes = require("./recipes-model");

// Get All Recipes
router.get("/", (req, res) => {
  recipes.getAll().then(recipess => res.status(200).json(recipess));
});

// Get one Recipes
router.get("/:id", (req, res) => {
  recipes
    .findById(req.params.id)
    .then(recipe => {
      //   console / log(req.params.id);
      if (recipe) {
        res.status(200).json(recipe);
      } else
        res.status(404).json({
          message: "no recipe with this id"
        });
    })
    .catch(error => {
      res.status(500).json({
        errormessage: "error getting recipe"
      });
    });
});

// router.get("/:id/ingredient", (req, res) => {
//   recipes.getAllIngredient().then(ingredient => {
//     res.status(200).json(ingredient);
//   });
// });

router.post("/", (req, res) => {
  recipes
    .addrecipe(req.body)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(error => {
      res.status(500).json({
        errormessage: "error adding recipe"
      });
    });
});

router.post("/:id/ingredient", (req, res) => {
  recipes
    .addingredient(req.body, req.params.id)
    .then(ingredientid => {
      recipes.addqun(ingredientid, req.body, req.params).then(data => {
        res.status(200).json(data);
      });
    })
    .catch(error => {
      res.status(500).json({
        errormessage: "error adding recipe"
      });
    });
});

router.post("/:id/steps", (req, res) => {
  recipes.addSteps(req.body).then(steps => {
    res.status(200).json(steps);
  });
});

router.get("/:id/ingredient", (req, res) => {
  console.log("wfewef");
  recipes.getingredient(req.params.id).then(inteer => {
    res.status(200).json(inteer);
  });
});

router.get("/:id/steps", (req, res) => {
  recipes.getAllSteps(req.params.id).then(steps => {
    res.status(200).json(steps);
  });
});
module.exports = router;
