//Require dependancies......
var mysql = require("mysql");

//Instantiate connection....
var connection = mysql.createConnection({
    host: "nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "root",
    username: "koke3zgfd51zpiyu",
    password: "ejupc8wfnbhk1hsr",
    database: "tlp3hnevda0gi8q6"
});
connection.connect(function(err) {
    if (err) {
        console.error("error connectnig: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;