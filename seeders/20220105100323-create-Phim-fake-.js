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
      "phims",
      [
        {
          tenPhim: "Trạng Tí Phiêu Lưu Ký 121",
          biDanh: "trang-ti-phieu-luu-ky-121",
          trailer: "https://youtu.be/sx1ROHCmY-4",
          hinhAnh:
            "http://movieapi.cyberlearn.vn/hinhanh/trang-ti-phieu-luu-ky-121_gp01.jpg",
          moTa: "Trạng tí phiêu lưu ký là một bộ phim do người Việt sản xuất",
          ngayKhoiChieu: "2021-12-24T00:00:00",
          hot: true,
          dangChieu: true,
          sapChieu: true,
        },
        {
          tenPhim: "Mắt biếc",
          biDanh: "mat-biec",
          trailer: "https://www.youtube.com/watch?v=KSFS0OfIK2c",
          hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/flower_gp01.jpg",
          moTa: "Đạo diễn Victor Vũ trở lại với một tác phẩm chuyển thể từ truyện ngắn cùng tên nổi tiếng của nhà văn Nguyễn Nhật Ánh: Mắt Biếc. Phim kể về chuyện tình đơn phương của chàng thanh niên Ngạn dành cho cô bạn từ thuở nhỏ Hà Lan...",
          ngayKhoiChieu: "2021-12-26T08:52:41.177",
          hot: true,
          dangChieu: true,
          sapChieu: false,
        },
        {
          tenPhim: "What If",
          biDanh: "what-if",
          trailer: "https://www.youtube.com/watch?v=x9D0uUKJ5KI",
          hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/what-if_gp01.jpg",
          moTa: "Là sê-ri phim truyền hình Mỹ, phát sóng trên nền tảng xem phim trực tuyến Disney+. Giám chế phim là A.C. Bradley, cùng với đạo diễn là Bryan Andrews. Tác phẩm được xây dựng trong bối cảnh của Vũ trụ Điện ảnh Marvel (MCU), nói về những biến cố có thể xảy ra nếu các sự kiện trong loạt phim điện ảnh của vũ trụ này không đi theo chiều hướng ban đầu.",
          ngayKhoiChieu: "2021-12-29T00:00:00",
          hot: null,
          dangChieu: null,
          sapChieu: null,
        },
        {
          tenPhim: "Batman v Superman: Dawn of Justice 1",
          biDanh: "batman-v-superman-dawn-of-justice-1",
          trailer: "https://www.youtube.com/embed/0WWzgGyAH6Y",
          hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/what-if_gp01.jpg",
          moTa: "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
          ngayKhoiChieu: "2021-12-29T00:00:00",
          hot: null,
          dangChieu: false,
          sapChieu: true,
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
    await queryInterface.bulkDelete("phims", null, {});
  },
};
