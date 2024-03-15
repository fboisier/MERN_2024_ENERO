const express = require("express");

const { 
    createNewUser,
    getAllUsers,
    getOneUserById,
    updateOneUserById,
    deleteOneUserById,
    deleteAllUsers
} = require("../controllers/user.controller");

const UserRouter = express.Router();

//API/USERS/
UserRouter.get("/", getAllUsers);
UserRouter.get("/:id", getOneUserById);
UserRouter.post("/", createNewUser);
UserRouter.put("/:id", updateOneUserById);
UserRouter.delete("/:id", deleteOneUserById);
UserRouter.delete("/", deleteAllUsers);

module.exports = UserRouter;