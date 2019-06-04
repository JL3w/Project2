module.exports = function(sequelize, DataTypes) {
  let Gear = sequelize.define("Gear", {
    name: DataTypes.STRING,
    // description: DataTypes.TEXT,
    imgUrl: DataTypes.TEXT
    // productUrl: DataTypes.STRING,
    // rating: DataTypes.DECIMAL
  });

  Gear.associate = (models) => {
    Gear.belongsTo(models.Loadout); 
  };
  return Gear;
};