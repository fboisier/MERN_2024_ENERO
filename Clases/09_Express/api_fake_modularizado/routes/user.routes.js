const UserController = require("../controllers/user.controller");

module.exports = (app) => {
    app.post('/api/v1/user/new', UserController.createUser);
}