const userService = require('../services/user')
const request = require('request');
const config = require('config');

module.exports = () => {
    const controller = {}

    controller.getUser = (req, res) => {
        if(userService) {
            res.status(200).json(userService)
        } else {
            res.status(400).send("Usuário não encontrado");
        }
    }

    controller.createUser = (req, res) => {
        var retorno = []

        retorno["user"] = req.body; 

        console.log(retorno.user)

        res.send("usuário criado: " + (retorno.user));
    };

    return controller;
}