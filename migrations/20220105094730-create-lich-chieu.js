"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("LichChieus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      giaVe: {
        type: Sequelize.DECIMAL,
      },
      thoiLuong: {
        type: Sequelize.INTEGER,
      },
      ngayChieuGioChieu: {
        type: Sequelize.DATE,
      },
      idNguoiDung: {
        type: Sequelize.INTEGER,
        references: {
          model: "nguoidungs",
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
      idPhim: {
        type: Sequelize.INTEGER,
        references: {
          model: "phims",
          key: "id",
        },
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("LichChieus");
  },
};
