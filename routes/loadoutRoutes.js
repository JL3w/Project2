var db = require("../models");

module.exports = function(app) {
  app.get("/api/loadouts", function(req, res) {
    db.Loadout.findAll().then(function(dbLoadout) {
      res.json(dbLoadout);
    });
  });

  app.post("/api/loadouts", function(req, res) {
    db.Loadout.create({
      // comment: req.body.comment, 
      rating: req.body.rating
    }).then(function(dbLoadout) {
      res.json(dbLoadout);
    });
  });
};