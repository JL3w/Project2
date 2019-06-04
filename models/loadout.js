module.exports = function(sequelize, DataTypes) {
  let Loadout = sequelize.define("Loadout", {
    loadoutName: DataTypes.STRING,
    sport: DataTypes.STRING,
    loadoutDescription: DataTypes.TEXT
    // userID: DataTypes.STRING
    // defaultvalue: 
  });

  Loadout.associate = (models) => {
    Loadout.hasMany(models.Gear);
  };


  return Loadout;
};