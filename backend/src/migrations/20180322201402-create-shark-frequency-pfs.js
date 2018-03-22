'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('sharkp_frequency_pfs', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          freq: {
            type: Sequelize.FLOAT
          },
          pf: {
            type: Sequelize.FLOAT
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });
          
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sharkp_frequency_pfs');
  }
};