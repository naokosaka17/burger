var express = require("express");
var burgers = require("../models/burger.js");
var router = express.Router();

router.get('/', function(req, res) {
	burgers.all(function(err, data) {
		if(err) throw err;
			
		console.log(err, data);

		res.render('index', {
			burgers: data
		})
	})
})

router.post('/:id', function(req, res) {
	burgers.create(["burger_name","devoured","date"], [req.body.burger_name,req.devoured,req.date], 
		function(err, results) {
			res.redirect('/');
		})
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

	burgers.update({
	devoured: req.body.devoured}, 
    	condition, function() {
    		res.redirect("/");
  		});
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;



