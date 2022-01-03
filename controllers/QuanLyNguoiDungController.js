const { NguoiDung } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { taiKhoan, matKhau, email, soDt, hoTen } = req.body;
  try {
    // tạo ra một chuõi ngẫu nhiên
    const salt = bcrypt.genSaltSync(10);
    // mã hoá salt + password
    const hashPassword = bcrypt.hashSync(matKhau, salt);

    const content = await NguoiDung.create({
      taiKhoan,
      matKhau: hashPassword,
      email,
      soDt,
      hoTen,
    });
    res.status(201).send({
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

const login = async (req, res) => {
  const { taiKhoan, matKhau } = req.body;
  // b1: tìm ra user đang đăng nhập dựa trên taiKhoan
  const nguoiDung = await NguoiDung.findOne({ where: { taiKhoan } });
  if (nguoiDung) {
    const isAuth = bcrypt.compareSync(matKhau, nguoiDung.matKhau);
    // b2: kiểm ra password có đúng kh?
    if (isAuth) {
      const accessToken = jwt.sign(
        {
          taiKhoan: nguoiDung.taiKhoan,
          maLoaiNguoiDung: nguoiDung.maLoaiNguoiDung,
        },
        "dat-24",
        {
          expiresIn: 60 * 60,
        }
      );
      const content = {
        taiKhoan: nguoiDung.taiKhoan,
        hoTen: nguoiDung.hoTen,
        email: nguoiDung.email,
        soDt: nguoiDung.soDt,
        maLoaiNguoiDung: nguoiDung.maLoaiNguoiDung,
        accessToken,
      };
      res.status(200).send({
        statusCode: 200,
        message: "Xử lý thành công!",
        content,
        dateTime: new Date(),
        messageConstants: null,
      });
    } else {
      res.status(500).send({
        statusCode: 404,
        message: "Không tìm thấy tài nguyên!",
        content: "Tài khoản hoặc mật khẩu không đúng!",
        dateTime: new Date(),
        messageConstants: null,
      });
    }
  } else {
    res.status(404).send({ message: "Không tìm thấy tài khoản phù hợp !" });
  }
};

const getAllDanhSachNguoiDung = async (req, res) => {
  const content = await NguoiDung.findAll();
  res.status(200).send({
    statusCode: 200,
    message: "Xử lý thành công!",
    content,
    dateTime: new Date(),
    messageConstants: null,
  });
};
module.exports = {
  register,
  getAllDanhSachNguoiDung,
  login,
};
