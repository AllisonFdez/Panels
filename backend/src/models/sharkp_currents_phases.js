'use strict';
module.exports = (sequelize, DataTypes) => {
  var sharkp_currents_phases = sequelize.define('sharkp_currents_phases', {
    ca: DataTypes.FLOAT,
    pa: DataTypes.INTEGER,
    cb: DataTypes.FLOAT,
    pb: DataTypes.INTEGER,
    cc: DataTypes.FLOAT,
    pc: DataTypes.INTEGER
  }, {});
  sharkp_currents_phases.associate = function(models) {
    // associations can be defined here
  };
  return sharkp_currents_phases;
};