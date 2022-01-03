const express = require("express");
const { quanLyNguoiDungRouter } = require("./QuanLyNguoiDungRouter");
const { quanLyRapRouter } = require("./QuanLyRapRouter");

const rootRouter = express.Router();

rootRouter.use("/QuanLyRap", quanLyRapRouter);
rootRouter.use("/QuanLyNguoiDung", quanLyNguoiDungRouter);

module.exports = { rootRouter };
