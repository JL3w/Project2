var db = require("../models");

module.exports = function(app) {
  // Get all gear table data
  app.get("/api/sports", function(req, res) {
    db.Sport.findAll().then(function(dbSport) {
      res.json(dbSport);
    });
  });

  app.post("/api/sports", function(req, res) {
    db.Sport.create(req.body)
      .then(function(dbSport) {
        res.json(dbSport);
      });
  });
};