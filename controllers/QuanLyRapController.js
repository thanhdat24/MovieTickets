const { HeThongRap, CumRap, Rap, Phim, LichChieu } = require("../models");

// HeThongRap
const createHeThongRap = async (req, res) => {
  const { maHeThongRap, tenHeThongRap, biDanh, logo } = req.body;
  try {
    const newHeThongRap = await HeThongRap.create({
      maHeThongRap,
      tenHeThongRap,
      biDanh,
      logo,
    });
    res.status(201).send(newHeThongRap);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getHeThongRap = async (req, res) => {
  const { maHeThongRap } = req.query;
  try {
    if (maHeThongRap) {
      const content = await HeThongRap.findAll({
        attributes: {
          exclude: ["id"],
        },
        where: {
          maHeThongRap,
        },
      });
      res.status(200).send({
        statusCode: 200,
        message: "Xử lý thành công!",
        content,
        dateTime: new Date(),
        messageConstants: null,
      });
    } else {
      const content = await HeThongRap.findAll({
        attributes: {
          exclude: ["id"],
        },
      });
      res.status(200).send({
        statusCode: 200,
        message: "Xử lý thành công!",
        content,
        dateTime: new Date(),
        messageConstants: null,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteHeThongRap = async (req, res) => {
  const { id } = req.params;
  try {
    await HeThongRap.destroy({ where: { id } });
    res.status(200).send("Delete success!");
  } catch (error) {
    res.status(500).send(error);
  }
};

// CumRap
const createCumRap = async (req, res) => {
  const { HeThongRap_id, maCumRap, tenCumRap, diaChi } = req.body;
  try {
    const newCumRap = await CumRap.create({
      HeThongRap_id,
      maCumRap,
      tenCumRap,
      diaChi,
    });
    res.status(201).send(newCumRap);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllCumRap = async (req, res) => {
  try {
    const content = await CumRap.findAll();
    res.status(200).send({
      statusCode: 200,
      message: "Xử lý thành công!",
      content,
      dateTime: new Date(),
      messageConstants: null,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteCumRap = async (req, res) => {
  const { id } = req.params;
  try {
    await CumRap.destroy({ where: { id } });
    res.status(200).send("Delete success!");
  } catch (error) {
    res.status(500).send(error);
  }
};

// Rap
const createRap = async (req, res) => {
  const { idCumRap, tenRap } = req.body;
  try {
    const newRap = await Rap.create({
      idCumRap,
      tenRap,
    });
    res.status(201).send(newRap);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteRap = async (req, res) => {
  const { id } = req.params;
  try {
    await Rap.destroy({ where: { id } });
    res.status(200).send("Delete success!");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllCumRapTheoHeThong = async (req, res) => {
  const { maHeThongRap } = req.query;
  try {
    if (maHeThongRap) {
      const content = await HeThongRap.findAll({
        attributes: {
          exclude: ["id", "maHeThongRap", "tenHeThongRap", "biDanh", "logo"],
        },
        where: {
          maHeThongRap,
        },
        include: [
          {
            model: CumRap,
            attributes: ["maCumRap", "tenCumRap", "diaChi"],
            required: true,
            include: {
              model: Rap,
              attributes: ["id", "tenRap"],
              required: true,
            },
          },
        ],
      });
      res.status(200).send({
        statusCode: 200,
        message: "Xử lý thành công!",
        content,
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        message: "Không tìm thấy tài nguyên!",
        content: "Mã hệ thống rạp không tồn tại!",
        dateTime: new Date(),
        messageConstants: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Không tìm thấy tài nguyên!",
      error: error,
    });
  }
};

const getThongTinLichChieuHeThongRap = async (req, res) => {
  const { maHeThongRap } = req.query;
  try {
    if (maHeThongRap) {
      const content = await HeThongRap.findAll({
        attributes: {
          exclude: ["biDanh"],
        },
        where: {
          maHeThongRap,
        },
        include: [
          {
            model: CumRap,
            attributes: ["maCumRap", "tenCumRap", "diaChi"],
            required: true,
            include: [
              {
                model: Rap,
                attributes: { exclude: ["idCumRap"] },
                required: true,
                include: [
                  {
                    model: LichChieu,
                    as: Rap.tenRap,
                    attributes: ["id", "ngayChieuGioChieu", "giaVe"],
                    required: true,
                    include: [
                      {
                        model: Phim,
                        attributes: {
                          exclude: [
                            "biDanh",
                            "moTa",
                            "ngayKhoiChieu",
                            "trailer",
                          ],
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
      res.status(200).send({
        statusCode: 200,
        message: "Xử lý thành công!",
        content,
      });
    } else {
      const content = await HeThongRap.findAll({
        attributes: {
          exclude: ["biDanh"],
        },
        include: [
          {
            model: CumRap,
            attributes: ["maCumRap", "tenCumRap", "diaChi"],
            required: true,
            include: [
              {
                model: Rap,
                attributes: { exclude: ["idCumRap"] },
                required: true,
                include: [
                  {
                    model: LichChieu,
                    attributes: ["id", "ngayChieuGioChieu", "giaVe"],
                    required: true,
                    include: [
                      {
                        model: Phim,
                        attributes: {
                          exclude: [
                            "biDanh",
                            "moTa",
                            "ngayKhoiChieu",
                            "trailer",
                          ],
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
      res.status(200).send({
        statusCode: 200,
        message: "Xử lý thành công!",
        content,
        dateTime: new Date(),
        messageConstants: null,
      });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

const getThongTinLichChieuPhim = async (req, res) => {
  const { id } = req.query;
  console.log("id", id);
  try {
    if (id) {
      const content = await Phim.findOne({
        where: { id },
        include: [
          {
            model: LichChieu,
            attributes: ["id", "ngayChieuGioChieu", "giaVe"],
            include: [
              {
                model: Rap,
                attributes: { exclude: ["idCumRap"] },
                required: true,
                include: [
                  {
                    model: CumRap,
                    attributes: ["maCumRap", "tenCumRap", "diaChi"],
                    required: true,
                    include: [
                      {
                        model: HeThongRap,
                        attributes: {
                          exclude: ["biDanh"],
                        },
                        required: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
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
          content: "Mã phim không tồn tại!",
          dateTime: new Date(),
          messageConstants: null,
        });
      }
    } else {
      res.status(200).send({
        statusCode: 400,
        message: "Không tìm thấy tài nguyên!",
        content: "Mã phim không tồn tại!",
        dateTime: new Date(),
        messageConstants: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Không tìm thấy tài nguyên!",
      error: error,
    });
  }
};
module.exports = {
  createHeThongRap,
  getHeThongRap,
  deleteHeThongRap,
  createCumRap,
  getAllCumRap,
  deleteCumRap,
  createRap,
  getAllCumRapTheoHeThong,
  deleteRap,
  getThongTinLichChieuPhim,
  getThongTinLichChieuHeThongRap,
};
