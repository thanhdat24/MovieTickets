const express = require("express");
const { createLichChieu } = require("../controllers/QuanLyDatVeController");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");

const quanLyDatVeRouter = express.Router();

quanLyDatVeRouter.post(
  "/TaoLichChieu",
  authenticate,
  authorize(["Quản trị"]),
  createLichChieu
);

module.exports = { quanLyDatVeRouter };
