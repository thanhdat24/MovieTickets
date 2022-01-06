const { NguoiDung } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatarUrl = require("gravatar");

const register = async (req, res) => {
  const { taiKhoan, matKhau, email, soDt, hoTen } = req.body;
  try {
    // tạo avatar default
    const avatarUrl = gravatarUrl.url(email, {
      protocol: "http",
      s: "100",
    });
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
      avatar: avatarUrl,
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

const postThemNguoiDung = async (req, res) => {
  const { taiKhoan, matKhau, email, soDt, maLoaiNguoiDung, hoTen } = req.body;
  try {
    // tạo avatar default
    const avatarUrl = gravatarUrl.url(email, {
      protocol: "http",
      s: "100",
    });
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
      maLoaiNguoiDung,
      avatar: avatarUrl,
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
        content: "Mã phim không hợp lệ!",
        dateTime: new Date(),
        messageConstants: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Dữ liệu không hợp lệ!",
      content: "Loại người dùng không hợp lệ!",
      dateTime: new Date(),
      messageConstants: null,
    });
  }
};
const uploadAvatar = async (req, res) => {
  const { file } = req;
  const { nguoiDung } = req;
  const filePath = file.path.slice(7);
  const urlImage = `http://localhost:7000/${filePath}`;
  const userFound = await NguoiDung.findOne({
    where: { taiKhoan: nguoiDung.taiKhoan },
  });
  userFound.avatar = urlImage;
  await userFound.save();
  res.send(userFound);
};

const deleteNguoiDung = async (req, res) => {
  const { id } = req.params;
  try {
    const content = await NguoiDung.destroy({ where: { id } });
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
        content: "Tài khoản không hợp lệ!",
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

const editTaiKhoan = async (req, res) => {
  const { nguoiDung } = req;
  const { taiKhoan, matKhau, email, soDt, maLoaiNguoiDung, hoTen } = req.body;
  // tạo ra một chuõi ngẫu nhiên
  const salt = bcrypt.genSaltSync(10);
  // mã hoá salt + password
  const hashPassword = bcrypt.hashSync(matKhau, salt);
  try {
    const content = await NguoiDung.findOne({
      taiKhoan: nguoiDung.taiKhoan,
    });
    if (taiKhoan == nguoiDung.taiKhoan) {
      content.taiKhoan = taiKhoan;
      content.matKhau = hashPassword;
      content.email = email;
      content.soDt = soDt;
      content.maLoaiNguoiDung = maLoaiNguoiDung;
      content.hoTen = hoTen;
      await content.save();
      res.status(200).send({
        statusCode: 200,
        message: "Xử lý thành công!",
        content,
        dateTime: new Date(),
        messageConstants: null,
      });
    } else {
      res.status(500).send({
        statusCode: 500,
        message: "Dữ liệu không hợp lệ!",
        content: "Bạn không có quyền thay đổi tài khoản người khác!",
        dateTime: new Date(),
        messageConstants: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Dữ liệu không hợp lệ!",
      content: "Loại người dùng không hợp lệ!",
      dateTime: new Date(),
      messageConstants: null,
    });
  }
};

const getThongTinTaiKhoan = async (req, res) => {
  const { taiKhoan } = req.body;
  const content = await NguoiDung.findAll({ where: { taiKhoan } });
  try {
    res
      .status(200)
      .send({
        statusCode: 200,
        message: "Xử lý thành công!",
        content,
        dateTime: new Date(),
        messageConstants: null,
      });
  } catch (err) {
    res.status(400).send({
      statusCode: 400,
      message: "Không tìm thấy tài nguyên!",
      content: "Tài khoản không hợp lệ!",
      dateTime: new Date(),
      messageConstants: null,
    });
  }
};
module.exports = {
  register,
  getAllDanhSachNguoiDung,
  login,
  uploadAvatar,
  postThemNguoiDung,
  deleteNguoiDung,
  editTaiKhoan,
  getThongTinTaiKhoan,
};
