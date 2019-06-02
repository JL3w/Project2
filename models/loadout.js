module.exports = function(sequelize, DataTypes) {
  let Loadout = sequelize.define("Loadout", {
    name: DataTypes.STRING,
    sport: DataTypes.STRING,
    description: DataTypes.TEXT
    // defaultvalue: 
  });

  Loadout.associate = (models) => {
    Loadout.hasMany(models.Gear);
  };


  return Loadout;
};