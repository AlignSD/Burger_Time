const express = require ("express");
var router = express.Router();

const burger = require ('../models/burger.js');

// Routing Functionality
router.get("/", function (req, res) {
    burger.all( (data) => {
        let burgerHBSObj = {
            burgers: data
        }
        console.log("burgerHBSObj: ", burgerHBSObj);
        res.render("index", burgerHBSObj);
    });
});

router.post('/api/burgers', (req,res)=>{
    burger.add(req.body.name, (result) => {
        res.json({id: result.burgerID});
    });
});

router.put("/api/burgers/:id", function (request, response) {
    var devoured = req.params.id;
    console.log('devoured :', devoured);

    burger.update(devoured, function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      })
});

// Export controller module
module.exports = router;

