"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("LoaiGhes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tenLoaiGhe: {
        type: Sequelize.STRING,
        defaultValue: "Thuong",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("LoaiGhes");
  },
};
