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
      "cumraps",
      [
        {
          HeThongRap_id: 1,
          maCumRap: "bhd-star-cineplex-3-2",
          tenCumRap: "BHD Star Cineplex - 3/2",
          diaChi: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
        },
        {
          HeThongRap_id: 1,
          maCumRap: "bhd-star-cineplex-bitexco",
          tenCumRap: "BHD Star Cineplex - Bitexco",
          diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
        },
        {
          HeThongRap_id: 2,
          maCumRap: "cgv-aeon-binh-tan",
          tenCumRap: "CGV - Aeon Bình Tân",
          diaChi:
            "Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, Bình Trị Đông B, Bình Tân",
        },
        {
          HeThongRap_id: 2,
          maCumRap: "cgv-aeon-tan-phu",
          tenCumRap: "CGV - Aeon Tân Phú",
          diaChi: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú",
        },
        {
          HeThongRap_id: 2,
          maCumRap: "cgv-cgv-saigonres-nguyen-xi",
          tenCumRap: "CGV - CGV Saigonres Nguyễn Xí",
          diaChi:
            "Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P. 26, Bình Thạnh",
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
    await queryInterface.bulkDelete("cumraps", null, {});
  },
};
