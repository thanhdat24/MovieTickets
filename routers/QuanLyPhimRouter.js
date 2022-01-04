const express = require("express");
const {
  createPhim,
  getAllDanhSachPhim,
  deletePhim,
  getDetailPhim,
} = require("../controllers/QuanLyPhimController");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");

const quanLyPhimRouter = express.Router();

quanLyPhimRouter.post("/LayDanhSachPhim", createPhim);
quanLyPhimRouter.get("/LayDanhSachPhim", getAllDanhSachPhim);
quanLyPhimRouter.delete(
  "/XoaPhim/:id",
  authenticate,
  authorize(["Quản trị"]),
  deletePhim
);

quanLyPhimRouter.get("/LayDanhSachPhim/:id", getDetailPhim);

module.exports = {
  quanLyPhimRouter,
};
