// ---------------------------------------------------
// CONTROLLER SETUP - Pet
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId

// 2) Importing Model
const PetModel = require("../models/pet.model");
const UserModel = require("../models/user.model");

// 3) Exporting Controller functions
module.exports = {
    // 2.1) READ METHODS
    findAllPets: (req, res) => {
        PetModel.find({})
            .populate("owner", "name age -_id")
            .then((allPets) => res.status(200).json(allPets))
            .catch((err) =>
                res.status(500).json({ message: "Something went wrong", error: err })
            );
    },
    findOnePetById: (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).json({ message: "UUID doesn't match the specified format" })
        PetModel.findOne({ _id: req.params.id })
            .populate("owner")
            .then((oneSinglePet) => {
                if (oneSinglePet) {
                    res.status(200).json(oneSinglePet);
                } else {
                    res.status(404).json({ message: "Pet not found" });
                }
            })
            .catch((err) =>
                res.status(500).json({ message: "Something went wrong", error: err })
            );
    },
    // 2.2) CREATE METHODS
    createNewPet: (req, res) => {
        let newPetCreated;
        PetModel.create(req.body)
            .then((newPet) => {
                newPetCreated = newPet; // Saving new pet in a variable
                return UserModel.findOneAndUpdate(
                    { _id: req.body.owner },
                    { $push: { pets: newPet._id } },
                    { new: true }
                );
            })
            .then((updatedUser) => PetModel.findOne({ _id: newPetCreated._id }).populate("owner"))
            .then((newPet) => res.status(201).json(newPet))
            .catch((err) =>
                res.status(500).json({ message: "Something went wrong", error: err })
            );
    },
    // 2.3) UPDATE METHODS
    updateOnePetById: (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).json({ message: "UUID doesn't match the specified format" })
        const updateOptions = {
            new: true, // Return the updated document
            runValidators: true, // Enforce validation during update
        };

        PetModel.findOneAndUpdate({ _id: req.params.id }, req.body, updateOptions)
            .populate("owner")
            .then((updatedPet) => {
                if (updatedPet) {
                    res.status(200).json(updatedPet);
                } else {
                    res.status(404).json({ message: "Pet not found" });
                }
            })
            .catch((err) =>
                res.status(500).json({ message: "Something went wrong", error: err })
            );
    },
    // 2.4) DELETE METHODS
    deleteAllPets: (req, res) => {
        PetModel.deleteMany({})
            .then((result) => res.status(200).json({ result: result }))
            .catch((err) =>
                res.status(500).json({ message: "Something went wrong", error: err })
            );
    },
    deleteOnePetById: (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).json({ message: "UUID doesn't match the specified format" })
        PetModel.deleteOne({ _id: req.params.id })
            .then((result) => {
                if (result.deletedCount === 0) {
                    res.status(404).json({ message: "Pet not found" });
                } else {
                    res.status(200).json({ result: result });
                }
            })
            .catch((err) =>
                res.status(500).json({ message: "Something went wrong", error: err })
            );
    },
};
