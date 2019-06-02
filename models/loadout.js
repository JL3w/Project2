module.exports = function(sequelize, DataTypes) {
  var Loadout = sequelize.define("Loadout", {
    name: DataTypes.STRING,
    sport: DataTypes.STRING,
    description: DataTypes.TEXT,
  });

  Loadout.associate = (models) => {
    Loadout.hasMany(models.Gear);
  };


  return Loadout;
};