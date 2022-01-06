const { Phim, LichChieu } = require("../models");

// HeThongRap
const createPhim = async (req, res) => {
  const { tenPhim, biDanh, trailer, hinhAnh, moTa } = req.body;
  try {
    const newPhim = await Phim.create({
      tenPhim,
      biDanh,
      trailer,
      hinhAnh,
      moTa,
    });
    res.status(201).send(newPhim);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllDanhSachPhim = async (req, res) => {
  const content = await Phim.findAll();
  res.status(200).send({
    statusCode: 200,
    message: "Xử lý thành công!",
    content,
    dateTime: new Date(),
    messageConstants: null,
  });
};

const deletePhim = async (req, res) => {
  const { id } = req.params;
  try {
    const content = await Phim.destroy({ where: { id } });
    if (content) {
      res.status(200).send({
        statusCode: 200,
        message: "Xử lý thành công!",
        content: "Xóa thành công!",
        dateTime: new Date(),
        messageConstants: null,
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        message: "Không tìm thấy tài nguyên!",
        content: "Mã phim không hợp lệ!",
        dateTime: new Date(),
        messageConstants: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Không tìm thấy tài nguyên!",
    });
  }
};

const getThongTinPhim = async (req, res) => {
  const { id } = req.params;
  try {
    const content = await Phim.findOne({ where: { id } });
    if (content) {
      res.status(200).send({
        statusCode: 200,
        message: "Xử lý thành công!",
        content,
        dateTime: new Date(),
        messageConstants: null,
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        message: "Không tìm thấy tài nguyên!",
        content: "Mã phim không hợp lệ!",
        dateTime: new Date(),
        messageConstants: null,
      });
    }
  } catch (error) {
    res.status(400).send({
      statusCode: 500,
      message: "Không tìm thấy tài nguyên!",
    });
  }
};

const createLichChieu = async (req, res) => {
  const { giaVe, thoiLuong, ngayChieuGioChieu, idNguoiDung, idRap, idPhim } =
    req.body;
  try {
    const newLichChieu = await LichChieu.create({
      giaVe,
      thoiLuong,
      ngayChieuGioChieu,
      idNguoiDung,
      idRap,
      idPhim,
    });
    res.status(201).send(newLichChieu);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createPhim,
  getAllDanhSachPhim,
  deletePhim,
  getThongTinPhim,
  createLichChieu,
};
