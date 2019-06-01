var db = require("../models");

module.exports = function(app) {
  // Get all gear table data
  app.get("/api/profiles", function(req, res) {
    db.Profile.findAll().then(function(dbProfile) {
      res.json(dbProfile);
    });
  });

  app.post("/api/profiles", function(req, res) {
    db.Profile.create({
      Name: req.body.Name,
      email: req.body.email,
    }).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });
};