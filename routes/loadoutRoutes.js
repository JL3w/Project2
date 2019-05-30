var db = require("../models");

module.exports = function(app) {
  app.get("/api/loadouts", function(req, res) {
    db.Loadout.findAll().then(function(dbLoadout) {
      res.json(dbLoadout);
    });
  });

  app.post("/api/loadouts", function(req, res) {
    db.Loadout.create({
      comments: req.body.comments, 
      rating: req.body.rating
    }).then(function(dbLoadout) {
      res.json(dbLoadout);
    });
  });
};