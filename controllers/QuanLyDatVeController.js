const { LichChieu, LoaiGhe, Ghe } = require("../models");

const createLichChieu = async (req, res) => {
  const { nguoiDung } = req;
  const { giaVe, ngayChieuGioChieu, idRap, idPhim } = req.body;
  try {
    const newLichChieu = await LichChieu.create({
      idNguoiDung: nguoiDung.id,
      giaVe,
      ngayChieuGioChieu,
      idRap,
      idPhim,
    });
    res.status(201).send(newLichChieu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createLoaiGhe = async (req, res) => {
  const { tenLoaiGhe } = req.body;
  try {
    const newLoaiGhe = await LoaiGhe.create({
      tenLoaiGhe,
    });
    res.status(201).send(newLoaiGhe);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDanhSachLoaiGhe = async (req, res) => {
  const content = await LoaiGhe.findAll();
  res.status(200).send({
    statusCode: 200,
    message: "Xử lý thành công!",
    content,
    dateTime: new Date(),
    messageConstants: null,
  });
};

const createGhe = async (req, res) => {
  const { tenGhe, stt, loaiGhe, idRap, idLoaiGhe } = req.body;
  try {
    const newGhe = await Ghe.create({
      tenGhe,
      stt,
      loaiGhe,
      idRap,
      idLoaiGhe,
    });
    res.status(201).send(newGhe);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDanhSachGhe = async (req, res) => {
  const content = await Ghe.findAll();
  res.status(200).send({
    statusCode: 200,
    message: "Xử lý thành công!",
    content,
    dateTime: new Date(),
    messageConstants: null,
  });
};
module.exports = {
  createLichChieu,
  createLoaiGhe,
  getDanhSachLoaiGhe,
  createGhe,
  getDanhSachGhe,
};
