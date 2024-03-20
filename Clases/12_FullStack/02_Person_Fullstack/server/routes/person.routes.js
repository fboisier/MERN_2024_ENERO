const express = require("express");

const PersonController = require("../controllers/person.controller");

const PersonRouter = express.Router();

//API/PERSON/
PersonRouter.post("/", PersonController.createNewPerson);
PersonRouter.get("/", PersonController.getAllPersons);
PersonRouter.get("/:id", PersonController.getOnePersonById);


module.exports = PersonRouter;