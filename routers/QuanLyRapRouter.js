const express = require("express");
const {
  createHeThongRap,
  getHeThongRap,
  deleteHeThongRap,
  createCumRap,
  getAllCumRap,
  deleteCumRap,
  createRap,
  deleteRap,
  getAllCumRapTheoHeThong,
  getThongTinLichChieuPhim,
  getThongTinLichChieuHeThongRap,
} = require("../controllers/QuanLyRapController");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");

const quanLyRapRouter = express.Router();

quanLyRapRouter.post(
  "/LayThongTinHeThongRap",
  authenticate,
  authorize(["Quản trị"]),
  createHeThongRap
);
quanLyRapRouter.get("/LayThongTinHeThongRap", getHeThongRap);
quanLyRapRouter.delete("/LayThongTinHeThongRap/:id", deleteHeThongRap);

quanLyRapRouter.post("/LayThongTinCumRap", createCumRap);
quanLyRapRouter.get("/LayThongTinCumRap", getAllCumRap);
quanLyRapRouter.delete("/LayThongTinCumRap/:id", deleteCumRap);

quanLyRapRouter.post("/LayThongTinRap", createRap);
quanLyRapRouter.delete("/LayThongTinRap/:id", deleteRap);

quanLyRapRouter.get("/LayThongTinCumRapTheoHeThong", getAllCumRapTheoHeThong);
quanLyRapRouter.get(
  "/LayThongTinLichChieuHeThongRap",
  getThongTinLichChieuHeThongRap
);
quanLyRapRouter.get("/LayThongTinLichChieuPhim", getThongTinLichChieuPhim);

module.exports = {
  quanLyRapRouter,
};
