const { PersonModel } = require("../models/person.model");

module.exports = {

    getAllPersons: (req, res) => {
        PersonModel.find()
            .then((allPersons) => res.status(200).json({ persons: allPersons }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    getOnePersonById: (req, res) => {
        PersonModel.findOne({ _id: req.params.id })
            .then((oneSinglePerson) => res.status(200).json({ person: oneSinglePerson }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },

    createNewPerson: (req, res) => {
        PersonModel.create(req.body)
            .then((newlyCreatedPerson) => res.status(201).json({ person: newlyCreatedPerson }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    updateOnePersonById: (req, res) => {
        PersonModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then((updatedPerson) => res.status(200).json({ person: updatedPerson }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    deleteOnePersonById: (req, res) => {
        PersonModel.deleteOne({ _id: req.params.id })
            .then((result) => res.status(200).json({ result: result }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
}