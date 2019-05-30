var db = require("../models");

module.exports = function(app) {
  // Get all gear table data
  app.get("/api/gears", function(req, res) {
    db.Gear.findAll().then(function(dbGear) {
      res.json(dbGear);
    });
  });

  //   app.get("/api/gears/:id", function(req, res) {
  //     db.Gear.findOne({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(
  //       function(dbGear) {
  //         res.json(dbGear);
  //       }
  //     );
  //   });

  app.post("/api/gears", function(req, res) {
    db.Gear.create({
      name: req.body.name,
      description: req.body.description,
      imgUrl: req.body.imgUrl,
      productUrl: req.body.productUrl,
      rating: req.body.rating
    }).then(function(dbGear) {
      res.json(dbGear);
    });
  });
};
