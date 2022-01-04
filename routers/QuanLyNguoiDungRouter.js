const express = require("express");
const {
  register,
  getAllDanhSachNguoiDung,
  login,
  uploadAvatar,
} = require("../controllers/QuanLyNguoiDungController");
const { authenticate } = require("../middlewares/auth/authenticate");
const { uploadImage } = require("../middlewares/upload/UploadImage");

const quanLyNguoiDungRouter = express.Router();

quanLyNguoiDungRouter.post("/DangKy", register);
quanLyNguoiDungRouter.post("/DangNhap", login);

quanLyNguoiDungRouter.get("/LayDanhSachNguoiDung", getAllDanhSachNguoiDung);

quanLyNguoiDungRouter.post(
  "/UploadImage",
  authenticate,
  uploadImage("avatar"),
  uploadAvatar
);

module.exports = {
  quanLyNguoiDungRouter,
};
