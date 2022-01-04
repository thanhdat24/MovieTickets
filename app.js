const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const app = express();
const { rootRouter } = require("./routers");

// cài ứng dụng sử dụng kiểu json
app.use(express.json());

// cài đặt static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/", express.static(publicPathDirectory));

// dùng router
app.use("/api", rootRouter);

// lắng nghe event kết nối
app.listen(7000, async () => {
  console.log("App listening on http://localhost:7000");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
