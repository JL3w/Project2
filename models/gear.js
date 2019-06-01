module.exports = function(sequelize, DataTypes) {
  var Gear = sequelize.define("Gear", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgUrl: DataTypes.TEXT,
    productUrl: DataTypes.STRING,
    rating: DataTypes.DECIMAL
  });
  return Gear;
};