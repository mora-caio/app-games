const devDAO = require("../DAO/desenvolvedorasDAO")();
const connectionFactory = require("../DAO/connectionFactory");
const request = require("request");
const config = require("config");

module.exports = () => {
    const controller = {};

    controller.getDesenvolvedoras = (req, res) => {
        var data = {};

        var conn = connectionFactory().connection();
        var desenvolvedorasDAO = new devDAO(conn, data);

        desenvolvedorasDAO.getDesenvolvedoras(function (err, results) {
            if (err) {
                console.log(err);
                res.send("Erro ao buscar desenvolvedoras!");
            } else {
                res.json(results);
            }
        });

    }
    return controller;
};