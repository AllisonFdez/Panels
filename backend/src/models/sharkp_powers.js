'use strict';
module.exports = (sequelize, DataTypes) => {
  var sharkp_powers = sequelize.define('sharkp_powers', {
    watt: DataTypes.FLOAT,
    var: DataTypes.FLOAT,
    vas: DataTypes.FLOAT
  }, {});
  sharkp_powers.associate = function(models) {
    // associations can be defined here
  };
  return sharkp_powers;
};