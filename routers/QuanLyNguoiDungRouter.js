const express = require("express");
const {
  register,
  getAllDanhSachNguoiDung,
  login,
  uploadAvatar,
  postThemNguoiDung,
  deleteNguoiDung,
  editTaiKhoan,
  getThongTinTaiKhoan,
} = require("../controllers/QuanLyNguoiDungController");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");
const { uploadImage } = require("../middlewares/upload/UploadImage");

const quanLyNguoiDungRouter = express.Router();

quanLyNguoiDungRouter.post("/DangKy", register);
quanLyNguoiDungRouter.post("/DangNhap", login);

quanLyNguoiDungRouter.get("/LayDanhSachNguoiDung", getAllDanhSachNguoiDung);
quanLyNguoiDungRouter.post(
  "/ThemNguoiDung",
  authenticate,
  authorize(["Quản trị"]),
  postThemNguoiDung
);

quanLyNguoiDungRouter.post(
  "/UploadImage",
  authenticate,
  uploadImage("avatar"),
  uploadAvatar
);
quanLyNguoiDungRouter.delete(
  "/XoaNguoiDung/:id",
  authenticate,
  authorize(["Quản trị"]),
  deleteNguoiDung
);

quanLyNguoiDungRouter.put(
  "/CapNhatThongTinNguoiDung",
  authenticate,
  editTaiKhoan
);

quanLyNguoiDungRouter.get("/ThongTinTaiKhoan", getThongTinTaiKhoan);

module.exports = {
  quanLyNguoiDungRouter,
};
