// where references to our outmoded ORM file once sat.
var express = require("express");

var router = express.Router();
// edit burger model to match sequelize
var db = require("../models/");


// get route, edited to match sequelize
router.get("/api/loadouts", function(req, res) {
  // replace old function with sequelize function
  db.Loadout.findAll()
  // use promise method to pass the burgers...
    .then(function(LoadoutData) {
      res.json(LoadoutData);
    });
});

router.post("/api/burgers", function(req, res) {
  // edited burger create to add in a burger_name
  db.Loadout.create({
    loadoutName: req.body.loadoutName,
    sport: req.body.sport,
    loadoutDescription: req.body.loadoutDescription,
  })
  // pass the result of our call
    .then(function(result) {
      // log the result to our terminal/bash window
      res.json({ 
        id: result.insertId,
        
      });
    });
});