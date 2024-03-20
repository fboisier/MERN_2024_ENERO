const express = require("express");

const PersonController = require("../controllers/person.controller");

const PersonRouter = express.Router();

//API/PERSON/
PersonRouter.get("/", PersonController.person_hello);

module.exports = PersonRouter;