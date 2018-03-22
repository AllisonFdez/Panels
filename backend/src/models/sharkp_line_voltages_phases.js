'use strict';
module.exports = (sequelize, DataTypes) => {
  var sharkp_line_voltages_phases = sequelize.define('sharkp_line_voltages_phases', {
    vab: DataTypes.FLOAT,
    pab: DataTypes.INTEGER,
    vbc: DataTypes.FLOAT,
    pbc: DataTypes.INTEGER,
    vca: DataTypes.FLOAT,
    pca: DataTypes.INTEGER 
  }, {});
  sharkp_line_voltages_phases.associate = function(models) {
    // associations can be defined here
  };
  return sharkp_line_voltages_phases;
};