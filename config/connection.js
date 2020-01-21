//Require dependancies......
var mysql = require("mysql");

//Instantiate connection....
var connection = mysql.createConnection({
    host: "	l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "root",
    username: "s3meo6mynyeb3aj4",
    password: "esh0ml87i64tts75",
    database: "qdnukqk2x17t27la"
});
connection.connect(function(err) {
    if (err) {
        console.error("error connectnig: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;