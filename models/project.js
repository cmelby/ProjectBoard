
var orm = require("../config/orm.js");

var project = {
    selectAll: function(cb) {
        orm.selectAll("tasks", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, val, cb) {
        orm.insertOne("tasks", cols, val, cb, function(res) {
            cb(res);
        });
    },
    update: function(objColVal, condition, cb) {
        orm.update("tasks", objColVal, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("tasks", condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions to the project.js
// to be used in our controller
module.exports = project;