"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Raps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      maCR: {
        type: Sequelize.INTEGER,
        references: {
          model: "cumraps",
          key: "id",
        },
        primaryKey: true,
        allowNull: false,
      },
      maRap: {
        type: Sequelize.INTEGER,
      },
      tenRap: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Raps");
  },
};
