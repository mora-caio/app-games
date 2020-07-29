const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const consign = require("consign");
const mysql = require("mysql");

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());

  //CONECTANDO BANCO DE DADOS
  mysql.createConnection(config.get("db"), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database Connect !");
    }
  })

  //ENDPOINT
  consign()
  .then('controllers')
  .then('services')
  .then('routes')
  .into(app)

  return app;
};