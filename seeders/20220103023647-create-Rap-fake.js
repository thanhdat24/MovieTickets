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
      "raps",
      [
        {
          idCumRap: 2,
          tenRap: "Rạp 1",
        },
        {
          idCumRap: 2,
          tenRap: "Rạp 2",
        },
        {
          idCumRap: 1,
          tenRap: "Rạp 1",
        },
        {
          idCumRap: 1,
          tenRap: "Rạp 2",
        },
        {
          idCumRap: 1,
          tenRap: "Rạp 3",
        },
        {
          idCumRap: 3,
          tenRap: "Rạp 1",
        },
        {
          idCumRap: 3,
          tenRap: "Rạp 2",
        },
        {
          idCumRap: 3,
          tenRap: "Rạp 3",
        },
        {
          idCumRap: 4,
          tenRap: "Rạp 1",
        },
        {
          idCumRap: 4,
          tenRap: "Rạp 2",
        },
        {
          idCumRap: 5,
          tenRap: "Rạp 1",
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
    await queryInterface.bulkDelete("raps", null, {});
  },
};
