const mysql = require("mysql"); 

function devDAO(connection, data) {
    this._connection = connection;
    this.data = data; 
}

devDAO.prototype.getDesenvolvedoras = function (callback) {
    var sql = "SELECT * FROM db_project_games.desenvolvedoras";
    this._connection.query(sql, callback);
  };

module.exports = function() {
    return devDAO;
};