var db = require("../models");

module.exports = function(app) {
  // Get all gear table data
  app.get("/api/gears", function(req, res) {
    db.Gear.findAll().then(function(dbGear) {
      res.json(dbGear);
    });
  });

  app.post("/api/gears", function(req, res) {
    db.Gear.create({
      LoadoutId: req.body.loadoutId,
      name: req.body.name,
      // description: req.body.description,
      imgUrl: req.body.imgUrl,
      // loadoutId: req.body.LoadoutId
      // productUrl: req.body.productUrl,
      // rating: req.body.rating
    }).then(function(dbGear) {
      res.json(dbGear);
    });
  });
};
