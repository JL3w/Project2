module.exports = function(sequelize, DataTypes) {
  var Loadout = sequelize.define("Loadout", {
    name: DataTypes.STRING,
    sport: DataTypes.STRING,
    description: DataTypes.TEXT,
  });

  // creates an association that deletes the gear from the table when the loadout gets deleted
  Loadout.associate = function(models) {
    Loadout.hasMany(models.Gear, {
      onDelete: "cascade"
    });
  };
  Loadout.hasMany(Gear);
  return Loadout;
};