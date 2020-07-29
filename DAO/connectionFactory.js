const config = require("config");
const mysql = require("mysql");


module.exports = function () {

  const connectFactory = {}; 

  connectFactory.connection = () => {
    return mysql.createConnection(config.get("db"));
  };

  return connectFactory;
};


  
  