const express = require ("express");
const burger = require ('../models/burger');

var router = express.Router();

// Routing Functionality

router.get("/", function(req, res) {
    cat.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("api/burgers", function(req, res) {
    burger.create{[
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId});
    }};
});

router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    cat.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
    
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    cat.delete(condition, function(result) {
        if(result.affectedRows == 0) {

            return res.status(404).end();
        }   else {
            res.status(200).end();
        }
    });
});

// Export controller module
module.exports = router;

