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
          maRap: 511,
          tenRap: "Rạp 1",
        },
        {
          CumRap_id: 2,
          maRap: 511,
          tenRap: "Rạp 1",
        },
        {
          CumRap_id: 2,
          maRap: 512,
          tenRap: "Rạp 2",
        },
        {
          CumRap_id: 1,
          maRap: 451,
          tenRap: "Rạp 1",
        },
        {
          CumRap_id: 1,
          maRap: 452,
          tenRap: "Rạp 2",
        },
        {
          CumRap_id: 1,
          maRap: 453,
          tenRap: "Rạp 3",
        },
        {
          CumRap_id: 1,
          maRap: 453,
          tenRap: "Rạp 3",
        },
        {
          CumRap_id: 1,
          maRap: 453,
          tenRap: "Rạp 3",
        },
        {
          CumRap_id: 3,
          maRap: 461,
          tenRap: "Rạp 1",
        },
        {
          CumRap_id: 3,
          maRap: 462,
          tenRap: "Rạp 2",
        },
        {
          CumRap_id: 3,
          maRap: 463,
          tenRap: "Rạp 3",
        },
        {
          CumRap_id: 4,
          maRap: 521,
          tenRap: "Rạp 1",
        },
        {
          CumRap_id: 5,
          maRap: 431,
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
