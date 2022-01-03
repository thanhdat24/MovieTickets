const express = require("express");
const {
  register,
  getAllDanhSachNguoiDung,
  login,
} = require("../controllers/QuanLyNguoiDungController");

const quanLyNguoiDungRouter = express.Router();

quanLyNguoiDungRouter.post("/DangKy", register);
quanLyNguoiDungRouter.post("/DangNhap", login);

quanLyNguoiDungRouter.get("/LayDanhSachNguoiDung", getAllDanhSachNguoiDung);


module.exports = {
  quanLyNguoiDungRouter,
};
