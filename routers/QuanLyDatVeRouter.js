const express = require("express");
const { createLichChieu, createLoaiGhe, getDanhSachLoaiGhe, createGhe, getDanhSachGhe } = require("../controllers/QuanLyDatVeController");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");

const quanLyDatVeRouter = express.Router();

// Lich Chieu
quanLyDatVeRouter.post(
  "/TaoLichChieu",
  authenticate,
  authorize(["Quản trị"]),
  createLichChieu
);
// Loai Ghe
quanLyDatVeRouter.post("/TaoLoaiGhe", createLoaiGhe);
quanLyDatVeRouter.get("/LayDanhSachLoaiGhe", getDanhSachLoaiGhe);
// Ghe
quanLyDatVeRouter.post("/TaoGhe", createGhe);
quanLyDatVeRouter.get("/LayDanhSachGhe", getDanhSachGhe);

module.exports = { quanLyDatVeRouter };
