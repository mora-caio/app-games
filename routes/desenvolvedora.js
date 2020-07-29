const desenvolvedoraController = require('../controllers/desenvolvedoraController')();

module.exports = app => {
    //retornar todos os usuários
    app.route('/api/v1/desenvolvedoras').get(desenvolvedoraController.getDesenvolvedoras);
}