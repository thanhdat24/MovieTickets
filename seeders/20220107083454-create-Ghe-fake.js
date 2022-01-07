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
      "ghes",
      [
        {
          tenGhe: "01",
          stt: "01",
          idRap: 3,
          idLoaiGhe: 1,
        },
        {
          tenGhe: "02",
          stt: "02",
          idRap: 3,
          idLoaiGhe: 1,
        },
        {
          tenGhe: "03",
          stt: "03",
          idRap: 3,
          idLoaiGhe: 1,
        },
        {
          tenGhe: "04",
          stt: "04",
          idRap: 3,
          idLoaiGhe: 1,
        },
        {
          tenGhe: "05",
          stt: "05",
          idRap: 3,
          idLoaiGhe: 1,
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
    await queryInterface.bulkDelete("ghes", null, {});
  },
};
