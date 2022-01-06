const express = require("express");
const {
  createPhim,
  getAllDanhSachPhim,
  deletePhim,
  getThongTinPhim,
  createLichChieu,

} = require("../controllers/QuanLyPhimController");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");

const quanLyPhimRouter = express.Router();

quanLyPhimRouter.post("/ThemPhim", createPhim);
quanLyPhimRouter.get("/LayDanhSachPhim", getAllDanhSachPhim);
quanLyPhimRouter.delete(
  "/XoaPhim/:id",
  authenticate,
  authorize(["Quản trị"]),
  deletePhim
);
quanLyPhimRouter.get("/ThongTinPhim/:id", getThongTinPhim);

quanLyPhimRouter.post("/ThemLichChieu", createLichChieu);

module.exports = {
  quanLyPhimRouter,
};
