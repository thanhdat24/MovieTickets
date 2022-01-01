const express = require("express");
const {
  createHeThongRap,
  getAllHeThongRap,
  deleteHeThongRap,
} = require("../controllers/QuanLyRapController");

const quanLyRapRouter = express.Router();

quanLyRapRouter.post("/TaoHeThongRap", createHeThongRap);
quanLyRapRouter.get("/LayThongTinHeThongRap", getAllHeThongRap);
quanLyRapRouter.delete("/LayThongTinHeThongRap/:id", deleteHeThongRap);

module.exports = {
  quanLyRapRouter,
};
