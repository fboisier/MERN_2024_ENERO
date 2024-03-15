const UserModel = require("../models/user.model");

module.exports = {
    getAllUsers: (req, res) => {
        UserModel.find()
            .populate("pets", "name type -_id")
            .then((allUsers) => res.json({ users: allUsers }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    getOneUserById: (req, res) => {
        UserModel.findOne({ _id: req.params.id })
            .then((oneSingleUser) => res.json({ user: oneSingleUser }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    createNewUser: (req, res) => {
        UserModel.create(req.body)
            .then((newlyCreatedUser) => res.json({ user: newlyCreatedUser }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    updateOneUserById: (req, res) => {
        UserModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) // { new: true } -> returns updated document instead of original
            .then((updatedUser) => res.json({ user: updatedUser }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    deleteOneUserById: (req, res) => {
        UserModel.deleteOne({ _id: req.params.id })
            .then((result) => res.json({ result: result }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    deleteAllUsers: (req, res) => {
        UserModel.deleteMany({})
            .then((result) => res.json({ result: result }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
};
