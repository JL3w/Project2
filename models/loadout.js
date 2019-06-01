module.exports = function(sequelize, DataTypes) {
  var Loadout = sequelize.define("Loadout", {
    // comment: DataTypes.STRING,
    rating: DataTypes.DECIMAL
  });
  return Loadout;
};