'use strict';
module.exports = (sequelize, DataTypes) => {
  var sharkp_frequency_pfs = sequelize.define('sharkp_frequency_pfs', {
    freq: DataTypes.FLOAT,
    pf: DataTypes.FLOAT
  }, {});
  sharkp_frequency_pfs.associate = function(models) {
    // associations can be defined here
  };
  return sharkp_frequency_pfs;
};