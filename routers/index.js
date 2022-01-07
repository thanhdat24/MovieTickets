const express = require("express");
const { quanLyDatVeRouter } = require("./QuanLyDatVeRouter");
const { quanLyNguoiDungRouter } = require("./QuanLyNguoiDungRouter");
const { quanLyPhimRouter } = require("./QuanLyPhimRouter");
const { quanLyRapRouter } = require("./QuanLyRapRouter");

const rootRouter = express.Router();

rootRouter.use("/QuanLyRap", quanLyRapRouter);

rootRouter.use("/QuanLyNguoiDung", quanLyNguoiDungRouter);

rootRouter.use("/QuanLyPhim", quanLyPhimRouter);

rootRouter.use("/QuanLyDatVe", quanLyDatVeRouter);

module.exports = { rootRouter };
