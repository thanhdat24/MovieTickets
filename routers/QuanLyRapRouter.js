const express = require("express");
const {
  createHeThongRap,
  getAllHeThongRap,
  deleteHeThongRap,
  createCumRap,
  getAllCumRap,
  deleteCumRap,
  createRap,
  deleteRap,
  getAllCumRapTheoHeThong,
} = require("../controllers/QuanLyRapController");

const quanLyRapRouter = express.Router();

quanLyRapRouter.post("/LayThongTinHeThongRap", createHeThongRap);
quanLyRapRouter.get("/LayThongTinHeThongRap", getAllHeThongRap);
quanLyRapRouter.delete("/LayThongTinHeThongRap/:id", deleteHeThongRap);

quanLyRapRouter.post("/LayThongTinCumRap", createCumRap);
quanLyRapRouter.get("/LayThongTinCumRap", getAllCumRap);
quanLyRapRouter.delete("/LayThongTinCumRap/:id", deleteCumRap);

quanLyRapRouter.post("/LayThongTinRap", createRap);
quanLyRapRouter.delete("/LayThongTinRap/:id", deleteRap);

quanLyRapRouter.get("/LayThongTinCumRapTheoHeThong", getAllCumRapTheoHeThong);


module.exports = {
  quanLyRapRouter,
};
