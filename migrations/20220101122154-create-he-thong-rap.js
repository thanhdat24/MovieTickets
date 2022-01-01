"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("HeThongRaps", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      maHeThongRap: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tenHeThongRap: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      biDanh: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      logo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("HeThongRaps");
  },
};
