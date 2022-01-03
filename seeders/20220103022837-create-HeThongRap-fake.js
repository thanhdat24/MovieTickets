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
      "hethongraps",
      [
        {
          maHeThongRap: "BHDStar",
          tenHeThongRap: "BHD Star Cineplex",
          biDanh: "bhd-star-cineplex",
          logo: "http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png",
        },
        {
          maHeThongRap: "CGV",
          tenHeThongRap: "cgv",
          biDanh: "cgv",
          logo: "http://movieapi.cyberlearn.vn/hinhanh/cgv.png",
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
     await queryInterface.bulkDelete("hethongraps", null, {});
  },
};
