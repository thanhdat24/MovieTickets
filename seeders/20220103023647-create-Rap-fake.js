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
          CumRap_id: 2,
          tenRap: "Rạp 1",
        },
        {
          CumRap_id: 2,
          tenRap: "Rạp 2",
        },
        {
          CumRap_id: 1,
          tenRap: "Rạp 1",
        },
        {
          CumRap_id: 1,
          tenRap: "Rạp 2",
        },
        {
          CumRap_id: 1,
          tenRap: "Rạp 3",
        },
        {
          CumRap_id: 3,
          tenRap: "Rạp 1",
        },
        {
          CumRap_id: 3,
          tenRap: "Rạp 2",
        },
        {
          CumRap_id: 3,
          tenRap: "Rạp 3",
        },
        {
          CumRap_id: 4,
          tenRap: "Rạp 1",
        },
        {
          CumRap_id: 4,
          tenRap: "Rạp 2",
        },
        {
          CumRap_id: 5,
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
