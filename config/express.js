const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const consign = require("consign");
const mysql = require("mysql");
const connectionFactory = require("../DAO/connectionFactory")();

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());

  //CONECTANDO BANCO DE DADOS
  connectionFactory.connection().connect(function (err) {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Connect ! in: " + config.get("db.database"));
    }
  });

  //ENDPOINT
  consign()
  .then('controllers')
  .then('services')
  .then('routes')
  .into(app)

  return app;
};