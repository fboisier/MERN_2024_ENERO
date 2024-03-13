const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get("/api/usuarios", UserController.getAllUsers);
    app.get("/api/usuarios/:id", UserController.getUserById);
    app.post('/api/usuarios', UserController.createUser);
    app.put('/api/usuarios/:id', UserController.updateUser);
    app.delete('/api/usuarios/:id', UserController.deleteUser);
}
