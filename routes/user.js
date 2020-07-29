const userController = require('../controllers/userController')();

module.exports = app => {
    //retornar todos os usuários
    app.route('/api/v1/user').get(userController.getUser);

    //criar um novo usuário
    app.route('/api/v1/user').post(userController.createUser);
}