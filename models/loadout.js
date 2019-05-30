module.exports = function(sequelize, DataTypes) {
  var Loadout = sequelize.define("Loadout", {
    comments: DataTypes.STRING,
    rating: DataTypes.DECIMAL
  });
  return Loadout;
};