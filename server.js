const helmet = require("helmet");
const express = require("express");

const server = express();
// server.use(helmet());

server.use(express.json());

const recipesRouter = require("./recipes/recipesRouter.js");

server.get("/", (req, res) => {
  res.send("<h1>wwellcome</h1>");
});

server.use("/recipes", recipesRouter);
module.exports = server;
