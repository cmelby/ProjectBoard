var connection = require("../config/connection.js");


//creating helper function:
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
      var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

//Creating object for sql statement functions.....
var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function(table, col, val, cb) {
        var queryString = "INERT INTO " + table;

        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUEs (";
        queryString += printQuestionMarks(val.length);
        queryString += ") ";

        console.log(queryString)

        connection.query(queryString, val, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    update: function(table, objColVal, condition, cb) {
        var queryString ="UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVal);
        queryString += " WHERE ";
        queryString += condition;

        console.log(querString);
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    delete: function (table, condition, cd) {
        var queryString = " DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cd(res);
        });
    }

};


//Export orm to model project.js
module.exports = orm;