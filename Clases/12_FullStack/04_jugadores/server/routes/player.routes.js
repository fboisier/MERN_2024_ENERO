const express = require("express");

const PlayerController = require("../controllers/player.controller");

const PlayerRouter = express.Router();

//api/player/
PlayerRouter.post("/", PlayerController.createNewPlayer);
PlayerRouter.get("/", PlayerController.getAllPlayers);
PlayerRouter.get("/:id", PlayerController.getOnePlayerById);
PlayerRouter.put("/:id", PlayerController.updateOnePlayerById);
PlayerRouter.patch("/:id/:game", PlayerController.updateGamesPlayerById);
PlayerRouter.delete("/:id", PlayerController.deleteOnePlayerById);


module.exports = PlayerRouter;