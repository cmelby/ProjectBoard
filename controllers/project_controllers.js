
var express = require("express")
var router = express.Router();

// Import model functions
var project = require("../models/project.js");


// Routes
router.get("/", function(req, res) {
    project.selectAll(function(data) {
        var hbsObject = {
            tasks: Data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/tasks", function(req, res) {
    project.insertOne([
        "task_name", "completed"
    ], [
        req.body.task_name, req.body.completed
    ],  function (results) {
        res.json({ id: results.insertId });
    });
});

router.put("/api/tasks/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

 project.update({
    completed: req.body.completed
}, condition, function(result) {
    if (result.changeRows == 0) {
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
  });
});


router.delete("/api/tasks/:id", function(req, res) {
    var condition = "id " + req.params.id;

    project.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export router to server.js
module.exports = router;