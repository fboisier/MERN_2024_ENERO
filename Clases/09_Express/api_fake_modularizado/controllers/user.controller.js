const Usuario = require("../models/user.model");

const createUser = (req, res) => {
    const newUser = new Usuario();
    console.log(newUser);
    res.json( { newUser: newUser } );
}

module.exports = {
    createUser
}