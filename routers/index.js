const express = require("express");
const { quanLyNguoiDungRouter } = require("./QuanLyNguoiDungRouter");
const { quanLyPhimRouter } = require("./QuanLyPhimRouter");
const { quanLyRapRouter } = require("./QuanLyRapRouter");

const rootRouter = express.Router();

rootRouter.use("/QuanLyRap", quanLyRapRouter);
rootRouter.use("/QuanLyNguoiDung", quanLyNguoiDungRouter);

rootRouter.use("/QuanLyPhim", quanLyPhimRouter);

module.exports = { rootRouter };
