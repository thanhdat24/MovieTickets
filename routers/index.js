const express = require("express");
const { quanLyRapRouter } = require("./QuanLyRapRouter");

const rootRouter = express.Router();

rootRouter.use("/QuanLyRap", quanLyRapRouter);

module.exports = { rootRouter };
