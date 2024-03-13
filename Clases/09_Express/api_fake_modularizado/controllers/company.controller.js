const Empresa = require("../models/company.model");

const createCompany = (req, res) => {
    const newCompany = new Empresa();
    console.log(newCompany);
    res.json( { newCompany: newCompany } );
}

module.exports = {
    createCompany
}