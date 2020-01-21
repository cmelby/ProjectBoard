// Require our orm to utilize in our model...
var orm = require("../config/orm.js");

// Our project obj calls on our pre built orm functions that operate on our 
// database side...
var project = {
selectAll: function(cb) {
    orm.selectAll("tasks", function(res) {
        cb(res);
    });
},
insertOne: function(col, val, cb) {
    orm.insertOne("tasks", col, val, cb, function(res) {
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