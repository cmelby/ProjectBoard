//Require dependancies......
var mysql = require("mysql");

//Instantiate connection....
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "project_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connectnig: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;