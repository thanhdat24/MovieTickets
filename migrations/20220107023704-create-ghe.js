"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Ghes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tenGhe: {
        type: Sequelize.STRING,
      },
      stt: {
        type: Sequelize.STRING,
      },
      daDat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      idLoaiGhe: {
        type: Sequelize.INTEGER,
        references: {
          model: "ghes",
          key: "id",
        },
        allowNull: false,
      },
      idRap: {
        type: Sequelize.INTEGER,
        references: {
          model: "raps",
          key: "id",
        },
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Ghes");
  },
};
