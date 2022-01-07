"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "lichchieus",
      [
        {
          giaVe: 75000,
          ngayChieuGioChieu: "2022-01-05T10:00:00",
          idNguoiDung: 2,
          idRap: 2,
          idPhim: 2,
        },
        {
          giaVe: 75000,
          ngayChieuGioChieu: "2022-01-05T10:00:00",
          idNguoiDung: 2,
          idRap: 5,
          idPhim: 1,
        },
        {
          giaVe: 55000,
          ngayChieuGioChieu: "2022-01-06T15:00:00",
          idNguoiDung: 1,
          idRap: 3,
          idPhim: 3,
        },
        {
          giaVe: 55000,
          ngayChieuGioChieu: "2022-01-06T21:00:00",
          idNguoiDung: 1,
          idRap: 6,
          idPhim: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("lichchieus", null, {});
  },
};
