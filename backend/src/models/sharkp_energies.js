'use strict';
module.exports = (sequelize, DataTypes) => {
  var sharkp_energies = sequelize.define('sharkp_energies', {
    watth: DataTypes.INTEGER,
    varh: DataTypes.INTEGER,
    vash: DataTypes.INTEGER
  }, {});
  sharkp_energies.associate = function(models) {
    // associations can be defined here
  };
  return sharkp_energies;
};