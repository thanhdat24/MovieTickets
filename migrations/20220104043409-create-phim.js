"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Phims", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tenPhim: {
        type: Sequelize.STRING,
      },
      biDanh: {
        type: Sequelize.STRING,
      },
      trailer: {
        type: Sequelize.STRING,
      },
      hinhAnh: {
        type: Sequelize.STRING,
      },
      moTa: {
        type: Sequelize.STRING(2048),
      },
      ngayKhoiChieu: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      danhGia: {
        type: Sequelize.INTEGER,
        defaultValue: 10,
      },
      hot: {
        type: Sequelize.BOOLEAN,
      },
      dangChieu: {
        type: Sequelize.BOOLEAN,
      },
      sapChieu: {
        type: Sequelize.BOOLEAN,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Phims");
  },
};
