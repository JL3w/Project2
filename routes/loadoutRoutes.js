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
      name: req.body.name,
      sport: req.body.sport,
      description: req.body.description
    }).then(function(dbLoadout) {
      res.json(dbLoadout);
    });
  });

  app.get("/api/loadouts/:id", function(req, res){
    db.Loadout.findOne({where:{id:req.params.id}})
    .then(function(loadout){
      // res.json(loadout)
      loadout.getGears()
      .then(function(loadoutGear){
        // res.json(loadoutGear)
        const dbresults = loadout.dataValues;
        const gearResults = [];
        for (let i = 0; i<loadoutGear.length; i++){
          gearResults.push(loadoutGear[i].dataValues)
        }
        dbresults.gearDetails=gearResults;
        console.log(dbresults)
        res.json(dbresults)
      })
    })
  })
};