module.exports = function(sequelize, DataTypes) {
  var Gear = sequelize.define("Gear", {
    name: DataTypes.STRING,
    // description: DataTypes.TEXT,
    imgUrl: DataTypes.TEXT
    // productUrl: DataTypes.STRING,
    // rating: DataTypes.DECIMAL
  });

  // creates an association that links gear to loadouts and stops and gear from being created without being part of a loadout 
  // Gear.associate = function(models){
  //   Gear.belongsTo(models.Loadout, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  Gear.associate = (models) => {
    Gear.belongsTo(models.Loadout);
  };
  return Gear;
};