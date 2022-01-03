"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CumRaps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      HeThongRap_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "hethongraps",
          key: "id",
        },
        allowNull: false,
      },
      maCumRap: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tenCumRap: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diaChi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("CumRaps");
  },
};
