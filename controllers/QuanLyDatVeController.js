const { LichChieu } = require("../models");

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

module.exports = { createLichChieu };
