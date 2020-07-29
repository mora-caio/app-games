const config = require("config");
const mysql = require("mysql");

function connect() {
    return mysql.createConnection(config.get("db"), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Database Connect !");
      }
    });
  }
  
  module.exports = function () {
    return connect();
  };