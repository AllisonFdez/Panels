'use strict';
module.exports = (sequelize, DataTypes) => {
  var sharkp_phase_voltages = sequelize.define('sharkp_phase_voltages', {
    va: DataTypes.FLOAT,
    vb: DataTypes.FLOAT,
    vc: DataTypes.FLOAT
  }, {});
  sharkp_phase_voltages.associate = function(models) {
    // associations can be defined here
  };
  return sharkp_phase_voltages;
};