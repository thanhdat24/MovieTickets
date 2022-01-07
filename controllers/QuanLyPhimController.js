const { Phim } = require("../models");

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
    res.status(400).send({
      statusCode: 400,
      message: "Xử lý thất bai!",
      content: "Phim đã xếp lịch chiếu không thể xóa",
      dateTime: new Date(),
      messageConstants: null,
    });
  }
};

const updatePhim = async (req, res) => {
  const { id } = req.params;
  const {
    tenPhim,
    trailer,
    hinhAnh,
    moTa,
    ngayKhoiChieu,
    danhGia,
    hot,
    dangChieu,
    sapChieu,
  } = req.body;
  try {
    const content = await Phim.findOne({ where: { id } });
    content.tenPhim = tenPhim;
    content.trailer = trailer;
    content.hinhAnh = hinhAnh;
    content.moTa = moTa;
    content.ngayKhoiChieu = ngayKhoiChieu;
    content.danhGia = danhGia;
    content.hot = hot;
    content.dangChieu = dangChieu;
    content.sapChieu = sapChieu;
    await content.save();
    res.status(200).send({
      statusCode: 200,
      message: "Xử lý thành công!",
      content: "Cập nhật phim thành công",
      dateTime: new Date(),
      messageConstants: null,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Dữ liệu không hợp lệ!",
      error: error,
      dateTime: new Date(),
      messageConstants: null,
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



module.exports = {
  createPhim,
  getAllDanhSachPhim,
  deletePhim,
  getThongTinPhim,
  updatePhim,
};
