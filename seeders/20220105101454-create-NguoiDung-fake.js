"use strict";
const bcrypt = require("bcryptjs");
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
    // tạo ra một chuõi ngẫu nhiên
    const salt = bcrypt.genSaltSync(10);
    // mã hoá salt + password
    const hashPassword = bcrypt.hashSync("123456", salt);
    await queryInterface.bulkInsert(
      "nguoidungs",
      [
        {
          taiKhoan: "admin",
          matKhau: hashPassword,
          email: "admin@gmail.com",
          soDt: "0123456789",
          hoTen: "Dat",
          avatar:
            "http://www.gravatar.com/avatar/cba1f2d695a5ca39ee6f343297a761a4?s=100",
          maLoaiNguoiDung: "Quản trị",
        },
        {
          taiKhoan: "user",
          matKhau: hashPassword,
          email: "user@gmail.com",
          soDt: "0123456789",
          hoTen: "Diep",
          avatar:
            "http://www.gravatar.com/avatar/cba1f2d695a5ca39ee6f343297a761a4?s=100",
          maLoaiNguoiDung: "Khách hàng",
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
    await queryInterface.bulkDelete("nguoidungs", null, {});
  },
};
