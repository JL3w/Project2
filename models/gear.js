module.exports = function(sequelize, DataTypes) {
  let Gear = sequelize.define("Gear", {
    name: DataTypes.STRING,
    imgUrl: DataTypes.TEXT
  });


  Gear.associate = (models) => {
    Gear.belongsTo(models.Loadout); 
  };
  return Gear;
};