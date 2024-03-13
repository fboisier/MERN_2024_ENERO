const CompanyController = require("../controllers/company.controller");

module.exports = (app) => {
    app.post('/api/v1/company/new', CompanyController.createCompany);
}